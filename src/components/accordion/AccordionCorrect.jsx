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

    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        const handleBeforeMatch = () => {
          console.log(`beforematch event fired for item ${index}`);
          // Automatically open the accordion item when found via Ctrl+F
          setOpenItems(prev => {
            const newSet = new Set(prev);
            newSet.add(index);
            return newSet;
          });
        };

        ref.addEventListener('beforematch', handleBeforeMatch);
        handlers.push({ ref, handler: handleBeforeMatch });
      }
    });

    // Cleanup
    return () => {
      handlers.forEach(({ ref, handler }) => {
        ref.removeEventListener('beforematch', handler);
      });
    };
  }, []);

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
      <div className="success-badge" style={{ background: '#ff9800' }}>⚠️ EXPERIMENTAL (RARELY WORKS)</div>

      <h3>Accordion - hidden="until-found" (Experimental)</h3>

      <p className="description" style={{ color: '#ff6b6b', fontWeight: 'bold', background: '#fff5f5', padding: '15px', borderRadius: '4px', marginBottom: '10px' }}>
        ⚠️ <strong>REALITY CHECK:</strong> This feature is extremely experimental
        <br />
        Auto-reveal rarely works even in "supported" browsers
        <br />
        <strong>Ctrl+F WILL find text, but won't auto-expand</strong>
        <br />
        <br />
        👉 <strong>Use "Correct (Off-Screen)" for reliable results!</strong>
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
              {isOpen ? (
                <div
                  ref={el => contentRefs.current[index] = el}
                  className="accordion-content"
                >
                  <p>{item.content}</p>
                </div>
              ) : (
                <div
                  ref={el => contentRefs.current[index] = el}
                  className="accordion-content"
                  hidden="until-found"
                >
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="solution-explanation">
        <strong>⚠️ Reality of hidden="until-found":</strong>
        <ul>
          <li>✅ Ctrl+F CAN find text (works!)</li>
          <li>✅ Content in DOM - Google can index it</li>
          <li>❌ Auto-reveal is extremely buggy/unreliable</li>
          <li>❌ Even "supported" browsers often don't expand</li>
          <li>📚 Great for research/learning</li>
          <li>🚫 <strong>NOT recommended for production</strong></li>
          <li>👉 <strong>Use Off-Screen approach instead</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default AccordionCorrect;
