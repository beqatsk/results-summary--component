import "./reset.css";
import "./App.css";

function App() {
  return (
    <section>
      <div className="container">
        <div className="blue-container">
          <h1>Your Result</h1>
          <div className="oval">
            <span className="number">76</span>
            <span className="of-100">of 100</span>
          </div>
          <h2 className="great">Great</h2>
          <p className="paragraph">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
