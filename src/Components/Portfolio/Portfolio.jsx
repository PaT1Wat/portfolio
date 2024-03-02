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
            <img src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/250929173_3179576238942422_6492034145953428513_n.png?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGFgtw_d-1DbT7RSIMEFM2eLHk6YPemSr8seTpg96ZKv9tgAee6oDJXe0NCESNlAqtW7adCUpNHNLa9jSfhSNhs&_nc_ohc=VeZQqooi7EYAX-9GiKr&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfCazCT_bklO5OwTLyMIhyxRLealTPzOEKIy5MahVibc7w&oe=65E66059" alt="" />  
          </Tilt>
            <p>Free Code Camp</p>
        </div>
        
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/348430109_105475622557763_2162585021861628347_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEF7GHcQksi0_EDZsLAhTHp7HyVQZU_xw3sfJVBlT_HDZvCTKvwUKJkuAtYQ-gIdb-Z2pjAS3xTVSf6DK8jgo5z&_nc_ohc=7ZqAUeS1qIcAX-qQHR_&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfCqd7HJLABST8BrChkczxMiUpwJJf-tkxEg9Z_ITtIY7g&oe=65E5DA9C" alt="" />
          </Tilt>  
            <p>Thai Mooc</p>
        </div>
        
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://yt3.googleusercontent.com/exYm9eUqwXUf15Q69vqlqpju_jVkhalW8oouEUXrXVHWUz-9V4_JjgrIkv61olAnyz9os29e=s900-c-k-c0x00ffffff-no-rj" alt="" />
          </Tilt>
            <p>Oracle</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://www.langoly.com/wp-content/uploads/2021/09/coursera-logo.png" alt="" />
          </Tilt>
            <p>Coursera</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/358149121_678562134302307_3179745460758459830_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGcFHGsneiWbuzs-15GZF0joihUHO81AA6iKFQc7zUADgUwIJ8ucZrqIcOA-CBE82mEBe_YUHdTtYtgZfC_dwKK&_nc_ohc=lN2wUmGdhZIAX-QjglB&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfBp_FMAkmu7FEL3XMTBeh5bxB6BiG6MLH1qTsu2jYYqrA&oe=65E78ADF" alt="" />
          </Tilt>    
            <p>Codecademy</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/312978270_777021647086025_8407389807946134683_n.png?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE00jbxUN7KuR53joXmCb5x0m1QcBYswuXSbVBwFizC5d_sLRySInCj_OuXKa3W-h2ywVOH9Kd-ttoSOOJz2JvD&_nc_ohc=7_tvMRnGH7IAX98SSuk&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfA3kfIB5M6hE27IDqXaXrdbjapzoQ4uEIVw_sg5nBMGzQ&oe=65E88B09" alt="" />
          </Tilt>  
            <p>Code Avengers </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio