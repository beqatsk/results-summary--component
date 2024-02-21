import "./reset.css";
import "./App.css";

import logo1 from "./images/iconoir_flash.png";
import logo2 from "./images/Group.png";
import logo3 from "./images/chat.png";
import logo4 from "./images/iconoir_flash.png";

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
        <div className="white-container">
          <h2 className="summery">Summery</h2>
          <div className="wrapper">
            <div className="rectangle">
              <div className="rectangle-react">
                <img src={logo1} aria-hidden alt="image-icone" />
                <p className="react">Reaction</p>
              </div>
              <p className="rectangle-paragraph">
                <span className="para-span">80</span>/100
              </p>
            </div>
            <div className="rectangle-memory">
              <div className="rectangle-react">
                <img src={logo2} aria-hidden alt="image-icone" />
                <p className="react-memory">Memory</p>
              </div>
              <p className="rectangle-paragraph">
                <span className="para-span">92</span>/100
              </p>
            </div>
            <div className="rectangle-verbal">
              <div className="rectangle-react">
                <img src={logo3} aria-hidden alt="image-icone" />
                <p className="react-verbal">Verbal</p>
              </div>
              <p className="rectangle-paragraph">
                <span className="para-span">61</span>/100
              </p>
            </div>
            <div className="rectangle-visual">
              <div className="rectangle-react">
                <img src={logo4} aria-hidden alt="image-icone" />
                <p className="react-visual">Visual</p>
              </div>
              <p className="rectangle-paragraph">
                <span className="para-span">73</span>/100
              </p>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </section>
  );
}

export default App;
