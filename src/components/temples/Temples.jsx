import React, { useState } from "react";
import styles_nav from '../navbar/Navbar.module.css';
import styles from './Temples.module.css';
import templesData from '../../data/temples.json'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import watPraTatChoHae from '../../images/temples/choHae.jpg'
import watJomSaWan from '../../images/temples/watjomsawan.webp'
import watPongSuNan from '../../images/temples/watpongsunan.webp'
import watNaKoHa from '../../images/temples/watnakoha.webp'
import watPraTatInKheawn from '../../images/temples/watpratatinkheawn.webp'
import watSriDonKam from '../../images/temples/watsridonkam.jpeg'
import watPhraTatNeung from '../../images/temples/phratatneung.webp'
import watPraTatSuTone from '../../images/temples/watpratatsutone.jpeg'
import watSaLang from '../../images/temples/watsalang.jpeg'

const Temples = () => {
    const [nav, setNav] = useState(false)
    return (
        <div>
            <header className={styles_nav.navbar}>
                <nav>
                    <ul className={nav ? [styles_nav.menu, styles_nav.actve].join(' ') : [styles_nav.menu]}>
                        <li>
                            <a href="/">หน้าแรก</a>
                        </li>
                        <li>
                            <a href="/locations">สถานที่ท่องเที่ยว</a>
                        </li>
                        <li>
                            <a href="/temples">วัด</a>
                        </li>
                        <li>
                            <a href="/famousThings">ของดีเมืองแพร่</a>
                        </li>
                    </ul>
                </nav>
                <div onClick={() => setNav(!nav)} className={styles_nav.mobile_btn}>
                    {/* {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />} */}
                    <a href="/">กลับหน้าแรก</a>
                </div>
            </header>
            <div className={styles.div}>
                <div className={styles.title}>
                    <h1 className={styles.textLeft}>วัด</h1>
                </div>
                <div className={styles.vl}></div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={watPraTatChoHae} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{templesData.find(data => data.id === 1).name}</h1>
                            <p className={styles.description}>
                                {templesData.find(data => data.id === 1).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {templesData.find(data => data.id === 1).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>เบอร์โทร : </b> {templesData.find(data => data.id === 1).tel_number}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {templesData.find(data => data.id === 1).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {templesData.find(data => data.id === 1).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{templesData.find(data => data.id === 2).name}</h1>
                            <p className={styles.description}>
                                {templesData.find(data => data.id === 2).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {templesData.find(data => data.id === 2).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {templesData.find(data => data.id === 2).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {templesData.find(data => data.id === 2).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={watJomSaWan} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={watPongSuNan} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{templesData.find(data => data.id === 3).name}</h1>
                            <p className={styles.description}>
                                {templesData.find(data => data.id === 3).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {templesData.find(data => data.id === 3).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {templesData.find(data => data.id === 3).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {templesData.find(data => data.id === 3).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{templesData.find(data => data.id === 4).name}</h1>
                            <p className={styles.description}>
                                {templesData.find(data => data.id === 4).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {templesData.find(data => data.id === 4).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {templesData.find(data => data.id === 4).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {templesData.find(data => data.id === 4).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={watNaKoHa} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={watPraTatInKheawn} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{templesData.find(data => data.id === 5).name}</h1>
                            <p className={styles.description}>
                                {templesData.find(data => data.id === 5).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {templesData.find(data => data.id === 5).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {templesData.find(data => data.id === 5).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {templesData.find(data => data.id === 5).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{templesData.find(data => data.id === 6).name}</h1>
                            <p className={styles.description}>
                                {templesData.find(data => data.id === 6).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {templesData.find(data => data.id === 6).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {templesData.find(data => data.id === 6).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {templesData.find(data => data.id === 6).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={watSriDonKam} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={watPhraTatNeung} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{templesData.find(data => data.id === 7).name}</h1>
                            <p className={styles.description}>
                                {templesData.find(data => data.id === 7).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {templesData.find(data => data.id === 7).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {templesData.find(data => data.id === 7).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {templesData.find(data => data.id === 7).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{templesData.find(data => data.id === 8).name}</h1>
                            <p className={styles.description}>
                                {templesData.find(data => data.id === 8).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {templesData.find(data => data.id === 8).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {templesData.find(data => data.id === 8).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {templesData.find(data => data.id === 8).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={watPraTatSuTone} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={watSaLang} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{templesData.find(data => data.id === 9).name}</h1>
                            <p className={styles.description}>
                                {templesData.find(data => data.id === 9).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {templesData.find(data => data.id === 9).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {templesData.find(data => data.id === 9).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {templesData.find(data => data.id === 9).ref}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Temples