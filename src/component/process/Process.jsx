
import { motion } from "framer-motion";
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { IoAnalyticsOutline, IoCodeSlash } from "react-icons/io5";
import { VscFeedback } from 'react-icons/vsc';

import "./process.css";


const Process = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="section work" id="work">
      <div className="work-content"></div>
      <div className="s-left">
        <div className="s-left-title">
          <h1>My Efficient  </h1>
          <h1>
            <span>Process</span>
          </h1>
        </div>
        <div className="s-left-content">
          <div className="process">
            <div className="process-row">
              <motion.div 
              initial={{left:"-20%"}}
              whileInView={{left:"0"}}
              class="process-item">
                <div class="p-item-icon">
                  <i><IoAnalyticsOutline/></i>
                </div>
                  <h3>1.Planing & Analysis</h3>
                  <p >First, I discuss with our clients to fully understand their project requirements, objectives, and scope. Through meticulous data analysis, we carefully plan every aspect of the project, ensuring a solid foundation for success. </p>
              </motion.div>
              <motion.div 
              initial={{right:"-20%"}}
              whileInView={{right:"0%"}}
              class="process-item p-u-item">
                <div class="p-item-icon">
                  <i><IoCodeSlash/></i>
                </div>
                  <h3>2.Design & Coding</h3>
                  <p>then i transform the project into a tangible design based on client specifications. Create an appealing layout and implement it through coding techniques.</p>
              </motion.div>
              
            </div>
            <div className="process-row">
              <motion.div 
              initial={{bottom:"-20%"}}
              whileInView={{bottom:"0%"}}
              class="process-item">
                <div class="p-item-icon">
                  <i><VscFeedback/></i>
                </div>
                  <h3 >3.Submit For Revew</h3>
                  <p >I submit the completed project to the client for their review.I gather feedback and address concerns, ensuring alignment with expectations and identifying additional requirements.</p>
              </motion.div>
              <motion.div 
              initial={{bottom:"-20%"}}
              whileInView={{bottom:"0%",transition:{delay:.2}}}
              
              class="process-item p-u-item2">
                <div class="p-item-icon">
                  <i><AiOutlineDeliveredProcedure/></i>
                </div>
                  <h3 >4.Delevary & Maintenance</h3>
                  <p class="text-muted">I thoroughly evaluate the project to ensure that it is free of any issues or glitches. I ensure that my projects are of the highest quality and meet the client's expectations.</p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: "90deg" }}
          whileInView={{ rotate: "0deg" }}
          transition={transition}
          className="w-mainCircle">
          <div className="w-secCircle w-s-m-item">
            process
          </div>
          <div className="w-secCircle w-s-item">
            <i >< VscFeedback/></i>
          </div>
          <div className="w-secCircle w-s-item">
            <i><AiOutlineDeliveredProcedure/></i>
          </div>
          <div className="w-secCircle w-s-item">
            <i><IoAnalyticsOutline/></i>
          </div>
          <div className="w-secCircle w-s-item">
            <i>< IoCodeSlash/></i>
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Process;

