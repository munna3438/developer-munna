import NumberCounter from 'number-counter';
import "./experience.css";
const Experience = () => {
  return (
    <div className="experience section" id="experience">
      <div className="achivment">
        <div className="circle">
          <h1><NumberCounter end={3} className="increment" delay={1}/>+</h1>
        </div>
        <div className="text">
          <span>Years</span>
          <br />
          <span>Experience</span>
        </div>
      </div>
      <div className="achivment">
        <div className="circle">
          <h1><NumberCounter end={20} delay={2}/>+</h1>
        </div>
        <div className="text">
          <span>Completed</span>
          <br />
          <span>Project</span>
        </div>
      </div>
      <div className="achivment">
        <div className="circle">
          <h1><NumberCounter end={10} delay={1}/>+</h1>
        </div>
        <div className="text">
          <span>Completed</span>
          <br />
          <span>Full Web Site</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
