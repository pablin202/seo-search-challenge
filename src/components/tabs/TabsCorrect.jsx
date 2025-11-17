import { useState, useEffect, useRef } from "react";
import "../../styles/tabs.css";

function TabsCorrect({ enableCrossComponentEvents = false }) {
  const [activeTab, setActiveTab] = useState("features");
  const tabRefs = useRef({});

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

    // Notify other components when user manually switches tabs (only in real app)
    if (enableCrossComponentEvents) {
      window.dispatchEvent(new CustomEvent('content-found', {
        detail: { component: 'tabs', tab: tabName, manual: true }
      }));
    }
  };

  useEffect(() => {
    // Set up beforematch event listeners for each tab panel
    const handlers = [];

    const timeoutId = setTimeout(() => {
      Object.entries(tabRefs.current).forEach(([tabName, ref]) => {
        if (ref) {
          const handleBeforeMatch = (event) => {
            // Automatically switch to the tab when found via Ctrl+F
            setActiveTab(tabName);

            // Dispatch custom event to notify other components (only in real app)
            if (enableCrossComponentEvents) {
              window.dispatchEvent(new CustomEvent('content-found', {
                detail: { component: 'tabs', tab: tabName }
              }));
            }
          };

          ref.addEventListener('beforematch', handleBeforeMatch);
          handlers.push({ ref, handler: handleBeforeMatch });
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
  }, []);

  return (
    <div className="tabs-container correct">
      <div className="success-badge" style={{ background: '#4caf50' }}>✅ CORRECT WITH AUTO-SWITCH</div>

      <h3>Tabs - Auto-Switch on Search (Modern)</h3>
      <p className="description" style={{ color: '#2196f3', fontWeight: 'bold', background: '#e3f2fd', padding: '15px', borderRadius: '4px', marginBottom: '10px' }}>
        ✅ Try searching for "horsepower" or "warranty" with Ctrl+F - tabs auto-switch! 🎉
        <br />
        💡 <strong>Modern browsers only:</strong> Chrome 102+, Edge 102+, Safari 17+, Firefox 139+
      </p>

      <div className="tabs">
        <button
          className={activeTab === "features" ? "active" : ""}
          onClick={() => handleTabClick("features")}
        >
          Features
        </button>
        <button
          className={activeTab === "specs" ? "active" : ""}
          onClick={() => handleTabClick("specs")}
        >
          Specifications
        </button>
        <button
          className={activeTab === "warranty" ? "active" : ""}
          onClick={() => handleTabClick("warranty")}
        >
          Warranty
        </button>
      </div>

      <div className="tab-content">
        {/* ✅ ALWAYS RENDERED - Hidden with hidden="until-found" */}
        <div
          ref={el => {
            tabRefs.current['features'] = el;
            if (el) {
              if (activeTab !== 'features') {
                el.setAttribute('hidden', 'until-found');
              } else {
                el.removeAttribute('hidden');
              }
            }
          }}
          className={activeTab === "features" ? "tab-panel active" : "tab-panel"}
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
          ref={el => {
            tabRefs.current['specs'] = el;
            if (el) {
              if (activeTab !== 'specs') {
                el.setAttribute('hidden', 'until-found');
              } else {
                el.removeAttribute('hidden');
              }
            }
          }}
          className={activeTab === "specs" ? "tab-panel active" : "tab-panel"}
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
          ref={el => {
            tabRefs.current['warranty'] = el;
            if (el) {
              if (activeTab !== 'warranty') {
                el.setAttribute('hidden', 'until-found');
              } else {
                el.removeAttribute('hidden');
              }
            }
          }}
          className={activeTab === "warranty" ? "tab-panel active" : "tab-panel"}
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
        <strong>✅ How hidden="until-found" works with tabs:</strong>
        <ul>
          <li>✅ All content ALWAYS rendered in DOM</li>
          <li>✅ Uses hidden="until-found" attribute (not CSS off-screen)</li>
          <li>✅ Google CAN index all tab content</li>
          <li>✅ Ctrl+F CAN find text in any tab</li>
          <li>✅ Tabs auto-switch when content is found (beforematch event)</li>
          <li>⚠️ Requires setAttribute (React props don't work)</li>
          <li>⚠️ Only Chrome 102+, Edge 102+, Safari 17+, Firefox 139+</li>
          <li>💡 Check console for "beforematch event fired" logs</li>
          <li>👉 <strong>For older browsers:</strong> Use TabsCorrectClip (off-screen)</li>
        </ul>
      </div>
    </div>
  );
}

export default TabsCorrect;
