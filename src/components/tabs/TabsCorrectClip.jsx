import { useState } from "react";
import "../../styles/tabs.css";

function TabsCorrectClip() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="tabs-container correct">
      <div className="success-badge">✅ CORRECT APPROACH (CLIP-PATH)</div>

      <h3>Tabs - Modern Clipping Technique</h3>
      <p className="description">
        Uses clip-path for modern browsers - Search works! 🎉
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
        {/* ✅ ALWAYS RENDERED - Hidden with CSS clip-path when inactive */}
        <div
          className={
            activeTab === "features" ? "tab-panel active" : "tab-panel clip-hidden"
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
            activeTab === "specs" ? "tab-panel active" : "tab-panel clip-hidden"
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
            activeTab === "warranty" ? "tab-panel active" : "tab-panel clip-hidden"
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
        <strong>✅ Clip-Path Technique:</strong>
        <ul>
          <li>All content ALWAYS rendered in DOM</li>
          <li>CSS uses clip-path: inset(50%) to hide content</li>
          <li>Modern approach, better performance</li>
          <li>Ctrl+F CAN find text in any tab</li>
          <li>Google CAN index all content</li>
          <li>aria-hidden for screen readers</li>
        </ul>
      </div>
    </div>
  );
}

export default TabsCorrectClip;
