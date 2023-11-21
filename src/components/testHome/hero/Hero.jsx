import React from "react";
import styles from './Hero.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
    return (
        <div className={styles.hero}> 
            <form>
                <div className={styles.text}>
                    <label>Where</label>
                    <input className={styles.text_input} type="text" placeholder="Search Location" />
                </div>
                <div className={styles.form}>
                    <span className={styles.border}></span>
                    <label >From</label>
                    <input type="date" />
                </div>
                <div className={styles.until}>
                    <label className={styles.border}>Until</label>
                    <input type="date" />
                </div>
                <div className={styles.search_btn}>
                    <AiOutlineSearch className={styles.icon} />
                    <button className={styles.btn}>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Hero