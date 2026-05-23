import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { site } from '@/lib/site';

/**
 * POST /api/donate
 * body: { amount: cents, cadence: 'once' | 'monthly', designation: string }
 *
 * Creates a Stripe Checkout session and returns the redirect URL.
 * Requires STRIPE_SECRET_KEY in env. Until set, returns a stub URL so the form
 * can be exercised end-to-end during local design review.
 */
export async function POST(req: Request) {
  try {
    const { amount, cadence, designation } = (await req.json()) as {
      amount: number;
      cadence: 'once' | 'monthly';
      designation: string;
    };

    if (!Number.isInteger(amount) || amount < 100) {
      return NextResponse.json({ error: 'Invalid amount.' }, { status: 400 });
    }

    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      // Stub: lets the UI flow be tested before keys are wired.
      return NextResponse.json({
        url: `${site.url}/foundation/donate?stubbed=1&amount=${amount}&cadence=${cadence}`,
      });
    }

    const stripe = new Stripe(key, { apiVersion: '2024-09-30.acacia' as Stripe.LatestApiVersion });

    const session = await stripe.checkout.sessions.create({
      mode: cadence === 'monthly' ? 'subscription' : 'payment',
      success_url: `${site.url}/foundation/donate/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${site.url}/foundation/donate?cancelled=1`,
      payment_method_types: ['card'],
      metadata: { designation },
      ...(cadence === 'monthly'
        ? {
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  recurring: { interval: 'month' },
                  product_data: {
                    name: 'Lebarty Foundation — monthly donation',
                  },
                  unit_amount: amount,
                },
                quantity: 1,
              },
            ],
          }
        : {
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: 'Lebarty Foundation — donation',
                  },
                  unit_amount: amount,
                },
                quantity: 1,
              },
            ],
          }),
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
