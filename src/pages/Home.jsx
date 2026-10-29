
import "../App.css";
import { Link } from "react-router-dom";


const services = [
  {
    number: "01",
    title: "Accounting & Bookkeeping",
    path: "/services/accounting-bookkeeping",
    description:
      "Clear, dependable financial records and reporting that help you understand where your business stands and what needs attention.",
    detail: "Records · Reporting · Financial visibility",
  },
  {
    number: "02",
    title: "Audit & Assurance",
    path: "/services/audit-assurance",
    description:
      "Structured assurance support that promotes transparency, strengthens accountability, and helps stakeholders make informed assessments.",
    detail: "Transparency · Accountability · Confidence",
  },
  {
    number: "03",
    title: "Tax Compliance",
    path: "/services/tax-compliance",
    description:
      "Practical support to help you understand filing responsibilities, keep tax matters organised, and navigate applicable requirements.",
    detail: "Compliance · Filing · Tax planning support",
  },
  {
    number: "04",
    title: "Business Advisory",
    path: "/services/business-advisory",
    description:
      "A considered view of your financial position, risks, and opportunities to support better planning and more confident decisions.",
    detail: "Insight · Risk awareness · Planning",
  },
];


const approach = [
  {
    number: "01",
    title: "Listen before advising",
    description:
      "We begin by understanding your business, priorities, obligations, and the decisions in front of you.",
  },
  {
    number: "02",
    title: "Make the picture clearer",
    description:
      "We organise the key details, identify what matters, and explain the options in practical terms.",
  },
  {
    number: "03",
    title: "Move forward with purpose",
    description:
      "The goal is a clearer next step, grounded in your circumstances and business objectives.",
  },
];

function ArrowUpRight() {
  return (
    <span className="arrow-up-right" aria-hidden="true">
      ↗
    </span>
  );
}

function InsightVisual() {
  const bars = [28, 39, 34, 51, 46, 63, 58, 76, 70, 89];

  return (
    <div
      className="insight-visual"
      aria-label="Decorative financial insight illustration"
    >
      <div className="visual-grid" aria-hidden="true" />

      <div className="visual-meta">
        <span>INTELLIGENCE IN PRACTICE</span>
        <span className="visual-index">IIA / 001</span>
      </div>

      <div className="visual-heading">
        <span className="visual-kicker">FROM INFORMATION</span>
        <h2>
          See the bigger
          <br />
          <em>financial picture.</em>
        </h2>
      </div>

      <div className="chart-panel">
        <div className="chart-topline">
          <span>Clarity creates perspective</span>
          <span className="chart-spark">↗</span>
        </div>

        <div className="chart-area" aria-hidden="true">
          {bars.map((height, index) => (
            <span
              className={`chart-bar${
                index === bars.length - 1 ? " chart-bar-featured" : ""
              }`}
              style={{ height: `${height}%` }}
              key={index}
            />
          ))}

          <svg
            className="chart-line"
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 83 C35 76 35 62 72 67 S119 51 145 57 S195 31 228 42 S281 23 310 28 S365 8 400 5" />
            <circle cx="400" cy="5" r="4" />
          </svg>
        </div>

        <div className="chart-bottomline">
          <span>UNDERSTAND</span>
          <span>ASSESS</span>
          <span>ACT</span>
        </div>
      </div>

      <div className="visual-footnote">
        <span className="visual-dot" />
        Insight for informed decisions
      </div>

      <div
        className="visual-orbit visual-orbit-one"
        aria-hidden="true"
      />
      <div
        className="visual-orbit visual-orbit-two"
        aria-hidden="true"
      />

      <span className="visual-side-label" aria-hidden="true">
        CLARITY / DIRECTION / CONFIDENCE
      </span>
    </div>
  );
}

function Home() {
  return (
    <div className="site-shell" id="home">
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                FINANCIAL CLARITY. CONFIDENT BUSINESS GROWTH.
              </div>

              <p className="hero-overline">
                ADVISORY FOR BUSINESSES WITH AMBITION
              </p>

              <h1>
                Clarity in your numbers.
                <br />
                <span>Confidence in</span>
                <br />
                your future.
              </h1>

              <p className="hero-description">
                Accounting, audit, tax compliance, and business advisory
                solutions designed to help SMEs manage their financial
                responsibilities, make informed decisions, and build
                sustainable businesses.
              </p>

              <div className="hero-actions">
                <a className="button button-gold" href="#contact">
                  Discuss your business <ArrowUpRight />
                </a>
                <a className="text-link" href="#services">
                  Explore our services <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="hero-note">
                <span className="note-dot" />
                Thoughtful advice. Practical perspective.
              </div>
            </div>

            <InsightVisual />
          </div>

          <div className="hero-bottom">
            <div className="container hero-bottom-inner">
              <span className="hero-bottom-label">OUR AREAS OF FOCUS</span>

              <div className="focus-list">
                <span>Accounting</span>
                <i>/</i>
                <span>Audit & assurance</span>
                <i>/</i>
                <span>Tax compliance</span>
                <i>/</i>
                <span>Business advisory</span>
              </div>

              <span className="hero-bottom-index">NAIROBI, KENYA</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="about-grid">
              <div className="section-intro">
                <span className="section-kicker">
                  01 <span>—</span> WHO WE ARE
                </span>

                <h2>
                  Good decisions start with{" "}
                  <em>clear understanding.</em>
                </h2>
              </div>

              <div className="about-copy">
                <p className="lead-copy">
                  Growing a business takes more than ambition. It takes a
                  clear understanding of your finances, your obligations,
                  and the decisions that shape your future.
                </p>

                <p>
                  Intellect Illumine Advisory supports small and medium-sized
                  enterprises with financial reporting, compliance, and
                  business-focused guidance. By connecting the numbers to
                  the bigger picture, we aim to help business owners approach
                  their responsibilities with greater clarity and confidence.
                </p>

                <a className="underlined-link" href="#contact">
                  Let's discuss what you need <ArrowUpRight />
                </a>
              </div>
            </div>

            <div className="principles-row">
              <article>
                <span className="principle-index">A / 01</span>
                <h3>Clarity</h3>
                <p>
                  Make financial information easier to understand and act on.
                </p>
              </article>

              <article>
                <span className="principle-index">A / 02</span>
                <h3>Accountability</h3>
                <p>
                  Approach responsibilities with care, structure, and
                  transparency.
                </p>
              </article>

              <article>
                <span className="principle-index">A / 03</span>
                <h3>Perspective</h3>
                <p>
                  Connect today's financial details to tomorrow's decisions.
                </p>
              </article>
            </div>
          </div>
        </section>

        
        {/* FOUNDER */}
        <section className="founder-section" id="founder">
          <div className="container founder-grid">
            <div className="founder-image-wrap">
              <img
                src="/patrick-maina-kagimbi.jpg"
                alt="CPA Patrick Maina Kagimbi, Founder and CEO of Intellect Illumine Advisory"
                className="founder-image"
                loading="lazy"
              />

              <div className="founder-image-caption">
                <span className="founder-caption-mark">IIA</span>
                <span>
                  <strong>CPA Patrick Maina Kagimbi</strong>
                  <small>Founder &amp; CEO</small>
                </span>
              </div>
            </div>

            <div className="founder-content">
              <span className="section-kicker">
                LEADERSHIP <span>—</span> THE PERSON BEHIND THE FIRM
              </span>

              <h2>
                Financial clarity begins with
                {" "}
                <em>the right perspective.</em>
              </h2>

              <p className="founder-lead">
                Meet CPA Patrick Maina Kagimbi, Founder and CEO of
                Intellect Illumine Advisory.
              </p>

              <p>
                With a vision to transform how organisations approach
                financial management, Patrick founded Intellect Illumine
                Advisory to deliver practical, impactful solutions.
              </p>

              <p>
                Guided by integrity, excellence, and a commitment to
                long-term partnerships, he leads the firm in helping
                clients approach financial responsibilities with greater
                clarity and make informed business decisions.
              </p>

              <a className="underlined-link" href="#contact">
                Start a conversation <ArrowUpRight />
              </a>

              <div className="founder-values">
                <span>INTEGRITY</span>
                <span>EXCELLENCE</span>
                <span>PARTNERSHIP</span>
              </div>
            </div>
          </div>
        </section>

        
        
        {/* INDUSTRY ENGAGEMENT */}
        <section className="summit-section" id="industry-engagement">
          <div className="container">
            <div className="summit-layout">
              <div className="summit-copy">
                <span className="section-kicker">
                  INDUSTRY ENGAGEMENT <span>—</span> 2026
                </span>

                <h2>
                  Involved in the conversations{" "}
                  <em>shaping African SMEs.</em>
                </h2>

                <p className="summit-intro">
                  Stronger businesses start with informed decisions.
                  We value professional conversations that explore the
                  opportunities and challenges facing small and
                  medium-sized enterprises.
                </p>

                <div className="summit-event">
                  <span className="summit-event-line" />
                  <div>
                    <strong>Africa SME Summit 2026</strong>
                    <p>
                      CPA Patrick Maina Kagimbi, Founder &amp; CEO of
                      Intellect Illumine Advisory, participated as a panelist.
                    </p>
                  </div>
                </div>

                <a className="underlined-link" href="#contact">
                  Connect with our team <ArrowUpRight />
                </a>
              </div>

              <div className="summit-gallery">
                <figure className="summit-image-main">
                  <img
                    src="/sme1.jpg"
                    alt="CPA Patrick Maina Kagimbi at the Africa SME Summit 2026"
                    loading="lazy"
                  />
                  <figcaption>
                    <span>01</span>
                    AFRICA SME SUMMIT · 2026
                  </figcaption>
                </figure>

                <figure className="summit-image-secondary">
                  <img
                    src="/sme2.jpg"
                    alt="Panel discussion at the Africa SME Summit 2026"
                    loading="lazy"
                  />
                </figure>

                <span className="summit-gallery-note">
                  INDUSTRY · INSIGHT · EXCHANGE
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* SERVICES */}
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading-row">
              <div className="section-intro">
                <span className="section-kicker">
                  02 <span>—</span> WHAT WE DO
                </span>

                <h2>
                  Expertise for the business{" "}
                  <em>behind the numbers.</em>
                </h2>
              </div>

              <p className="section-side-copy">
                Practical financial support for SMEs navigating day-to-day
                responsibilities, regulatory requirements, and the decisions
                that come with running and growing a business.
              </p>
            </div>

            
<div className="services-grid">
  {services.map((service) => (
    <Link
      to={service.path}
      className="service-card"
      key={service.number}
      aria-label={`Explore ${service.title}`}
    >
      <div className="service-card-top">
        <span className="service-number">{service.number}</span>
        <span className="service-arrow">
          <ArrowUpRight />
        </span>
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <div className="service-detail">{service.detail}</div>

      <span className="service-link">
        Explore service <span aria-hidden="true">→</span>
      </span>
    </Link>
  ))}
</div>


            <p className="services-note">
              Service scope and availability can be confirmed during an
              initial conversation.
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section className="approach-section" id="approach">
          <div className="container approach-grid">
            <div className="approach-intro">
              <span className="section-kicker section-kicker-light">
                03 <span>—</span> OUR APPROACH
              </span>

              <h2>
                Less guesswork.
                <br />
                <em>More perspective.</em>
              </h2>

              <p>
                Every business has its own pressures and priorities. Our
                approach starts with understanding the context before
                focusing on the numbers, the requirements, and the next
                decision.
              </p>

              <a className="button button-outline" href="#contact">
                Talk through your priorities <ArrowUpRight />
              </a>
            </div>

            <div className="approach-steps">
              {approach.map((step) => (
                <article className="approach-step" key={step.number}>
                  <span className="approach-number">{step.number}</span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  <span className="approach-plus" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}

              <div className="approach-signoff">
                <span className="signoff-line" />
                A clearer view of what comes next.
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker section-kicker-light">
                04 <span>—</span> START A CONVERSATION
              </span>

              <h2>
                Your next decision starts{" "}
                <em>with a conversation.</em>
              </h2>

              <p>
                Whether you are managing day-to-day financial responsibilities
                or planning your business's next stage of growth, let's start
                with a conversation about what your business needs.
              </p>

              <div className="contact-detail">
                <span className="contact-detail-icon">↗</span>

                <div>
                  <span>EMAIL</span>
                  <a href="mailto:info@intellectillumine.co.ke?subject=Business%20Enquiry">
                    info@intellectillumine.co.ke
                  </a>
                </div>
              </div>

              <p className="contact-location">
                Nairobi, Kenya <span>·</span> Accounting <span>·</span> Audit{" "}
                <span>·</span> Tax <span>·</span> Advisory
              </p>
            </div>

            <div className="contact-card">
              <span className="contact-card-label">
                YOUR BUSINESS, IN FOCUS
              </span>

              <h3>Let's talk about your business.</h3>

              <p>
                Tell us what you are working towards and where you need
                financial or business support. We can explore the next
                steps together.
              </p>

              <a
                className="button button-gold contact-button"
                href="mailto:info@intellectillumine.co.ke?subject=Business%20Enquiry&body=Hello%20Intellect%20Illumine%20Advisory%2C%0A%0AI%20would%20like%20to%20discuss%3A%0A%0ABusiness%20name%3A%0APreferred%20contact%3A%0A%0AThank%20you."
              >
                Send an enquiry <ArrowUpRight />
              </a>

              <div className="contact-card-foot">
                <span>CONFIDENTIALITY MATTERS</span>
                <span>IIA / 2026</span>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default Home;
