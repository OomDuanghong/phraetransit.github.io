import React from "react";
import styles from './Driver.module.css';
import heroCar from '../../../images/hero.jpeg'

const Driver = () => {
    return (
        <div className={styles.driver}>
            <div className={styles.left}>
                <img src={heroCar} alt="/" />
            </div>
            <div>
                <h2>
                    Find your perfect car <span> to try before you buy</span>{' '}
                </h2>
                <p>
                    xxxxx xxxxx xxxxxx xxxxxxxxx xxxx xxxxxxxxxxx xxx xxxxxxxxxx xxxxxxxx xxxxxxxxxx
                </p>
                <button>Browser car</button>
            </div>
        </div>
    )
}

export default Driver