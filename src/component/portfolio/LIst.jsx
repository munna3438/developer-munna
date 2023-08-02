import "./list.css";

const LIst = ({ li, active, setSelected }) => {
  return (
    <li className={active ? "active" : ""} onClick={() => setSelected(li)}>
      {li}
    </li>
  );
};

export default LIst;
