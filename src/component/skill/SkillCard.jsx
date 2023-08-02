import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./skillCard.css";

const SkillCard = ({ title, desc,details, img, id }) => {
  const transition = { duration: 2, type: "spring" };
  const [openModal,setOpenModal] =useState(false)
  // const [isModalOpen, setIsModalOpen] = useState(false);
  let start;
  let end;
  let tops;
  let tope;
  switch (id) {
    case 1:
      start = "70%";
      end = "60%";

      break;
    case 2:
      start = "-3%";
      end = "8%";
      break;
    case 3:
      tops = "-15%";
      tope = "-33%";
      break;
    default:
      break;
  }
  const handelModalSubmit=()=>{
    setOpenModal(true)
    // setIsModalOpen(!isModalOpen);
  }
  useEffect(() => {
    if (openModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [openModal]);

  return (
    <>
      <motion.div
        initial={{ top: `${tops}`, left: `${start}` }}
        whileInView={{ top: `${tope}`, left: `${end}` }}
        transition={transition}
        className={`serviceCard ServiceCard${id}`}>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
        <span onClick={handelModalSubmit}>LEARN MORE</span>
      </motion.div>
      <AnimatePresence>
        {
          openModal&&(
            <>
            <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1,
              transition:{
                duration:0.5
              }
            }}
            exit={{
              opacity:0,
              transition:{
                delay:0.5
              }
            }}
            onClick={()=>{setOpenModal(false)}}
            className="modal-backdrop" />
            <motion.div
            initial={{
              scale:0,
            }}
            animate={{
              scale:1,
              transition:{
                duration:0.5
              }
            }}
            exit={{
              scale:0,
              transition:{
                delay:0.3
              }
            }}
            className="modal-content-wrapper">
              <motion.div
              initial={{
                x:100,
                opacity:0
              }}
              animate={{
                x:1,
                opacity:1,
                transition:{
                  delay:0.5,
                  duration:0.3
                }
              }}
              exit={{
                x:100,
                opacity:0,
                transition:{
                  duration:0.5
                }
                
              }}
              className="modal-content">
                <h3>{title}</h3>
                <p>{details}</p>
              </motion.div>
            </motion.div>
            </>
          )
        }
      </AnimatePresence>
      
    </>
  );
};

export default SkillCard;
