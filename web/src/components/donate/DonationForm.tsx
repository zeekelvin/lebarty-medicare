'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

const presets = [25, 50, 100, 250, 1000];
type Cadence = 'once' | 'monthly';

export function DonationForm() {
  const [cadence, setCadence] = useState<Cadence>('monthly');
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState<string>('');
  const [designation, setDesignation] = useState<string>('general');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const finalAmount = custom ? Number(custom) : amount;
      if (!finalAmount || finalAmount < 1) {
        throw new Error('Enter a donation amount of at least $1.');
      }
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          amount: Math.round(finalAmount * 100),
          cadence,
          designation,
        }),
      });
      const json = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !json.url) throw new Error(json.error ?? 'Could not start checkout.');
      window.location.assign(json.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-cream-50 p-8 shadow-soft ring-1 ring-inset ring-forest-500/10"
      aria-labelledby="donate-heading"
    >
      <h2 id="donate-heading" className="font-serif text-display text-forest-500">
        Your gift
      </h2>

      <fieldset className="mt-8">
        <legend className="text-eyebrow uppercase text-charcoal-500">Frequency</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 rounded-full bg-cream-100 p-1">
          {(['monthly', 'once'] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCadence(c)}
              className={cn(
                'rounded-full px-4 py-2.5 text-sm font-medium transition-colors',
                cadence === c
                  ? 'bg-forest-500 text-cream-50'
                  : 'text-charcoal-700 hover:bg-cream-200',
              )}
              aria-pressed={cadence === c}
            >
              {c === 'monthly' ? 'Monthly' : 'One-time'}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-eyebrow uppercase text-charcoal-500">Amount</legend>
        <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => {
                setAmount(p);
                setCustom('');
              }}
              className={cn(
                'rounded-2xl px-3 py-4 font-serif text-xl transition-colors',
                amount === p && !custom
                  ? 'bg-forest-500 text-cream-50'
                  : 'bg-cream-100 text-forest-500 hover:bg-cream-200',
              )}
              aria-pressed={amount === p && !custom}
            >
              ${p}
            </button>
          ))}
        </div>
        <label className="mt-4 block">
          <span className="text-sm text-charcoal-700">Or a custom amount</span>
          <div className="mt-2 flex items-center rounded-2xl bg-cream-100 px-4">
            <span className="font-serif text-lg text-charcoal-500">$</span>
            <input
              type="number"
              inputMode="decimal"
              min={1}
              step={1}
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder="Other amount"
              className="ml-2 w-full bg-transparent py-3 font-serif text-lg text-forest-500 placeholder:text-charcoal-300 focus:outline-none"
              aria-label="Custom donation amount in US dollars"
            />
          </div>
        </label>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-eyebrow uppercase text-charcoal-500">Designate your gift</legend>
        <div className="mt-3 grid gap-2">
          {[
            { value: 'general', label: 'Where most needed' },
            { value: 'clinics', label: 'Village clinics' },
            { value: 'maternal', label: 'Maternal & child health' },
            { value: 'training', label: 'Local medical training' },
          ].map((opt) => (
            <label
              key={opt.value}
              className={cn(
                'flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 ring-1 ring-inset transition-colors',
                designation === opt.value
                  ? 'bg-forest-50 ring-forest-500/40'
                  : 'bg-cream-50 ring-forest-500/10 hover:bg-cream-100',
              )}
            >
              <span className="font-sans text-sm text-charcoal-700">{opt.label}</span>
              <input
                type="radio"
                name="designation"
                value={opt.value}
                checked={designation === opt.value}
                onChange={(e) => setDesignation(e.target.value)}
                className="h-4 w-4 accent-forest-500"
              />
            </label>
          ))}
        </div>
      </fieldset>

      {error ? (
        <p
          role="alert"
          className="mt-6 rounded-2xl bg-terracotta-500/10 px-4 py-3 text-sm text-terracotta-700"
        >
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" variant="accent" disabled={isLoading} className="mt-8 w-full">
        {isLoading
          ? 'Loading secure checkout…'
          : `Donate ${custom ? `$${custom}` : `$${amount}`}${cadence === 'monthly' ? ' / month' : ''}`}
      </Button>

      <p className="mt-4 text-center text-xs text-charcoal-500">
        Payments processed securely by Stripe. You'll receive an emailed receipt.
      </p>
    </form>
  );
}
