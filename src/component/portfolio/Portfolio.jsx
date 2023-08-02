import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  ProjectPortfolio,
  webPortfolio, WordpressPortfolio
} from "../../data";
import LIst from "./LIst";
import "./portfolio.css";
const lists = [
  {
    id: 1,
    li: "Featured",
  },
  {
    id: 2,
    li: "Website",
  },
  {
    id: 3,
    li: "Project",
  },
  {
    id: 4,
    li: "Wordpress",
  },
  // {
  //   id: 5,
  //   li: "Web App",
  // },
];
const Portfolio = () => {
  const [selected, setSelected] = useState("Featured");
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case "Featured":
        setData(featuredPortfolio);
        break;
      case "Website":
        setData(webPortfolio);
        break;
      case "Project":
        setData(ProjectPortfolio);
        break;
      case "Wordpress":
        setData(WordpressPortfolio);
        break;
      // case "Web App":
      //   setData(contentPortfolio);
      //   break;

      default:
        break;
    }
  }, [selected]);
  return (
    <div className="section portfolio" id="portfolio">
      <div className="ptop">
        <div className="ptext">
          <h1>Portfolio</h1>
        </div>
        <div className="pmenu">
          <ul>
            {lists.map((list) => (
              <LIst
                li={list.li}
                active={selected === list.li}
                setSelected={setSelected}
              />
            ))}
          </ul>
        </div>
      </div>
      <motion.div layout className="p-container">
        <AnimatePresence>
        {data.map((item) => (
          <a target="_blank" href={item.link} rel="noreferrer">
            <motion.div layout animate={{opacity:1, scale:1}} initial={{opacity:0}} exit={{opacity:0, scale:0}}  className="p-item">
                <img  src={item.img} alt="" className="p-item-img"/>
                <div className="p-item-overlay">
                  <div className="p-item-text">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              
            </motion.div>
          </a>
          
        ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;
