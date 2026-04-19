import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>SPS NUST</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working as a Full Stack Developer at SPS NUST, 
              building and maintaining modern web applications using 
              Next.js, React.js, Node.js, SQL, and ASP.NET. Responsible 
              for developing responsive frontends and robust backend 
              systems to deliver seamless user experiences.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Beyond Technologies</h5>
              </div>
              <h3>3 Months</h3>
            </div>
            <p>
              Completed a 3-month internship at Beyond Technologies as a 
              Frontend Developer. Worked on building responsive and 
              interactive user interfaces using modern frontend technologies 
              including React.js, JavaScript, and Tailwind CSS. Gained 
              hands-on experience in real-world web development projects 
              and collaborated with the development team to deliver 
              high-quality UI solutions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;