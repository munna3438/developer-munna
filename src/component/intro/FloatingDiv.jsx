import "./floatingdiv.css";

const FloatingDiv = ({ image, text }) => {
  return (
    <div className="floating">
      <div className="f-left">
        <img src={image} alt="" />
      </div>
      <div className="f-right">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default FloatingDiv;
