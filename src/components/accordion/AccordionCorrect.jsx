import { useState, useEffect, useRef } from "react";
import "../../styles/accordion.css";

function AccordionCorrect() {
  const [openItems, setOpenItems] = useState(new Set());
  const [browserSupport, setBrowserSupport] = useState(null);
  const contentRefs = useRef([]);

  // Check browser support
  useEffect(() => {
    const testDiv = document.createElement('div');
    testDiv.hidden = 'until-found';
    const isSupported = testDiv.hidden === 'until-found';
    setBrowserSupport(isSupported);
    console.log('Browser supports hidden="until-found":', isSupported);
  }, []);

  const items = [
    {
      title: "What is the fuel economy?",
      content: "The Toyota Camry hybrid achieves an impressive 51 MPG in the city and 53 MPG on the highway, making it one of the most fuel-efficient midsize sedans available."
    },
    {
      title: "What safety features are included?",
      content: "Standard Toyota Safety Sense 3.0 includes Pre-Collision System with Pedestrian Detection, Lane Departure Alert with Steering Assist, Automatic High Beams, and Dynamic Radar Cruise Control."
    },
    {
      title: "What is the horsepower rating?",
      content: "The 2024 Camry hybrid system produces a combined 208 horsepower from its 2.5L 4-cylinder engine and electric motor combination, providing responsive acceleration."
    },
    {
      title: "What warranty coverage is provided?",
      content: "Toyota provides a comprehensive warranty including 3 years/36,000 miles basic coverage, 5 years/60,000 miles powertrain warranty, and 8 years/100,000 miles hybrid component coverage."
    }
  ];

  useEffect(() => {
    // Set up beforematch event listeners for each content section
    const handlers = [];

    // Wait for next tick to ensure refs are assigned
    const timeoutId = setTimeout(() => {
      contentRefs.current.forEach((ref, index) => {
        if (ref) {
          const handleBeforeMatch = (event) => {
            console.log(`beforematch event fired for item ${index}`, event);
            // Automatically open the accordion item when found via Ctrl+F
            setOpenItems(prev => {
              const newSet = new Set(prev);
              newSet.add(index);
              console.log(`Opening accordion item ${index}`, newSet);
              return newSet;
            });
          };

          ref.addEventListener('beforematch', handleBeforeMatch);
          handlers.push({ ref, handler: handleBeforeMatch });
          console.log(`Added beforematch listener to accordion item ${index}`);
        }
      });
    }, 0);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      handlers.forEach(({ ref, handler }) => {
        if (ref) {
          ref.removeEventListener('beforematch', handler);
        }
      });
    };
  }, [items]);

  const toggleItem = (index) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="accordion-container correct">
      <div className="success-badge" style={{ background: '#4caf50' }}>✅ MODERN WITH AUTO-REVEAL</div>

      <h3>Accordion - hidden="until-found" (Modern Browsers)</h3>

      <p className="description" style={{ color: '#2196f3', fontWeight: 'bold', background: '#e3f2fd', padding: '15px', borderRadius: '4px', marginBottom: '10px' }}>
        ℹ️ <strong>Browser Requirements:</strong> Chrome 102+, Edge 102+, Safari 17+, Firefox 139+
        <br />
        ✅ Auto-expand works when implemented correctly with setAttribute
        <br />
        <strong>Try Ctrl+F and search for "fuel" - watch it auto-expand!</strong>
        <br />
        <br />
        💡 <strong>Note:</strong> For older browsers, use "Correct (Off-Screen)" instead
      </p>

      <div className="accordion">
        {items.map((item, index) => {
          const isOpen = openItems.has(index);

          return (
            <div key={index} className="accordion-item">
              <button
                className={`accordion-button ${isOpen ? 'active' : ''}`}
                onClick={() => toggleItem(index)}
              >
                {item.title}
                <span className="accordion-icon">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {/* ✅ HIDDEN="UNTIL-FOUND" - Searchable AND auto-reveals */}
              <div
                ref={el => {
                  contentRefs.current[index] = el;
                  if (el) {
                    if (!isOpen) {
                      el.setAttribute('hidden', 'until-found');
                    } else {
                      el.removeAttribute('hidden');
                    }
                  }
                }}
                className="accordion-content"
              >
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="solution-explanation">
        <strong>✅ How hidden="until-found" works:</strong>
        <ul>
          <li>✅ Ctrl+F CAN find text - works perfectly!</li>
          <li>✅ Content in DOM - Google can index it</li>
          <li>✅ Auto-reveal works with beforematch event</li>
          <li>⚠️ Requires setAttribute (React props don't work)</li>
          <li>⚠️ Only Chrome 102+, Edge 102+, Safari 17+, Firefox 139+</li>
          <li>💡 Check console for "beforematch event fired" logs</li>
          <li>👉 <strong>For older browsers:</strong> Use Off-Screen approach</li>
        </ul>
      </div>
    </div>
  );
}

export default AccordionCorrect;
