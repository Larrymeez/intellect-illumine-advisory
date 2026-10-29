
import "./../App.css";

const services = [
  {
    label: "Accounting & Bookkeeping",
    href: "/services/accounting-bookkeeping",
  },
  {
    label: "Audit & Assurance",
    href: "/services/audit-assurance",
  },
  {
    label: "Tax Compliance",
    href: "/services/tax-compliance",
  },
  {
    label: "Business Advisory",
    href: "/services/business-advisory",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Approach", href: "/#approach" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* MAIN FOOTER */}
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="/"
              className="footer-logo-link"
              aria-label="Intellect Illumine Advisory home"
            >
              <img
                src="/intellect-illumine-logo.png"
                alt="Intellect Illumine Advisory"
                className="footer-logo"
                loading="lazy"
              />
            </a>

            <p className="footer-brand-description">
              Financial clarity. Confident business growth.
            </p>

            <p className="footer-brand-copy">
              Practical accounting, audit, tax compliance, and business
              advisory support for businesses seeking clarity, accountability,
              and sustainable growth.
            </p>

            <div className="footer-socials">
              <a
                href="https://wa.me/254757470272"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Intellect Illumine Advisory on WhatsApp"
                className="footer-social-link"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.3-5a8.4 8.4 0 1 1 16.2-3.7Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 7.8c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.8c-.2.2-.2.4 0 .7.5.9 1.3 1.6 2.2 2.1.3.2.5.2.7-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.2-.7 1.6-.5.5-1.2.8-2 .7-1.1-.1-2.5-.7-4-2-1.2-1.1-2-2.4-2.3-3.4-.3-1 .1-2 .5-2.5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="mailto:Intellectillumineadvisory@gmail.com"
                aria-label="Email Intellect Illumine Advisory"
                className="footer-social-link"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find Intellect Illumine Advisory on LinkedIn"
                className="footer-social-link"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 8.5H2.5V21H5V8.5ZM3.75 6.8a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3ZM21.5 13.8c0-3.8-2-5.6-4.7-5.6a4.1 4.1 0 0 0-3.7 2V8.5h-2.5V21h2.5v-6.2c0-1.6.3-3.2 2.3-3.2s2.1 1.8 2.1 3.3V21h2.5v-7.2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>Explore</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <ul>
              {services.map((service) => (
                <li key={service.href}>
                  <a href={service.href}>{service.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <p className="footer-contact-intro">
              Have a question about your business finances? Let's start a
              conversation.
            </p>

            <a className="footer-contact-item" href="tel:+254757470272">
              <span className="footer-contact-label">PHONE / WHATSAPP</span>
              <span>+254 757 470 272</span>
            </a>

            <a
              className="footer-contact-item"
              href="mailto:Intellectillumineadvisory@gmail.com"
            >
              <span className="footer-contact-label">EMAIL</span>
              <span className="footer-email-address">
                Intellectillumineadvisory@gmail.com
              </span>
            </a>

            <a
              href="https://wa.me/254757470272"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-cta"
            >
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Intellect Illumine Advisory. All rights reserved.
          </p>

          <p className="footer-bottom-location">
            Nairobi, Kenya <span>·</span> Financial clarity. Confident growth.
          </p>

          <a href="#home" className="footer-back-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
