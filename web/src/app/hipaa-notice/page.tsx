import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/site/Section";
import { Prose } from "@/components/site/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "HIPAA notice of privacy practices",
  description:
    "How Lebarty Medical PLLC may use and disclose your protected health information, and your rights regarding that information.",
};

export default function HipaaNoticePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="HIPAA notice of privacy practices"
        intro="This notice describes how medical information about you may be used and disclosed, and how you can get access to that information. Please review it carefully."
      />

      <Section width="narrow">
        <Prose>
          <p className="text-sm text-fg/55">
            Effective date: May 2026
          </p>

          <p>
            <strong>
              This notice describes how medical information about you may be
              used and disclosed and how you can get access to this
              information. Please review it carefully.
            </strong>
          </p>

          <h2>Our duties</h2>
          <p>
            Lebarty Medical PLLC is required by law to maintain the privacy of
            your protected health information, to provide you with this notice
            of our legal duties and privacy practices, and to follow the terms
            of the notice currently in effect. Protected health information is
            information about you, including demographic details, that can be
            used to identify you and that relates to your past, present, or
            future physical or mental health, the care you receive, or payment
            for that care.
          </p>

          <h2>How we may use and disclose your health information</h2>
          <p>
            We may use and disclose your protected health information for the
            following purposes without your specific authorization:
          </p>
          <ul>
            <li>
              <strong>Treatment.</strong> We use your health information to
              provide and coordinate your medical care, and we may share it with
              other providers, specialists, laboratories, or facilities involved
              in your treatment.
            </li>
            <li>
              <strong>Payment.</strong> We may use and disclose your health
              information to bill and obtain payment for the services you
              receive — for example, by sending claims to your insurance plan.
            </li>
            <li>
              <strong>Health care operations.</strong> We may use your
              information for activities necessary to run our practice, such as
              quality review, training, scheduling, and administrative
              functions.
            </li>
            <li>
              <strong>Appointment reminders and care communications.</strong>{" "}
              We may contact you to remind you of appointments or to tell you
              about treatment options or health-related services.
            </li>
            <li>
              <strong>As required or permitted by law.</strong> We may disclose
              your information for public health activities, to report abuse or
              neglect, for health oversight, in judicial or administrative
              proceedings, to law enforcement, to avert a serious threat to
              health or safety, and for other purposes permitted or required by
              law.
            </li>
          </ul>

          <h2>Uses and disclosures that require your authorization</h2>
          <p>
            Other uses and disclosures of your health information not described
            in this notice will be made only with your written authorization.
            This includes most uses of psychotherapy notes, uses for marketing
            purposes, and any sale of your health information. If you give us
            written authorization, you may revoke it at any time, in writing,
            except to the extent we have already acted in reliance on it.
          </p>

          <h2>Your rights regarding your health information</h2>
          <p>You have the following rights with respect to your information:</p>
          <ul>
            <li>
              <strong>Right to access.</strong> You may inspect and request a
              copy of your medical and billing records.
            </li>
            <li>
              <strong>Right to amend.</strong> You may request that we correct
              health information you believe is incorrect or incomplete.
            </li>
            <li>
              <strong>Right to an accounting of disclosures.</strong> You may
              request a list of certain disclosures we have made of your health
              information.
            </li>
            <li>
              <strong>Right to request restrictions.</strong> You may ask us to
              limit how we use or disclose your information. We are not required
              to agree to all requests, but we will honor a request to restrict
              disclosure to a health plan when you have paid for the service in
              full out of pocket.
            </li>
            <li>
              <strong>Right to confidential communications.</strong> You may
              ask us to contact you in a specific way or at a specific location.
            </li>
            <li>
              <strong>Right to a paper copy of this notice.</strong> You may
              request a paper copy of this notice at any time, even if you
              agreed to receive it electronically.
            </li>
            <li>
              <strong>Right to be notified of a breach.</strong> You will be
              notified if a breach occurs that may have compromised the privacy
              or security of your information.
            </li>
          </ul>

          <h2>Changes to this notice</h2>
          <p>
            We reserve the right to change this notice and to make the revised
            notice effective for health information we already have as well as
            information we receive in the future. The current notice will be
            posted in our office and on this website, and will include its
            effective date.
          </p>

          <h2>Complaints</h2>
          <p>
            If you believe your privacy rights have been violated, you may file
            a complaint with our practice or with the U.S. Department of Health
            and Human Services, Office for Civil Rights. We will not retaliate
            against you for filing a complaint.
          </p>

          <h2>Contact us</h2>
          <p>
            To exercise any of your rights, to ask a question about this
            notice, or to file a complaint with our practice, please contact
            us:
          </p>
          <ul>
            <li>{site.location.name}</li>
            <li>
              {site.location.street}, {site.location.city},{" "}
              {site.location.region} {site.location.postalCode}
            </li>
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
          </ul>
        </Prose>
      </Section>
    </>
  );
}
