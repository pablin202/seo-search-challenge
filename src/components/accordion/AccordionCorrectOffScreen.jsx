import { useState } from "react";
import "../../styles/accordion.css";

function AccordionCorrectOffScreen() {
  const [openIndex, setOpenIndex] = useState(null);

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

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container correct">
      <div className="success-badge">✅ CORRECT APPROACH (OFF-SCREEN)</div>

      <h3>Accordion - Classic Position Technique</h3>
      <p className="description">
        Try searching for "fuel economy" or "horsepower" - It works! 🎉
      </p>

      <div className="accordion">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

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

              {/* ✅ POSITION ABSOLUTE - Always rendered, hidden off-screen */}
              <div
                className={`accordion-content ${isOpen ? 'visible' : 'off-screen'}`}
                aria-hidden={!isOpen}
              >
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="solution-explanation">
        <strong>✅ Solutions Applied:</strong>
        <ul>
          <li>All content always rendered in DOM</li>
          <li>CSS uses <code>position: absolute</code> + off-screen positioning</li>
          <li>Ctrl+F CAN find text in collapsed items</li>
          <li>Google CAN index all content</li>
          <li>Compatible with all browsers</li>
          <li><code>aria-hidden</code> for accessibility</li>
        </ul>
      </div>
    </div>
  );
}

export default AccordionCorrectOffScreen;
