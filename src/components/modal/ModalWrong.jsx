import { useState } from "react";
import "../../styles/modal.css";

function ModalWrong() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="modal-demo wrong">
      <div className="warning-badge">❌ WRONG APPROACH</div>

      <h3>Modal - Conditional Rendering Problem</h3>
      <p className="description">
        Try searching for "warranty" or "financing" with Ctrl+F before opening the modal
      </p>

      <button className="open-modal-btn wrong-btn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {/* ❌ CONDITIONAL RENDERING - Modal NOT in DOM until opened */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4>Vehicle Purchase Information</h4>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>

            <div className="modal-body">
              <section>
                <h5>Financing Options</h5>
                <p>
                  We offer competitive financing rates starting at 2.9% APR for qualified buyers.
                  Our finance team works with multiple lenders to find the best rate for your situation.
                </p>
              </section>

              <section>
                <h5>Warranty Coverage</h5>
                <p>
                  Every new Toyota comes with comprehensive warranty coverage including:
                </p>
                <ul>
                  <li>3 years / 36,000 miles basic warranty</li>
                  <li>5 years / 60,000 miles powertrain warranty</li>
                  <li>2 years / 25,000 miles maintenance plan</li>
                  <li>8 years / 100,000 miles hybrid battery warranty</li>
                </ul>
              </section>

              <section>
                <h5>Trade-In Value</h5>
                <p>
                  Get instant trade-in valuation for your current vehicle. We accept all makes
                  and models, and our appraisals are competitive with market rates.
                </p>
              </section>
            </div>

            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setIsOpen(false)}>
                Close
              </button>
              <button className="btn-primary">Contact Sales</button>
            </div>
          </div>
        </div>
      )}

      <div className="problem-explanation">
        <strong>⚠️ Problems:</strong>
        <ul>
          <li>Modal content NOT in DOM until user clicks button</li>
          <li>Google cannot index this important information</li>
          <li>Ctrl+F cannot find warranty or financing info</li>
          <li>Users don't know this information exists</li>
          <li>SEO ranking suffers from missing content</li>
        </ul>
      </div>
    </div>
  );
}

export default ModalWrong;
