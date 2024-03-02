import React from "react";
import styles from "./Hero.module.css";
import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook, IoLogoInstagram  } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hello, Everone</p>
            <h3 className={styles.text_2}>Patiwat Chiangmoon</h3>
            <p className={styles.text_3}>
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "full-stack",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web developer.",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              I am a web developer based in Thailand. I specialize in building
              exceptional digital experiences.    
            </p>
            <ul className={styles.hero_social}>
              <li><a target="_blank" href="https://github.com/PaT1Wat"><IoLogoGithub /></a></li>
              <li><a target="_blank" href="https://www.linkedin.com/in/patiwat-3417bb29a/"><IoLogoLinkedin /></a></li>
              <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100011043182812"><IoLogoFacebook /></a></li>
              <li><a target="_blank" href="https://www.instagram.com/dixdo_03/"><IoLogoInstagram /></a></li>
            </ul>
          </div>

          <div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_image}></div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;