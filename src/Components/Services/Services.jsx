import React from 'react'
import styles from './Services.module.css'  
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'


function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Devlopment</h4>
            <p>Your website is the face of your business. Develop a website that is beautiful and easy to use. Increase your chances of reaching customers
              Web applications increase productivity and meet business needs.
              Confident in our work We have experience and past work.
              Contact us today for a free consultation.</p>
        </div>
        <div className={styles.services_items}>
            <FaPaintbrush/>
            <h4>Web Design</h4>
            <p>We have experience designing websites for many types of businesses. Be confident that your website will meet your customers' needs.
              We take care of our customers closely. Providing service with an impressive So that you get the right website.</p>
        </div>
        <div className={styles.services_items}>
            <FaDesktop/>
            <h4>Web Mobile</h4>
            <p>Develop websites and web applications that are easy to use, beautiful, and efficient.
              Deliver the best user experience on every device.
              Service with expertise and experience</p>
        </div>
      </div>
    </div>
  )
}

export default Services