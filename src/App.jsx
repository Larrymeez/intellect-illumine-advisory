
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TaxCompliance from "./pages/services/TaxCompliance";
import AIChatWidget from "./components/AIChatWidget";
import "./App.css";

function PlaceholderPage({ title, description }) {
  return (
    <main className="section">
      <div className="container">
        <div className="section-intro">
          <span className="section-kicker">INTELLECT ILLUMINE ADVISORY</span>
          <h1>{title}</h1>
        </div>
        <p className="lead-copy">{description}</p>
        <a className="button button-gold" href="/#contact">
          Talk to an Advisor <span aria-hidden="true">↗</span>
        </a>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={
              <PlaceholderPage
                title="About Us"
                description="Learn about Intellect Illumine Advisory and our commitment to financial clarity, accountability, and practical business guidance."
              />
            }
          />

          <Route
            path="/insights"
            element={
              <PlaceholderPage
                title="Insights"
                description="Explore practical perspectives on accounting, tax compliance, financial management, and business decisions."
              />
            }
          />

          <Route
            path="/contact"
            element={
              <PlaceholderPage
                title="Let's Start a Conversation"
                description="Tell us about your business and the financial or advisory support you need."
              />
            }
          />

          <Route
            path="/services/accounting-bookkeeping"
            element={
              <PlaceholderPage
                title="Accounting & Bookkeeping"
                description="Clear financial records and reporting to help you understand your business performance and financial position."
              />
            }
          />

          <Route
            path="/services/audit-assurance"
            element={
              <PlaceholderPage
                title="Audit & Assurance"
                description="Structured assurance support that promotes transparency, accountability, and informed assessments."
              />
            }
          />

          <Route
  path="/services/tax-compliance"
  element={<TaxCompliance />}
/>

          <Route
            path="/services/business-advisory"
            element={
              <PlaceholderPage
                title="Business Advisory"
                description="Financial perspective and practical guidance to support business planning and informed decisions."
              />
            }
          />

          <Route
            path="*"
            element={
              <PlaceholderPage
                title="Page Not Found"
                description="The page you are looking for could not be found."
              />
            }
          />
        </Routes>

        <Footer />
        <AIChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
