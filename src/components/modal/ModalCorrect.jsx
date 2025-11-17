import { useState, useEffect, useRef } from "react";
import "../../styles/modal.css";

function ModalCorrect({ enableCrossComponentEvents = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalContentRef = useRef(null);
  const isOpenRef = useRef(isOpen);

  // Keep ref in sync with state for event handlers
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Set up beforematch event listener for auto-open
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (modalContentRef.current) {
        const handleBeforeMatch = (event) => {
          // Automatically open the modal when found via Ctrl+F
          setIsOpen(true);

          // Dispatch custom event (only in real app)
          if (enableCrossComponentEvents) {
            window.dispatchEvent(new CustomEvent('content-found', {
              detail: { component: 'modal' }
            }));
          }
        };

        modalContentRef.current.addEventListener('beforematch', handleBeforeMatch);

        return () => {
          if (modalContentRef.current) {
            modalContentRef.current.removeEventListener('beforematch', handleBeforeMatch);
          }
        };
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [enableCrossComponentEvents]);

  // Listen for content-found events from other components (only in real app)
  useEffect(() => {
    if (!enableCrossComponentEvents) return;

    const handleContentFound = (event) => {
      // Close modal if it's open and content was found in another component
      if (isOpenRef.current && event.detail.component !== 'modal') {
        setIsOpen(false);
      }
    };

    window.addEventListener('content-found', handleContentFound);

    return () => {
      window.removeEventListener('content-found', handleContentFound);
    };
  }, [enableCrossComponentEvents]);

  // Click outside modal to close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

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
      <div className="success-badge" style={{ background: '#4caf50' }}>✅ CORRECT WITH AUTO-OPEN</div>

      <h3>Modal - Auto-Open on Search (Modern)</h3>
      <p className="description" style={{ color: '#2196f3', fontWeight: 'bold', background: '#e3f2fd', padding: '15px', borderRadius: '4px', marginBottom: '10px' }}>
        ✅ Try searching for "warranty" or "financing" - modal auto-opens! 🎉
        <br />
        💡 <strong>Modern browsers only:</strong> Chrome 102+, Edge 102+, Safari 17+, Firefox 139+
        <br />
        {enableCrossComponentEvents && (
          <>
            <br />
            🔄 <strong>Real App Mode:</strong> Modal auto-closes when content found in tabs/accordions!
          </>
        )}
      </p>

      <button className="open-modal-btn correct-btn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {/* ✅ ALWAYS IN DOM - Hidden with hidden="until-found" when closed */}
      <div
        ref={el => {
          modalContentRef.current = el;
          if (el) {
            if (!isOpen) {
              el.setAttribute('hidden', 'until-found');
            } else {
              el.removeAttribute('hidden');
            }
          }
        }}
        className={`modal-overlay ${isOpen ? 'visible' : ''}`}
        onClick={handleOverlayClick}
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
        <strong>✅ How hidden="until-found" works with modals:</strong>
        <ul>
          <li>✅ Modal ALWAYS rendered in DOM</li>
          <li>✅ Uses hidden="until-found" attribute (not CSS or inert)</li>
          <li>✅ Ctrl+F CAN find all modal content</li>
          <li>✅ Modal auto-opens when content is found (beforematch event)</li>
          <li>✅ Google CAN index warranty and financing info</li>
          <li>✅ Escape key support for accessibility</li>
          <li>⚠️ Requires setAttribute (React props don't work)</li>
          <li>⚠️ Only Chrome 102+, Edge 102+, Safari 17+, Firefox 139+</li>
          <li>💡 Check console for "beforematch event fired" logs</li>
          <li>👉 <strong>For cross-component communication:</strong> See Real Application Example</li>
        </ul>
      </div>
    </div>
  );
}

export default ModalCorrect;
