import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

import "./fotter.css";

const Fotter = () => {
  return (
    <div className="fotter" id="fotter">
      <div className="f-image">
        <img src="assets/image/wave.png" alt="" />
      </div>
      <div className="f-content">
        <div className="f-icon">
          <a rel="noreferrer" target="_blank" href="https://github.com/munna3438/">
              <FaGithub className="icon" />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mashudur-rahman-munna-0016a6230">
              <FaLinkedinIn className="icon" />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/MRMMunna3438/">
              <BsFacebook className="icon" />
            </a>
        </div>
        <div className="f-contect-text">
          <div>
            <i><FiPhoneCall/></i>
            <a href="callto:+8801634386892">+8801634386892</a>
          </div>
          <div>
            <i><AiOutlineMail/></i>
            <a href="mailto:mdmashudurrahmanmunna@gmail.com">mdmashudurrahmanmunna@gmail.com</a>
          </div>
        </div>
        <span>&copy; All Right Received by M.R.M (Munna)</span>
      </div>
    </div>
  );
};

export default Fotter;
