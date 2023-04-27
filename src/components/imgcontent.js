
import React from 'react'
import styles from '../styles/firstcontent.module.css';
import randomguy from '../images/randomguynew.jpg';
import randomguy2 from '../images/forestnew.jpg';



export default function ImgContent() {
  return (
    <div className={`${styles.container} ${styles.Lobster}`}>
        <div className={styles.pad}></div>
          <img  className={`${styles.mainImage} ${styles.mainImage1}`} src={randomguy} alt="random guy" />
          <img className={`${styles.mainImage} ${styles.mainImage2}`}  src={randomguy2} alt="random guy2" />
          <h1 className={styles.text1}>Lighter by Nature.</h1>
        <p className={styles.text2}>Our breathable Tree material is just what the weather ordered.</p>
        <div className={styles.buttonContainer}>
        <button className={styles.button1}>SHOP MEN </button>
        <button className={styles.button2}>SHOP WOMEN</button>
        </div>
    </div>
  )
}

