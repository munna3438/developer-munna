import { motion } from "framer-motion";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import FloatingDiv from "./FloatingDiv";
import "./intro.css";
const typeConfig = {
  strings: ["Web Developer...", "Web Designer...", "WordPress Expert..."],
  autoStart: true,
  loop: true,
};
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <>
      <div className="intro" id="home">
        <div className="i-left">
          <div className="text-content">
            {/* <h1>Hey! I Am</h1>
            <h1>
              <span>Md Mashudur Rahman Munna</span>
            </h1>
            <h1>
              I'm A <Typewriter options={typeConfig} />
            </h1> */}
            <div className="t-c-title">
              <h1>Hey! I Am</h1>
              <h1><span>Md Mashudur Rahman Munna</span></h1>
              <h1>I'm A <span><Typewriter options={typeConfig} /></span></h1>
            </div>
            <p>
              I am passionate about coding, web design, and development. I enjoy
              learning new skills through various online sources. I am skilled
              in WordPress website design, development, and customization, and
              have expertise in pure programming for web design as well.
              Currently, I am focusing on web development, and I have chosen to
              learn the MERN stack, which includes React and other related
              technologies.
            </p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.fiverr.com/s/oKyDYG"
              className="btn">
              Hire me
            </a>
          </div>
          <div className="i-l-social">
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
        </div>
        <div className="i-right">
          <div className="i-r-image">
            <img className="my-pic" src="assets/image/my-art.png" alt="" />
            <motion.div
              initial={{ right: "-30%" }}
              whileInView={{ right: "0%" }}
              transition={transition}
              className="i-float1">
              <FloatingDiv
                image={"assets/image/web_de_icon.png"}
                text="Web Developer"
              />
            </motion.div>
            <motion.div
              initial={{ left: "-36%" }}
              whileInView={{ left: "-10%" }}
              transition={transition}
              className="i-float2">
              <FloatingDiv
                image={"assets/image/wordpress_org_SVzkLk3.webp"}
                text="Wordpress Expert"
              />
            </motion.div>
            <div className="i-blur"></div>
            <div
              className="i-blur"
              style={{
                background: "#C1F5FF",
                top: "15rem",
                left: "-5rem",
              }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
