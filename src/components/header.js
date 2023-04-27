import React from 'react'
import styles from '../styles/header.module.css'
import allbirds from '../images/allbirds.png';
import { FaRegUser, FaRegQuestionCircle, FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <div>
        <ul className={`${styles.unorderedList} ${styles.Castro}`}>
            <div className={styles.firstPart} >
                <a key="1" href="#" className={styles.liItem} >MEN</a>
                <a key="2" href="#" className={styles.liItem} >WOMEN</a>
                <a key="3" href="#" className={styles.liItem} >KIDS</a>
                <a key="4" href="#" className={styles.liItem} >NEW ARRIVALS</a>
                <a key="5" href="#" className={`${styles.sale} ${styles.liItem}`}>SALE</a>
            </div>
            <div href="#" className={styles.hiddenLiItem}><FaBars /></div>
            <div className={styles.middlepart}>
                <a key="6" href="#"><img src={allbirds} alt="none" /></a>
            </div>
            <div className={styles.lastpart}>
                <a key="7" className={styles.liItem} >SUSTAINABILITY</a>
                <a key="8" className={styles.liItem} >STORE</a>
                <li key="9" className={styles.icon}><FaRegUser /></li>
                <li key="10" className={styles.icon}><FaRegQuestionCircle /></li>
                <li key="11" className={styles.icon}><AiOutlineShoppingCart /></li>
            </div>
        </ul>

    </div>
  )
}

