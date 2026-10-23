
import { useState } from "react";
import "./App.css";

const services = [
  {
    number: "01",
    title: "Accounting & Bookkeeping",
    description:
      "Clear, dependable financial records and reporting that help you understand where your business stands and what needs attention.",
    detail: "Records · Reporting · Financial visibility",
  },
  {
    number: "02",
    title: "Audit & Assurance",
    description:
      "Structured assurance support that promotes transparency, strengthens accountability, and helps stakeholders make informed assessments.",
    detail: "Transparency · Accountability · Confidence",
  },
  {
    number: "03",
    title: "Tax Compliance",
    description:
      "Practical support to help you understand filing responsibilities, keep tax matters organised, and navigate applicable requirements.",
    detail: "Compliance · Filing · Tax planning support",
  },
  {
    number: "04",
    title: "Business Advisory",
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

function Brand({ footer = false }) {
  return (
    <a
      className={`brand${footer ? " brand-footer" : ""}`}
      href="#home"
      aria-label="Intellect Illumine Advisory home"
    >
      <span className="brand-mark" aria-hidden="true">
        <span>I</span>
        <span>I</span>
      </span>

      <span className="brand-copy">
        <strong>INTELLECT ILLUMINE</strong>
        <small>ADVISORY</small>
      </span>
    </a>
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

      <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
      <div className="visual-orbit visual-orbit-two" aria-hidden="true" />

      <span className="visual-side-label" aria-hidden="true">
        CLARITY / DIRECTION / CONFIDENCE
      </span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="home">
      <div className="topbar">
        <div className="container topbar-inner">
          <p>Clarity in numbers. Confidence in decisions.</p>
          <a href="#contact">
            Start a conversation <ArrowUpRight />
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container navbar">
          <Brand />

          <button
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav
            className={`nav-links${menuOpen ? " nav-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#approach" onClick={closeMenu}>
              Our approach
            </a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let's talk <ArrowUpRight />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                FINANCIAL CLARITY. STRATEGIC PERSPECTIVE.
              </div>

              <p className="hero-overline">
                ADVISORY FOR BUSINESSES WITH AMBITION
              </p>

              <h1>
                Numbers tell a story.
                <br />
                <span>Know what they</span>
                <br />
                mean for you.
              </h1>

              <p className="hero-description">
                Accounting, audit, tax compliance, and business advisory—connected
                by one purpose: helping you see your financial position more
                clearly and make your next move with confidence.
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
                <span>Audit &amp; assurance</span>
                <i>/</i>
                <span>Tax compliance</span>
                <i>/</i>
                <span>Business advisory</span>
              </div>

              <span className="hero-bottom-index">NAIROBI, KENYA</span>
            </div>
          </div>
        </section>

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
                  Your numbers should do more than record the past. They should
                  help you understand the present and think more clearly about
                  what comes next.
                </p>

                <p>
                  Intellect Illumine Advisory is positioned to support
                  businesses with financial responsibilities, reporting,
                  compliance, and decision-making. We bring the detail into
                  focus—connecting the immediate requirements with the bigger
                  picture of running a business.
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
                Essential financial services, considered together and shaped
                around your business context and objectives.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <span className="service-number">{service.number}</span>
                    <span className="service-arrow">
                      <ArrowUpRight />
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-detail">{service.detail}</div>

                  <a className="service-link" href="#contact">
                    Discuss this service <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>

            <p className="services-note">
              Service scope and availability can be confirmed during an initial
              conversation.
            </p>
          </div>
        </section>

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
                approach starts with understanding the context before focusing
                on the numbers, the requirements, and the next decision.
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
                Tell us a little about the support you're looking for. We can
                start with your priorities and explore the most useful next
                step.
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

              <h3>What would you like clarity on?</h3>

              <p>
                Choose the easiest way to get in touch and tell us what you
                have in mind.
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

      <footer className="site-footer">
        <div className="container footer-main">
          <Brand footer />

          <p>
            Clarity in numbers.
            <br />
            Confidence in decisions.
          </p>

          <a className="footer-back-top" href="#home">
            Back to top ↑
          </a>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Intellect Illumine Advisory
          </span>
          <span>All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
