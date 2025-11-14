import { useState } from "react";
import "../../styles/tabs.css";

function TabsCorrect() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="tabs-container correct">
      <div className="success-badge">✅ CORRECT APPROACH</div>

      <h3>Tabs - Always Rendered (CSS Hidden)</h3>
      <p className="description">
        Try searching for "horsepower" or "warranty" with Ctrl+F - IT WORKS! 🎉
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
        {/* ✅ ALWAYS RENDERED - Hidden with CSS when inactive */}
        <div
          className={
            activeTab === "features" ? "tab-panel active" : "tab-panel hidden"
          }
          aria-hidden={activeTab !== "features"}
        >
          <h4>Key Features</h4>
          <ul>
            <li>Advanced safety systems</li>
            <li>Hybrid powertrain available</li>
            <li>Premium interior materials</li>
          </ul>
        </div>

        <div
          className={
            activeTab === "specs" ? "tab-panel active" : "tab-panel hidden"
          }
          aria-hidden={activeTab !== "specs"}
        >
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

        <div
          className={
            activeTab === "warranty" ? "tab-panel active" : "tab-panel hidden"
          }
          aria-hidden={activeTab !== "warranty"}
        >
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
      </div>

      <div className="solution-explanation">
        <strong>✅ Solutions Applied:</strong>
        <ul>
          <li>All content ALWAYS rendered in DOM</li>
          <li>CSS hides inactive tabs (position: absolute + off-screen)</li>
          <li>Google CAN index all tab content</li>
          <li>Ctrl+F CAN find text in any tab</li>
          <li>aria-hidden for accessibility</li>
          <li>Better SEO ranking</li>
        </ul>
      </div>
    </div>
  );
}

export default TabsCorrect;
