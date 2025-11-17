import { Link } from "react-router-dom";
import TabsCorrect from "./components/tabs/TabsCorrect";
import AccordionSemantic from "./components/accordion/AccordionSemantic";
import ModalCorrect from "./components/modal/ModalCorrect";
import "./App.css";

function RealApp() {
  return (
    <div className="app">
      <header>
        <h1>🚀 Real Application Example</h1>
        <p>All Components Working Together</p>
        <div className="subtitle">
          Demonstrating Cross-Component Communication & Auto-Behaviors
        </div>
        <nav style={{ marginTop: "20px" }}>
          <Link
            to="/"
            style={{
              padding: "10px 20px",
              background: "#1976d2",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            ← Back to Educational Demo
          </Link>
        </nav>
      </header>

      <main>
        <section className="intro">
          <h2>🎯 Real-World Implementation</h2>
          <p>
            This page shows how all the correct implementations work together in
            a real application:
          </p>
          <ul>
            <li>✅ All components are visible simultaneously</li>
            <li>✅ Cross-component communication via custom events</li>
            <li>
              ✅ Modal auto-closes when content is found in tabs/accordions
            </li>
            <li>✅ Tabs auto-switch when content is found</li>
            <li>✅ Accordions auto-expand natively</li>
            <li>✅ Perfect SEO - all content in DOM and indexed</li>
          </ul>

          <div className="test-instructions">
            <h3>🧪 Try These Scenarios:</h3>
            <ol>
              <li>
                <strong>Open the modal</strong> (click "View Purchase Info"
                below)
              </li>
              <li>
                <strong>Search for "horsepower"</strong> with <kbd>Ctrl+F</kbd>
              </li>
              <li>
                Watch the magic: Modal closes AND tabs switch to Specifications!
                🎉
              </li>
              <li>
                <strong>Search for "fuel"</strong> - Accordion auto-expands
              </li>
              <li>
                <strong>Search for "warranty"</strong> - Modal auto-opens
              </li>
            </ol>
          </div>

          <div className="key-learning">
            <h3>💡 Key Benefit</h3>
            <p>
              Users can search for ANY content and the UI automatically adapts
              to show them exactly what they're looking for. No manual
              navigation required - the components communicate intelligently.
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section style={{ marginTop: "40px" }}>
          <h2>📑 Vehicle Information Tabs</h2>
          <TabsCorrect enableCrossComponentEvents={true} />
        </section>

        {/* Accordion Section */}
        <section style={{ marginTop: "40px" }}>
          <h2>📋 Frequently Asked Questions</h2>
          <AccordionSemantic enableCrossComponentEvents={true} />
        </section>

        {/* Modal Section */}
        <section style={{ marginTop: "40px" }}>
          <h2>🪟 Purchase Information</h2>
          <p style={{ marginBottom: "15px" }}>
            Click the button below to view financing and warranty details:
          </p>
          <ModalCorrect enableCrossComponentEvents={true} />
        </section>

        <footer className="project-footer" style={{ marginTop: "60px" }}>
          <p>
            Created by Pablo | Challenge: SEO & Browser Search Implementation
          </p>
          <p>
            This demonstrates how <code>hidden="until-found"</code> and
            cross-component communication create intelligent, user-friendly
            applications.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default RealApp;
