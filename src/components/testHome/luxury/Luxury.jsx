import React, { useState } from "react";
import styles from './Luxury.module.css';
import mingyu_1 from '../../../images/mingyu-1.jpg'
import mingyu_2 from '../../../images/mingyu-2.jpg'
import mingyu_3 from '../../../images/mingyu-3.jpg'

const Luxury = () => {
    return (
        <div className={styles.luxury}>
            <div className={styles.heading}>
                <h2>Luxury Selection</h2>
                <div className={styles.text_bg}>
                    <p>
                        <span>Select from top luxury vehicles to roll in style</span>
                    </p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={mingyu_1} alt="/" />
                    <div className={styles.content}>
                        <h3>Min 1</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={mingyu_2} alt="/" />
                    <div className={styles.content}>
                        <h3>Min 2</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={mingyu_3} alt="/" />
                    <div className={styles.content}>
                        <h3>Min 3</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={mingyu_1} alt="/" />
                    <div className={styles.content}>
                        <h3>Min 4</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Luxury