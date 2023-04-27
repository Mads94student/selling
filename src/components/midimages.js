
import React from 'react'
import styles from '../styles/midimages.module.css';
import wheat from '../images/weath.jpeg';
import city from '../images/city2.jpeg';

function MidImages() {
  return (
    <div>
        <div  className={styles.container}>
            <img src={wheat} alt="none" className={styles.item1} />
            <img src={city} alt="none" className= {styles.item2} />
        <div className={`${styles.imgText} ${styles.Lobster}`}>
            Its all around us
        </div>
    </div>
    </div>
  )
}

export default MidImages