import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/site/Section";
import { Prose } from "@/components/site/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description:
    "Our commitment to digital accessibility — WCAG 2.1 Level AA, the steps we take, and how to give us feedback.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Accessibility statement"
        intro="Care should be accessible to everyone — and so should our website. If anything here does not work for you, please tell us and we will fix it."
      />

      <Section width="narrow">
        <Prose>
          <p className="text-sm text-fg/55">Last updated: May 2026</p>

          <h2>Our commitment</h2>
          <p>
            Lebarty Medical PLLC is committed to ensuring digital accessibility
            for people with disabilities. We are continually improving the user
            experience for everyone and applying the relevant accessibility
            standards to make our website usable by as many people as possible.
          </p>

          <h2>Conformance status</h2>
          <p>
            This website aims to conform to the{" "}
            <a
              href="https://www.w3.org/WAI/WCAG21/quickref/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Web Content Accessibility Guidelines (WCAG) 2.1
            </a>{" "}
            at Level AA. These guidelines explain how to make web content more
            accessible for people with disabilities and more usable for everyone.
            We review the site regularly and treat accessibility as an ongoing
            effort rather than a one-time task.
          </p>

          <h2>What we do</h2>
          <p>To support accessibility across the site, we work to:</p>
          <ul>
            <li>
              Provide meaningful text alternatives for images and other
              non-text content.
            </li>
            <li>
              Use clear heading structure and labels so the site can be
              navigated with assistive technology.
            </li>
            <li>
              Maintain sufficient color contrast between text and its
              background.
            </li>
            <li>
              Support keyboard navigation and visible focus indicators
              throughout the site.
            </li>
            <li>
              Respect reduced-motion preferences for visitors who prefer less
              animation.
            </li>
            <li>
              Build responsive pages that adapt to different screen sizes and
              zoom levels.
            </li>
          </ul>

          <h2>Known limitations</h2>
          <p>
            Despite our best efforts, some content may not yet be fully
            accessible. Where third-party tools or embedded content fall short
            of our standards, we work with those providers to improve them and
            offer alternative ways to reach the same information or services.
          </p>

          <h2>Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of this website. If
            you encounter a barrier, or need information in a different format,
            please contact us:
          </p>
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
          <p>
            We aim to respond to accessibility feedback within two business
            days.
          </p>

          <h2>Assistance with care</h2>
          <p>
            If you need help scheduling or attending an appointment because of
            a disability, please let our team know. We will do our best to
            accommodate your needs so you can receive the care you came for.
          </p>
        </Prose>
      </Section>
    </>
  );
}
