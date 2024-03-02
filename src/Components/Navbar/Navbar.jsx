import React , { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";


function Navbar() {
  const [isToggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggle);
  }

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#MyPortfolio">My Portfolio</a>
          </div>

          <ul>
            <li><a href="#Skills" >Skills</a></li>
            <li><a href="#Portfolio" >Portfolio</a></li>
            <li><a href="#Contact" >Contact</a></li>
          </ul>

          <div className={styles.button}>
            <a href="#HireMe">Hire Me</a>
          </div>
        </div>

        {/* Mobile Menu */}
        < FaBars className={styles.bars} onClick={handleToggle} />
        {isToggle ? (
          <>
            <ul className={styles.mobile_menu}>
              <li><a href="#Skills">Skills</a></li>
              <li><a href="#Portfolio">Portfolio</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>

            <div className={styles.mobile_button}>
              <a href="#HireMe">Hire Me</a>
            </div>
          </>
        ) : null
        }
      </div>
    </nav>
  );
}

export default Navbar;