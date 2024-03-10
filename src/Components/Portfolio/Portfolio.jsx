import React from 'react'
import styles from './Portfolio.module.css';
import Tilt from "react-parallax-tilt";

function Portfolio() {

  return (
    <div id="Portfolio" className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://dqy38fnwh4fqs.cloudfront.net/company/COMHQ7B9RJKNGNPRAHBEONDNBJE788/logo.webp" alt="Free Code Camp" />  
          </Tilt>
            <p>Free Code Camp</p>
        </div>
        
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAaVBMVEX////2+PpgfaeGmroAO4HO1uPj6O8ARYYmVI4gUYx0j7MxXJM/ZpmcrsgWTYopVo8cT4sLSIizv9KmtcsAP4PX3uh9k7USS4lviK7By9vr7/SKnrw4YZZTc6BKbZ3J0t8AQ4WVpsFkgKlDkpqjAAAA20lEQVR4AX3SRWLDMBAF0DGLqm9qzXj/O5aT2KK3FA6RIYopLEkzCskLxilESKbeQg9ogKvQAyWAqiavmAPQgT+aAkD7Tn4fJXRDIR3vKaAWHDIZyKcvOICydZ8Yp7nEnwqJYx+a4alb7O87XLCVDJtguFnv1Whajju+b5f9YYeFVVP0iC9VDA57RP8WDgc90cNWwaHI6WlmsPDYKIKp2uiihIlJujo0DMZY5B0M3b2ldh6d8cIOQ2FMpuK44Loz25mj0yV79Kk/kohMUd53VQno6szIJ08wH/e7XyQ/GrFubK1RAAAAAElFTkSuQmCC" alt="Thai Mooc" />
          </Tilt>  
            <p>Thai Mooc</p>
        </div>
        
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://yt3.googleusercontent.com/exYm9eUqwXUf15Q69vqlqpju_jVkhalW8oouEUXrXVHWUz-9V4_JjgrIkv61olAnyz9os29e=s900-c-k-c0x00ffffff-no-rj" alt="Oracle" />
          </Tilt>
            <p>Oracle</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://www.langoly.com/wp-content/uploads/2021/09/coursera-logo.png" alt="Coursera" />
          </Tilt>
            <p>Coursera</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://assets.bitdegree.org/online-learning-platforms/storage/media/codecademy-5f60af13ae6d0.o.png" alt="Codecademy" />
          </Tilt>    
            <p>Codecademy</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1114/original/Code_Avengers_logo.png" alt="Code Avengers" />
          </Tilt>  
            <p>Code Avengers </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
