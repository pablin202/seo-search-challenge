import { useState } from "react";
import "../../styles/tabs.css";

function TabsWrong() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="tabs-container wrong">
      <div className="warning-badge">❌ WRONG APPROACH</div>

      <h3>Tabs - Conditional Rendering Problem</h3>
      <p className="description">
        Try searching for "horsepower" or "warranty" with Ctrl+F
      </p>

      <div className="tabs">
        <button
          className={activeTab === "features" ? "active" : ""}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={activeTab === "specs" ? "active" : ""}
          onClick={() => setActiveTab("specs")}
        >
          Specifications
        </button>
        <button
          className={activeTab === "warranty" ? "active" : ""}
          onClick={() => setActiveTab("warranty")}
        >
          Warranty
        </button>
      </div>

      <div className="tab-content">
        {/* ❌ CONDITIONAL RENDERING - Content NOT in DOM when inactive */}
        {activeTab === "features" && (
          <div>
            <h4>Key Features</h4>
            <ul>
              <li>Advanced safety systems</li>
              <li>Hybrid powertrain available</li>
              <li>Premium interior materials</li>
            </ul>
          </div>
        )}

        {activeTab === "specs" && (
          <div>
            <h4>Technical Specifications</h4>
            <ul>
              <li>
                <strong>Engine:</strong> 2.5L 4-cylinder
              </li>
              <li>
                <strong>Horsepower:</strong> 203 hp
              </li>
              <li>
                <strong>Torque:</strong> 184 lb-ft
              </li>
              <li>
                <strong>Fuel Economy:</strong> 28 city / 39 highway mpg
              </li>
            </ul>
          </div>
        )}

        {activeTab === "warranty" && (
          <div>
            <h4>Warranty Information</h4>
            <ul>
              <li>
                <strong>Basic:</strong> 3 years / 36,000 miles
              </li>
              <li>
                <strong>Powertrain:</strong> 5 years / 60,000 miles
              </li>
              <li>
                <strong>Hybrid Components:</strong> 8 years / 100,000 miles
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="problem-explanation">
        <strong>⚠️ Problems:</strong>
        <ul>
          <li>Content NOT in DOM when tab is inactive</li>
          <li>Google can't index inactive tab content</li>
          <li>Ctrl+F can't find text in inactive tabs</li>
          <li>Poor SEO ranking</li>
        </ul>
      </div>
    </div>
  );
}

export default TabsWrong;
