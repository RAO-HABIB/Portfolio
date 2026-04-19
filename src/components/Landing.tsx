import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              HABIB UR
              <br />
              <span>REHMAN RAO</span>
            </h1>
          </div>
          <div className="landing-info">
            <div className="landing-h2-1">Full Stack </div>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Frontend</div>
              <div className="landing-h2-2">Backend</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Backend</div>
              <div className="landing-h2-info-1">Frontend</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;