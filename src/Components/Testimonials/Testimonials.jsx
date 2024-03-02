import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            He provides excellent after-sales service. He is always happy to help us whenever we have any questions or problems.
          </p>
          <img
            src="https://meowbarn.com/wp-content/uploads/2022/02/shutterstock_1844994037.jpg"
            alt=""
          />
          <h4>William</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            He works professionally with our team. He can understand our needs. and can develop a website that perfectly meets our needs.
          </p>
          <img
            src="https://s.isanook.com/ca/0/ud/283/1417939/48548.jpg"
            alt=""
          />
          <h4>James</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            He is a reliable and trustworthy Web Developer. I highly recommend him to anyone who needs a website developed.
          </p>
          <img
            src="https://cs.bru.ac.th/wp-content/uploads/2021/08/01.jpg"
            alt=""
          />
          <h4>Joseph</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;