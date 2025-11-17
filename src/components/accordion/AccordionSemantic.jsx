import { useEffect, useRef } from "react";
import "../../styles/accordion.css";

function AccordionSemantic({ enableCrossComponentEvents = false }) {
  const detailsRefs = useRef([]);

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

  // Set up toggle event listeners for cross-component communication
  useEffect(() => {
    if (!enableCrossComponentEvents) return;

    const handlers = [];

    detailsRefs.current.forEach((ref, index) => {
      if (ref) {
        const handleToggle = (event) => {
          // Only emit event when opening (not closing)
          if (ref.open) {
            window.dispatchEvent(new CustomEvent('content-found', {
              detail: { component: 'accordion-semantic', item: index, manual: true }
            }));
          }
        };

        ref.addEventListener('toggle', handleToggle);
        handlers.push({ ref, handler: handleToggle });
      }
    });

    return () => {
      handlers.forEach(({ ref, handler }) => {
        if (ref) {
          ref.removeEventListener('toggle', handler);
        }
      });
    };
  }, [enableCrossComponentEvents]);

  return (
    <div className="accordion-container correct">
      <div className="success-badge" style={{ background: '#2e7d32' }}>🏆 RECOMMENDED - SEMANTIC HTML</div>

      <h3>Accordion - Native &lt;details&gt; Element</h3>

      <p className="description" style={{ color: '#2e7d32', fontWeight: 'bold', background: '#e8f5e9', padding: '15px', borderRadius: '4px', marginBottom: '10px' }}>
        🏆 <strong>BEST APPROACH:</strong> Use semantic HTML when possible!
        <br />
        ✅ No JavaScript needed - works natively
        <br />
        ✅ Browsers handle Ctrl+F automatically (Chrome/Edge auto-expand!)
        <br />
        ✅ SEO-friendly and accessible out of the box
        <br />
        <br />
        💡 <strong>Try Ctrl+F and search for "fuel" - most modern browsers auto-expand!</strong>
      </p>

      <div className="accordion semantic-accordion">
        {items.map((item, index) => (
          <details
            key={index}
            ref={el => detailsRefs.current[index] = el}
            className="accordion-item semantic-details"
          >
            <summary className="accordion-button semantic-summary">
              {item.title}
              <span className="accordion-icon semantic-icon">+</span>
            </summary>
            <div className="accordion-content semantic-content">
              <p>{item.content}</p>
            </div>
          </details>
        ))}
      </div>

      <div className="solution-explanation">
        <strong>🏆 Why &lt;details&gt; is the best choice:</strong>
        <ul>
          <li>✅ Native HTML - no JavaScript required</li>
          <li>✅ Semantic - communicates intent to browsers and assistive tech</li>
          <li>✅ Ctrl+F works perfectly in all modern browsers</li>
          <li>✅ Chrome/Edge auto-expand when content is found (native behavior!)</li>
          <li>✅ Content always in DOM - perfect for SEO</li>
          <li>✅ Accessible by default - screen readers understand it</li>
          <li>✅ Works in ALL browsers (even old ones)</li>
          <li>⚠️ Limited styling control vs custom implementations</li>
          <li>💡 <strong>Use this unless you need heavy customization</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default AccordionSemantic;
