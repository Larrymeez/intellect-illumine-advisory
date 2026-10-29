
import { useState } from "react";
import "../App.css";

const WHATSAPP_URL =
  "https://wa.me/254757470272?text=" +
  encodeURIComponent(
    "Hello Intellect Illumine Advisory, I would like to enquire about your services."
  );

const suggestions = [
  "What tax services do you offer?",
  "I need accounting support",
  "How can I contact an advisor?",
];

const knowledgeBase = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    answer:
      "Hello and welcome to Intellect Illumine Advisory. I can help you explore our services and find the right next step for your business.",
  },
  {
    keywords: ["tax", "kra", "itr", "filing", "returns", "compliance", "itax"],
    answer:
      "Our Tax Compliance service helps businesses organise tax records, understand applicable filing requirements, and prepare for their compliance obligations. For advice specific to your circumstances, we recommend speaking directly with an advisor.",
  },
  {
    keywords: ["accounting", "bookkeeping", "accounts", "records", "financial statements"],
    answer:
      "Our Accounting & Bookkeeping service supports organised financial records and reporting, helping business owners better understand their financial position and performance.",
  },
  {
    keywords: ["audit", "assurance", "auditing"],
    answer:
      "Our Audit & Assurance service focuses on structured assurance support, transparency, and accountability. Contact our team to discuss the requirements relevant to your organisation.",
  },
  {
    keywords: ["advisory", "business advice", "planning", "growth", "strategy"],
    answer:
      "Our Business Advisory service offers practical financial perspective and guidance to support business planning and informed decisions.",
  },
  {
    keywords: ["contact", "phone", "email", "whatsapp", "advisor", "consultation", "talk"],
    answer:
      "You can reach Intellect Illumine Advisory by phone at +254 757 470 272 or email Intellectillumineadvisory@gmail.com. You can also use the WhatsApp contact option below to start a conversation.",
  },
  {
    keywords: ["price", "pricing", "cost", "fee", "charges", "how much"],
    answer:
      "Our fees depend on the nature and scope of the service required. Please contact our team to discuss your needs and request a quotation.",
  },
  {
    keywords: ["sme", "small business", "business owner", "company"],
    answer:
      "We primarily support small and medium-sized enterprises with accounting, audit and assurance, tax compliance, and business advisory services.",
  },
];

function getAnswer(message) {
  const normalized = message.toLowerCase();

  const match = knowledgeBase.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );

  if (match) return match.answer;

  return "Thank you for your question. I can provide introductory information about our accounting, audit and assurance, tax compliance, and business advisory services. For a more specific answer, please contact our team directly.";
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Welcome to Intellect Illumine Advisory. How can we help your business today?",
    },
  ]);

  function sendMessage(text) {
    const trimmed = text.trim();

    if (!trimmed) return;

    const answer = getAnswer(trimmed);

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: answer },
    ]);

    setMessage("");
  }

  return (
    <div className="ai-assistant">
      {isOpen && (
        <section
          className="ai-chat-panel"
          aria-label="Intellect Illumine website assistant"
        >
          <header className="ai-chat-header">
            <div className="ai-chat-brand">
              <div className="ai-chat-avatar">II</div>
              <div>
                <strong>Intellect Assistant</strong>
                <span>Here to point you in the right direction</span>
              </div>
            </div>

            <button
              type="button"
              className="ai-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
            >
              ×
            </button>
          </header>

          <div className="ai-chat-disclaimer">
            Automated introductory guidance · Demo mode
          </div>

          <div className="ai-chat-messages" aria-live="polite">
            {messages.map((item, index) => (
              <div
                key={`${index}-${item.role}`}
                className={`ai-chat-message ${
                  item.role === "user" ? "is-user" : "is-assistant"
                }`}
              >
                {item.text}
              </div>
            ))}
          </div>

          {messages.length === 1 && (
            <div className="ai-chat-suggestions">
              {suggestions.map((suggestion) => (
                <button
                  type="button"
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <form
            className="ai-chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(message);
            }}
          >
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask us a question..."
              aria-label="Your question"
              maxLength={500}
            />
            <button type="submit" aria-label="Send message">
              Send
            </button>
          </form>

          <div className="ai-chat-footer">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Speak to our team on WhatsApp ↗
            </a>
          </div>
        </section>
      )}

      <button
        type="button"
        className={`ai-chat-launcher ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close assistant" : "Open website assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? "×" : <span className="ai-launcher-content">Ask us <span>✦</span></span>}
      </button>
    </div>
  );
}
