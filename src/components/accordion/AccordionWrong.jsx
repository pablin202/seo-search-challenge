import { useState } from "react";
import "../../styles/accordion.css";

function AccordionWrong() {
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
    <div className="accordion-container wrong">
      <div className="warning-badge">❌ WRONG APPROACH</div>

      <h3>Accordion - Display None Problem</h3>
      <p className="description">
        Try searching for "fuel economy" or "horsepower" with Ctrl+F
      </p>

      <div className="accordion">
        {items.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-button ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleItem(index)}
            >
              {item.title}
              <span className="accordion-icon">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {/* ❌ DISPLAY NONE - Content NOT searchable with Ctrl+F */}
            <div
              className="accordion-content"
              style={{ display: openIndex === index ? 'block' : 'none' }}
            >
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="problem-explanation">
        <strong>⚠️ Problems:</strong>
        <ul>
          <li>Content hidden with <code>display: none</code></li>
          <li>Ctrl+F cannot find text in collapsed accordions</li>
          <li>Google can see content but marks it as hidden</li>
          <li>Poor user experience - users can't find info</li>
        </ul>
      </div>
    </div>
  );
}

export default AccordionWrong;
