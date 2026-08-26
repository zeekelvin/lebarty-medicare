import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/site/Section";
import { Prose } from "@/components/site/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Lebarty Medicare collects, uses, and protects information on this website. We collect only what we need and we never sell your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="The short version: we collect only what we need, we never sell it, and we keep it secure. The full policy follows."
      />

      <Section width="narrow">
        <Prose>
          <p className="text-sm text-fg/55">Last updated: May 2026</p>

          <p>
            This privacy policy explains how Lebarty Medicare Hospital handles
            information collected through this website. It does not cover
            protected health information held in your medical record. That
            information is governed by our{" "}
            <a href="/hipaa-notice">HIPAA Notice of Privacy Practices</a>.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect information in two ways:
          </p>
          <ul>
            <li>
              <strong>Information you give us.</strong> When you fill out a
              contact form, request an appointment, or email us, you provide
              details such as your name, email address, phone number, and the
              content of your message.
            </li>
            <li>
              <strong>Information collected automatically.</strong> Like most
              websites, we collect standard technical and usage data, such as
              your browser type, device, and the pages you visit, to keep the
              site secure and understand how it is used.
            </li>
          </ul>
          <p>
            Please do not submit protected health information through the
            website forms. They are not a secure channel for clinical details.
          </p>

          <h2>How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your questions and messages.</li>
            <li>Schedule and confirm appointments.</li>
            <li>Process and acknowledge donations to the Foundation.</li>
            <li>Maintain the security and reliability of the website.</li>
            <li>Understand and improve how the site performs.</li>
          </ul>

          <h2>How we share information</h2>
          <p>
            <strong>We do not sell your personal information.</strong> We share
            it only with service providers who help us operate the website and
            communicate with you, and only as needed to do that work, or when
            required by law. Any such providers are expected to protect your
            information and use it only for the services they provide to us.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This site may use cookies and similar technologies to remember your
            preferences and measure site performance. You can control or
            disable cookies through your browser settings, though some parts of
            the site may not work as intended if you do.
          </p>

          <h2>Data security</h2>
          <p>
            We take reasonable administrative, technical, and physical measures
            to protect the information we collect. No method of transmission or
            storage is completely secure, so we cannot guarantee absolute
            security, but we work to safeguard your data and limit access to it.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of personal
            information we hold about you. You may also ask us to stop sending
            you non-essential communications. To make a request, contact us
            using the details below.
          </p>

          <h2>Children&rsquo;s privacy</h2>
          <p>
            This website is intended for a general audience and is not directed
            at children. We do not knowingly collect personal information from
            children through the site.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. When we do, we will
            revise the &ldquo;Last updated&rdquo; date above. Significant
            changes will be communicated through the website.
          </p>

          <h2>Contact us</h2>
          <p>If you have questions about this policy, please reach out:</p>
          <ul>
            <li>
              Phone:{" "}
              <a href={`tel:${site.contact.phoneTel}`}>
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </li>
            <li>
              Postal mail: {site.location.street}, {site.location.city},{" "}
              {site.location.region} {site.location.postalCode}
            </li>
          </ul>
        </Prose>
      </Section>
    </>
  );
}
