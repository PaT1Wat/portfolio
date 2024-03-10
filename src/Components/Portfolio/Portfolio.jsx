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
            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/348430109_105475622557763_2162585021861628347_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEF7GHcQksi0_EDZsLAhTHp7HyVQZU_xw3sfJVBlT_HDZvCTKvwUKJkuAtYQ-gIdb-Z2pjAS3xTVSf6DK8jgo5z&_nc_ohc=UecQ6t-DBjIAX8B2z1F&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfCdIfH66_soDW2_BDsPeOD6wkK5u3LlzCxF2WP0cz0IIQ&oe=65F1B81C" alt="Thai Mooc" />
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
