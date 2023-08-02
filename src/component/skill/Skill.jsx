import CV from "../../cv/My_Pesional_Resume.pdf";
import "./skill.css";
import SkillCard from "./SkillCard";

const services = [
  {
    id: 1,
    img: "assets/image/heartemoji.png",
    title: "Design ",
    desc: "Html, Css, Javascript, Bootstap, Sass, React",
    details:"I am a skilled and experienced web designer and developer specializing in front-end development. With expertise in HTML, CSS, JavaScript, and React, I create modern and user-friendly websites. My focus is on designing visually appealing interfaces while ensuring a seamless user experience. I excel in responsive design, cross-browser compatibility, and implementing UI/UX best practices. With a problem-solving mindset and a strong attention to detail, I deliver high-quality work on time."
  },
  {
    id: 2,
    img: "assets/image/glasses.png",
    title: "Others Skill",
    desc: "Linux os, Python, Photoshop, Illustrator, Premier Pro, Ms Word, Ms Powerpoint",
    details:"I have basic skills in graphic design, video editing, and presentation creation. I am proficient in using Photoshop, Illustrator, GIMP, Adobe Premiere Pro, After Effects, and PowerPoint.I am familiar with a variety of programming languages, including Python, Java, C#, MS Access, and various AI tools. I prefer working with the Linux operating system. I am confident that I can use my basic skills to contribute to your team. I am a hard worker and I am always willing to learn new things. I am also a team player and I am always willing to help others."
    
  },
  {
    id: 3,
    img: "assets/image/humble.png",
    title: "Wordpress",
    desc: "Portfolio ,E-Commerce, Blog, Business, Eduactional, News Website",
    details:"As a skilled web developer, I specialize in creating modern and responsive websites using WordPress. I have experience in building websites for a variety of industries, including e-commerce, education, business, portfolios, blogs, news, and more. I can utilize popular page builders such as Elementor, WPBakery, Divi, and more to create visually appealing websites. Additionally, I have expertise in designing modern sliders using Slider Revolution. Whether you need a new website or want to revamp an existing one, I can deliver high-quality work that meets your requirements."
  },
];
const Skill = () => {
  return (
    <div className="sirvices section" id="sirvices">
      <div className="s-left">
        <h1>My Professional</h1>
        <h1>
          <span>Skills showcase</span>
        </h1>
        <p>
          I am a web designer and developer with a strong skillset in front-end development. I use HTML, CSS,javascript and React to create modern and user-friendly websites. I am also skilled in WordPress and i can create websites for a variety of industries, including e-commerce, education, business, and portfolios. In addition to web design, I also have experience in graphic design, video editing, and presentation creation. I am proficient in using Photoshop, Illustrator, GIMP, Adobe Premiere Pro, After Effects, and PowerPoint. I am also familiar with a variety of programming languages, including Python, Java, C#, MS Access, and various AI tools.I prefer working with the Linux operating system. <br />
          I am a highly motivated and results-oriented individual with a passion for creating innovative and user-centered experiences. I am confident that I can use my skills and experience to help you achieve your web design and development goals.
        </p>
        <a href={CV} download className="btn">
          Download My Cv
        </a>
        <div
          className="i-blur"
          style={{
            background: "#C1F5FF",
            top: "32rem",
            left: "-5rem",
          }}></div>
      </div>
      <div className="s-right">
        {services.map((service) => {
          const { id, title, desc,details, img } = service;
          return (
            <SkillCard key={id} title={title} desc={desc} details={details} img={img} id={id} />
          );
        })}
        <div className="i-blur"></div>
        <div
          className="i-blur"
          style={{
            top: "8rem",
            left: "30rem",
          }}></div>
      </div>
    </div>
  );
};

export default Skill;
