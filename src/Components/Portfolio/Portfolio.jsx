import React from 'react'
import styles from './Portfolio.module.css';
import Tilt from "react-parallax-tilt";

function Portfolio() {

  return (
    <div className={styles.port_con}>
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
            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/348430109_105475622557763_2162585021861628347_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEF7GHcQksi0_EDZsLAhTHp7HyVQZU_xw3sfJVBlT_HDZvCTKvwUKJkuAtYQ-gIdb-Z2pjAS3xTVSf6DK8jgo5z&_nc_ohc=_c1NYPkFbVEAX_0KyOT&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfCUZbcngRIoKDP4pjDq6Ow6Ey5SCTxBbvv8B1lpvjHPEQ&oe=65EBC95C" alt="Thai Mooc" />
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
            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/358149121_678562134302307_3179745460758459830_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGcFHGsneiWbuzs-15GZF0joihUHO81AA6iKFQc7zUADgUwIJ8ucZrqIcOA-CBE82mEBe_YUHdTtYtgZfC_dwKK&_nc_ohc=lN2wUmGdhZIAX-QjglB&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfBp_FMAkmu7FEL3XMTBeh5bxB6BiG6MLH1qTsu2jYYqrA&oe=65E78ADF" alt="Codecademy" />
          </Tilt>    
            <p>Codecademy</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/312978270_777021647086025_8407389807946134683_n.png?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE00jbxUN7KuR53joXmCb5x0m1QcBYswuXSbVBwFizC5d_sLRySInCj_OuXKa3W-h2ywVOH9Kd-ttoSOOJz2JvD&_nc_ohc=7_tvMRnGH7IAX98SSuk&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfA3kfIB5M6hE27IDqXaXrdbjapzoQ4uEIVw_sg5nBMGzQ&oe=65E88B09" alt="Code Avengers" />
          </Tilt>  
            <p>Code Avengers </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
