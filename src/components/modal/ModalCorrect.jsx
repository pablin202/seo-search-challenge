import { useState, useEffect } from "react";
import "../../styles/modal.css";

function ModalCorrect() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="modal-demo correct">
      <div className="success-badge">✅ CORRECT APPROACH (INERT)</div>

      <h3>Modal - Always in DOM</h3>
      <p className="description">
        Try searching for "warranty" or "financing" - Search works! 🎉
      </p>

      <button className="open-modal-btn correct-btn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {/* ✅ ALWAYS IN DOM - Hidden with CSS and inert when closed */}
      <div
        className={`modal-overlay ${isOpen ? 'visible' : 'hidden'}`}
        onClick={() => setIsOpen(false)}
        inert={isOpen ? undefined : ""}
        aria-hidden={!isOpen}
      >
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

      <div className="solution-explanation">
        <strong>✅ Solutions Applied:</strong>
        <ul>
          <li>Modal ALWAYS rendered in DOM</li>
          <li><code>inert</code> attribute disables interaction when closed</li>
          <li><code>aria-hidden</code> hides from screen readers when closed</li>
          <li>CSS visibility controls visual display</li>
          <li>Ctrl+F CAN find all modal content</li>
          <li>Google CAN index warranty and financing info</li>
          <li>Escape key support for accessibility</li>
        </ul>
      </div>
    </div>
  );
}

export default ModalCorrect;
