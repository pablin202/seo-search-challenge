import { useState } from 'react';
import "./App.css";

// Tabs Components
import TabsWrong from "./components/tabs/TabsWrong";
import TabsCorrect from "./components/tabs/TabsCorrect";
import TabsCorrectClip from "./components/tabs/TabsCorrectClip";

// Accordion Components
import AccordionWrong from "./components/accordion/AccordionWrong";
import AccordionCorrect from "./components/accordion/AccordionCorrect";
import AccordionCorrectOffScreen from "./components/accordion/AccordionCorrectOffScreen";

// Modal Components
import ModalWrong from "./components/modal/ModalWrong";
import ModalCorrect from "./components/modal/ModalCorrect";

function App() {
  const [activeComponent, setActiveComponent] = useState('tabs');
  const [activeDemo, setActiveDemo] = useState('wrong');

  const renderComponent = () => {
    const key = `${activeComponent}-${activeDemo}`;

    switch(key) {
      // TABS
      case 'tabs-wrong':
        return <TabsWrong />;
      case 'tabs-correct':
        return <TabsCorrect />;
      case 'tabs-correct-clip':
        return <TabsCorrectClip />;

      // ACCORDIONS
      case 'accordion-wrong':
        return <AccordionWrong />;
      case 'accordion-correct':
        return <AccordionCorrect />;
      case 'accordion-correct-offscreen':
        return <AccordionCorrectOffScreen />;

      // MODALS
      case 'modal-wrong':
        return <ModalWrong />;
      case 'modal-correct':
        return <ModalCorrect />;

      default:
        return <TabsWrong />;
    }
  };

  const getApproachOptions = () => {
    switch(activeComponent) {
      case 'tabs':
        return [
          { value: 'wrong', label: '❌ Wrong (Conditional Rendering)' },
          { value: 'correct', label: '✅ Correct (Off-Screen)' },
          { value: 'correct-clip', label: '✅ Correct (Clip-Path)' }
        ];
      case 'accordion':
        return [
          { value: 'wrong', label: '❌ Wrong (Display None)' },
          { value: 'correct', label: '✅ Correct (hidden="until-found")' },
          { value: 'correct-offscreen', label: '✅ Correct (Off-Screen)' }
        ];
      case 'modal':
        return [
          { value: 'wrong', label: '❌ Wrong (Conditional Rendering)' },
          { value: 'correct', label: '✅ Correct (Inert Attribute)' }
        ];
      default:
        return [];
    }
  };

  const handleComponentChange = (newComponent) => {
    setActiveComponent(newComponent);
    setActiveDemo('wrong'); // Reset to wrong when changing components
  };

  return (
    <div className="app">
      <header>
        <h1>🔍 SEO & Browser Search Challenge</h1>
        <p>Demonstrating Wrong vs Correct Implementations</p>
        <div className="subtitle">
          Performance Improvement Plan (PIP) - Final Project
        </div>
      </header>

      <main>
        <section className="intro">
          <h2>What's This About?</h2>
          <p>This comprehensive demo shows how different implementation approaches affect:</p>
          <ul>
            <li>✅ SEO (Search Engine Optimization)</li>
            <li>✅ Browser Search (Ctrl+F / Cmd+F)</li>
            <li>✅ Accessibility</li>
            <li>✅ User Experience</li>
          </ul>

          <div className="test-instructions">
            <h3>🧪 How to Test:</h3>
            <ol>
              <li>
                Press <kbd>Ctrl+F</kbd> (or <kbd>Cmd+F</kbd> on Mac)
              </li>
              <li>
                Search for keywords like <strong>"horsepower"</strong>,
                <strong>"warranty"</strong>, or <strong>"financing"</strong>
              </li>
              <li>
                Compare the WRONG and CORRECT implementations
              </li>
              <li>Notice: In WRONG versions, browser shows "0 of 0 results" ❌</li>
              <li>
                In CORRECT versions: browser finds the text and highlights it ✅
              </li>
            </ol>
          </div>

          <div className="key-learning">
            <h3>📚 Key Learning</h3>
            <p>
              Content must be in the DOM for search engines and browser search to work.
              Use CSS-based hiding techniques instead of conditional rendering.
            </p>
          </div>
        </section>

        <section className="navigation-section">
          <h2>Interactive Demos</h2>

          {/* Component Type Selector */}
          <div className="component-selector">
            <h3>Select Component Type:</h3>
            <div className="component-buttons">
              <button
                className={`component-btn ${activeComponent === 'tabs' ? 'active' : ''}`}
                onClick={() => handleComponentChange('tabs')}
              >
                📑 Tabs
              </button>
              <button
                className={`component-btn ${activeComponent === 'accordion' ? 'active' : ''}`}
                onClick={() => handleComponentChange('accordion')}
              >
                📋 Accordion
              </button>
              <button
                className={`component-btn ${activeComponent === 'modal' ? 'active' : ''}`}
                onClick={() => handleComponentChange('modal')}
              >
                🪟 Modal
              </button>
            </div>
          </div>

          {/* Approach Selector */}
          <div className="approach-selector">
            <h3>Select Approach:</h3>
            <div className="approach-buttons">
              {getApproachOptions().map((option) => (
                <button
                  key={option.value}
                  className={`approach-btn ${activeDemo === option.value ? 'active' : ''} ${option.value === 'wrong' ? 'wrong' : 'correct'}`}
                  onClick={() => setActiveDemo(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Component Display */}
        <section className="demo-section">
          <div className="demo-container">
            {renderComponent()}
          </div>
        </section>

        {/* Summary Section */}
        <section className="summary">
          <h2>📊 Summary & Comparison</h2>

          <div className="comparison-table">
            <h3>Techniques Overview</h3>
            <table>
              <thead>
                <tr>
                  <th>Technique</th>
                  <th>In DOM?</th>
                  <th>SEO Indexed?</th>
                  <th>Ctrl+F Works?</th>
                  <th>Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="wrong-row">
                  <td><code>Conditional Rendering</code></td>
                  <td>❌ No</td>
                  <td>❌ No</td>
                  <td>❌ No</td>
                  <td>Avoid for SEO content</td>
                </tr>
                <tr className="wrong-row">
                  <td><code>display: none</code></td>
                  <td>✅ Yes</td>
                  <td>⚠️ Partial</td>
                  <td>❌ No</td>
                  <td>Avoid for SEO content</td>
                </tr>
                <tr className="correct-row">
                  <td><code>position: absolute + off-screen</code></td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                  <td>Tabs, Modals (Classic)</td>
                </tr>
                <tr className="correct-row">
                  <td><code>clip-path: inset(50%)</code></td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                  <td>Tabs (Modern)</td>
                </tr>
                <tr className="correct-row">
                  <td><code>hidden="until-found"</code></td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                  <td>✅ Yes + Auto-reveal</td>
                  <td>Accordions (Best!)</td>
                </tr>
                <tr className="correct-row">
                  <td><code>inert attribute</code></td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                  <td>Modals (Modern)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="recommendations">
            <h3>✨ Recommendations</h3>
            <ul>
              <li>
                <strong>For Tabs:</strong> Use position: absolute + off-screen or clip-path technique
              </li>
              <li>
                <strong>For Accordions:</strong> Use <code>hidden="until-found"</code> with <code>beforematch</code> event (best UX!)
              </li>
              <li>
                <strong>For Modals:</strong> Always render in DOM, use <code>inert</code> attribute when closed
              </li>
              <li>
                <strong>General Rule:</strong> If content should be indexed by Google, keep it in the DOM
              </li>
              <li>
                <strong>Accessibility:</strong> Always use proper ARIA attributes (<code>aria-hidden</code>, etc.)
              </li>
            </ul>
          </div>
        </section>

        <footer className="project-footer">
          <p>
            Created by Pablo | Challenge: SEO & Browser Search Implementation
          </p>
          <p>
            Performance Improvement Plan (PIP) - Day 1 Research Applied
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
