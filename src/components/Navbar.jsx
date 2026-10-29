
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const services = [
  {
    title: "Accounting & Bookkeeping",
    path: "/services/accounting-bookkeeping",
  },
  {
    title: "Audit & Assurance",
    path: "/services/audit-assurance",
  },
  {
    title: "Tax Compliance",
    path: "/services/tax-compliance",
  },
  {
    title: "Business Advisory",
    path: "/services/business-advisory",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <img
            src="/intellect-illumine-logo.png"
            alt="Intellect Illumine Advisory"
            className="nav-logo"
          />
          <span className="nav-brand-text">
            <strong>INTELLECT ILLUMINE</strong>
            <small>ADVISORY</small>
          </span>
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <div className="nav-services">
            <button
              type="button"
              className="services-toggle"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <span className="dropdown-arrow">⌄</span>
            </button>

            <div
              className={`services-dropdown ${
                servicesOpen ? "services-dropdown-open" : ""
              }`}
            >
              {services.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  onClick={closeMenu}
                >
                  {service.title}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/insights" onClick={closeMenu}>
            Insights
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <Link
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Talk to an Advisor <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
