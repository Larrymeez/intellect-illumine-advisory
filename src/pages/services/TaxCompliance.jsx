
import "../../App.css";

const services = [
  {
    number: "01",
    title: "Tax Returns & Filing Support",
    description:
      "Support with preparing, reviewing, and submitting applicable tax returns, informed by the records and information available.",
    tags: ["Return preparation", "Filing support"],
  },
  {
    number: "02",
    title: "Tax Records & Reconciliation",
    description:
      "Review relevant financial records, tax payments, and supporting documents to help identify inconsistencies and missing information.",
    tags: ["Records review", "Reconciliation"],
  },
  {
    number: "03",
    title: "Ongoing Tax Compliance",
    description:
      "Practical support in understanding applicable tax obligations, keeping records organised, and planning for upcoming filing requirements.",
    tags: ["Obligation review", "Compliance planning"],
  },
  {
    number: "04",
    title: "Tax Compliance Certificate Readiness",
    description:
      "Review the key compliance areas relevant to a Tax Compliance Certificate application and identify issues that may need attention.",
    tags: ["Readiness review", "Issue identification"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand your position",
    description:
      "We discuss your business, relevant tax obligations, existing records, and the specific support you need.",
  },
  {
    number: "02",
    title: "Review the details",
    description:
      "We review the information provided to identify missing records, inconsistencies, and matters that may require attention.",
  },
  {
    number: "03",
    title: "Agree on the next steps",
    description:
      "We explain the findings, clarify the priorities, and agree on an appropriate course of action with you.",
  },
  {
    number: "04",
    title: "Support follow-through",
    description:
      "Depending on the agreed scope, we support the relevant compliance work and help you understand what needs to happen next.",
  },
];

function ArrowUpRight() {
  return (
    <span className="tax-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function TaxCompliance() {
  const emailSubject = encodeURIComponent(
    "Tax Compliance Consultation"
  );

  const emailBody = encodeURIComponent(
    "Hello Intellect Illumine Advisory,\n\nI would like to enquire about your tax compliance services.\n\nBusiness name:\nSupport required:\nPreferred contact method:\n\nThank you."
  );

  const whatsappMessage = encodeURIComponent(
    "Hello Intellect Illumine Advisory. I would like to enquire about your tax compliance services."
  );

  return (
    <main className="tax-page">
      {/* HERO */}
      <section className="tax-hero">
        <div className="container tax-hero-grid">
          <div className="tax-hero-copy">
            <div className="tax-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/#services">Services</a>
              <span>/</span>
              <span>Tax Compliance</span>
            </div>

            <span className="tax-eyebrow">
              INTELLECT ILLUMINE ADVISORY
            </span>

            <h1>
              Tax compliance,
              <br />
              <em>with clarity.</em>
            </h1>

            <p className="tax-hero-description">
              Stay organised, understand your tax responsibilities, and
              approach compliance with greater confidence. We help businesses
              navigate tax-related requirements with practical support
              grounded in their circumstances.
            </p>

            <div className="tax-hero-actions">
              <a
                href={`https://wa.me/254757470272?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="tax-button tax-button-gold"
              >
                Discuss your tax needs <ArrowUpRight />
              </a>

              <a href="#tax-services" className="tax-text-link">
                Explore the service <span>↓</span>
              </a>
            </div>

            <div className="tax-hero-note">
              <span className="tax-status-dot" />
              Practical guidance. Clear next steps.
            </div>
          </div>

          <div className="tax-hero-visual">
            <div className="tax-visual-topline">
              <span>COMPLIANCE OVERVIEW</span>
              <span>IIA / 03</span>
            </div>

            <div className="tax-document">
              <div className="tax-document-heading">
                <div className="tax-document-mark">IIA</div>
                <div>
                  <span>BUSINESS TAX</span>
                  <strong>Compliance review</strong>
                </div>
                <span className="tax-document-icon">↗</span>
              </div>

              <div className="tax-document-rule" />

              <p className="tax-document-intro">
                A clearer view of your obligations starts with the right
                information.
              </p>

              <div className="tax-check-row">
                <span className="tax-check-number">01</span>
                <div>
                  <strong>Records & documentation</strong>
                  <span>Review available information</span>
                </div>
                <span className="tax-check-symbol">↗</span>
              </div>

              <div className="tax-check-row">
                <span className="tax-check-number">02</span>
                <div>
                  <strong>Returns & obligations</strong>
                  <span>Understand what applies</span>
                </div>
                <span className="tax-check-symbol">↗</span>
              </div>

              <div className="tax-check-row">
                <span className="tax-check-number">03</span>
                <div>
                  <strong>Priorities & next steps</strong>
                  <span>Identify matters needing attention</span>
                </div>
                <span className="tax-check-symbol">↗</span>
              </div>

              <div className="tax-document-footer">
                <span className="tax-status-dot" />
                A considered approach to compliance
              </div>
            </div>

            <div className="tax-visual-caption">
              CLARITY <span>·</span> ACCOUNTABILITY <span>·</span> CONFIDENCE
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="tax-intro-section">
        <div className="container tax-intro-grid">
          <div>
            <span className="tax-section-kicker">
              01 <span>—</span> WHY IT MATTERS
            </span>

            <h2>
              Compliance is more than a deadline.
              <em> It is part of running a well-informed business.</em>
            </h2>
          </div>

          <div className="tax-intro-copy">
            <p>
              Tax responsibilities can become difficult to manage when
              records are incomplete, obligations are unclear, or filing
              requirements compete with the daily demands of running a
              business.
            </p>

            <p>
              Intellect Illumine Advisory helps businesses approach these
              responsibilities in a more structured way: understanding what
              applies, reviewing the available information, and identifying
              practical next steps.
            </p>

            <a className="tax-inline-link" href="#tax-process">
              See how we work <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE OFFERINGS */}
      <section className="tax-services-section" id="tax-services">
        <div className="container">
          <div className="tax-section-heading">
            <div>
              <span className="tax-section-kicker">
                02 <span>—</span> WHAT WE CAN HELP WITH
              </span>

              <h2>
                Tax support that starts
                <br />
                <em>with your business.</em>
              </h2>
            </div>

            <p>
              The right support depends on your business structure, applicable
              tax obligations, available records, and current circumstances.
              We begin by understanding your needs.
            </p>
          </div>

          <div className="tax-services-grid">
            {services.map((service) => (
              <article className="tax-service-card" key={service.number}>
                <div className="tax-service-card-top">
                  <span>{service.number}</span>
                  <span className="tax-service-card-icon">
                    <ArrowUpRight />
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="tax-service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="tax-service-disclaimer">
            Services are confirmed following an initial discussion and
            assessment of the support required.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="tax-process-section" id="tax-process">
        <div className="container tax-process-grid">
          <div className="tax-process-intro">
            <span className="tax-section-kicker tax-kicker-light">
              03 <span>—</span> OUR PROCESS
            </span>

            <h2>
              A clear way
              <br />
              <em>forward.</em>
            </h2>

            <p>
              You should understand what is being reviewed, what needs
              attention, and what happens next. Our approach is designed to
              keep the process structured and communication straightforward.
            </p>

            <a
              href={`mailto:Intellectillumineadvisory@gmail.com?subject=${emailSubject}&body=${emailBody}`}
              className="tax-button tax-button-outline"
            >
              Request a consultation <ArrowUpRight />
            </a>
          </div>

          <div className="tax-process-list">
            {process.map((step) => (
              <article className="tax-process-step" key={step.number}>
                <span className="tax-process-number">{step.number}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                <span className="tax-process-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="tax-clients-section">
        <div className="container">
          <div className="tax-clients-heading">
            <span className="tax-section-kicker">
              04 <span>—</span> WHO WE SUPPORT
            </span>

            <h2>
              Support shaped around
              <em> your circumstances.</em>
            </h2>

            <p>
              Whether you are establishing your processes or reviewing
              existing obligations, the first step is understanding your
              particular situation.
            </p>
          </div>

          <div className="tax-client-types">
            <article>
              <span>01</span>
              <h3>Small & medium businesses</h3>
              <p>
                Support with organising tax information and understanding
                relevant business obligations.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Growing enterprises</h3>
              <p>
                A structured approach to tax-related records, reporting
                requirements, and compliance processes.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Businesses reviewing their position</h3>
              <p>
                Assistance in identifying outstanding questions, record gaps,
                and potential next steps.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="tax-cta-section" id="tax-enquiry">
        <div className="container tax-cta-inner">
          <div className="tax-cta-copy">
            <span className="tax-section-kicker tax-kicker-light">
              05 <span>—</span> LET'S TALK
            </span>

            <h2>
              Make your next tax decision
              <em> with greater clarity.</em>
            </h2>

            <p>
              Tell us about your business and the tax compliance support you
              are looking for. We'll start with a conversation about your
              needs and the appropriate next steps.
            </p>
          </div>

          <div className="tax-cta-actions">
            <a
              href={`https://wa.me/254757470272?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tax-button tax-button-gold"
            >
              Enquire on WhatsApp <ArrowUpRight />
            </a>

            <a
              href={`mailto:Intellectillumineadvisory@gmail.com?subject=${emailSubject}&body=${emailBody}`}
              className="tax-button tax-button-outline"
            >
              Send an email <ArrowUpRight />
            </a>

            <span>INTELLECT ILLUMINE ADVISORY · NAIROBI, KENYA</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TaxCompliance;
