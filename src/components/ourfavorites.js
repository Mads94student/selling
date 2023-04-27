import React from 'react';
import styles from '../styles/ourfavorites.module.css';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

export default function OurFavorites() {
  return (
    <div className={`${styles.container} ${styles.indieFlower}`}>
        <h1 className={styles.Text}>Our Favorites</h1>
        <div className={styles.headers}>
            <div className={styles.header1}>FOR EVERYDAY</div>
            <div className={styles.header1}>FOR RUNNING</div>
            <div className={styles.header1}>FOR TRAVEL</div>
        </div>
            <div className={styles.imgContainer}>
                <div className={styles.imgItems}>
                    <img src={img1} alt="none" />
                    <div>
                        <div className={styles.imgItem1}>Tree Runner</div>
                        <div className={styles.imgItem2}>Light and Breezy Trainer</div>
                    </div>
                </div>
                <div className={styles.imgItems}>
                        <img src={img2} alt="none" />
                    <div>
                        <div className={styles.imgItem1}>Tree Breezerr</div>
                        <div className={styles.imgItem2}>Breezy Flat</div>
                    </div>
                </div>
                <div className={styles.imgItems}>
                <img src={img3} alt="none" />
                    <div>
                        <div className={styles.imgItem1}>Wool Runner</div>
                        <div className={styles.imgItem2}>Cozy Trainer</div>
                    </div>
                </div>
            </div>
    </div>
  )
}
