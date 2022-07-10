import "./About.css";
import PageNum2 from "../../assets/pg-2.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function About() {
  // hero paralax effect
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // hero parralax effect end

  // animation variant start

  const leftContent = {
    offScreen: { x: "-5vw", opacity: 0 },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: { duration: 2, type: "spring", delay: 0.7 },
    },
  };
  const rightContent = {
    offScreen: { x: "5vw", opacity: 0 },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: { duration: 2, type: "spring", delay: 0.7 },
    },
  };
  const topContent = {
    offScreen: { y: "10px", opacity: 0 },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, type: "spring", delay: 0.7 },
    },
  };

  // animation variant end
  return (
    <motion.div
      className='about-container'
      initial={"offScreen"}
      whileInView={"onScreen"}>
     

      <motion.div className='philosophy' variants={leftContent}>
        <motion.h1>Philosophy</motion.h1>
        <motion.p>
          My intention is to build user freindly interfaces that are easy
          to navigate. My goal is simple, create and be creative. It is my
          attention to detail that sets me apart from other developers, and that
          attention to detail comes through in my work.
        </motion.p>
      </motion.div>

      <motion.div className='background' variants={rightContent}>
        <motion.h1>Background</motion.h1>
        <motion.p>
          I am transitioning into a career in front end development after
          spending 10+ years as a graphic designer. I have experience using both
          Adobe Photshop and Adobe Illustrator. This allows me to create custom
          graphics for any website. With an eye for ui/ux design I can develop
          creative front end solutions to fit any project.
        </motion.p>
      </motion.div>
      <motion.div  className='pg-2'>
      <a href='#services'>
          <img
            src={PageNum2}
            alt='pg-1'
            // style={{ transform: `translateY(-${offsetY * 0.35}px)` }}
          />
        </a>
      </motion.div>
    </motion.div>
  );
}
export default About;
