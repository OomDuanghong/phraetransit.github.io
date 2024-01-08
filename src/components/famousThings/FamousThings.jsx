import React, { useState } from "react";
import styles_nav from '../navbar/Navbar.module.css';
import styles from './FamousThings.module.css';
import famousThingsData from '../../data/famousThings.json'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import morHom from '../../images/famousThings/morHom.jpg'
import saiAua from '../../images/famousThings/saiAua.jpg'
import namPrikNum from '../../images/famousThings/namPrikNum.jpeg'
import namYoi from '../../images/famousThings/namYoi.jpeg'
import makamKeaw from '../../images/famousThings/makamKeaw.jpeg'
import krapao from '../../images/famousThings/krapao.jpeg'
import paSin from '../../images/famousThings/paSin.jpeg'
import paDonMue from '../../images/famousThings/paDonMue.jpeg'
import maiSak from '../../images/famousThings/maiSak.jpeg'

const FamousThings = () => {
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
                    <h1 className={styles.textLeft}>ของดีเมืองแพร่</h1>
                </div>
                <div className={styles.vl}></div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={morHom} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{famousThingsData.find(data => data.id === 1).title}</h1>
                            <p className={styles.description}>
                                {famousThingsData.find(data => data.id === 1).description}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {famousThingsData.find(data => data.id === 1).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{famousThingsData.find(data => data.id === 2).title}</h1>
                            <p className={styles.description}>
                                {famousThingsData.find(data => data.id === 2).description}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {famousThingsData.find(data => data.id === 2).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={saiAua} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={namPrikNum} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{famousThingsData.find(data => data.id === 3).title}</h1>
                            <p className={styles.description}>
                                {famousThingsData.find(data => data.id === 3).description}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {famousThingsData.find(data => data.id === 3).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{famousThingsData.find(data => data.id === 4).title}</h1>
                            <p className={styles.description}>
                                {famousThingsData.find(data => data.id === 4).description}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {famousThingsData.find(data => data.id === 4).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={namYoi} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={makamKeaw} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{famousThingsData.find(data => data.id === 5).title}</h1>
                            <p className={styles.description}>
                                {famousThingsData.find(data => data.id === 5).description}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {famousThingsData.find(data => data.id === 5).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{famousThingsData.find(data => data.id === 6).title}</h1>
                            <p className={styles.description}>
                                {famousThingsData.find(data => data.id === 6).description}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {famousThingsData.find(data => data.id === 6).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={krapao} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={paSin} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{famousThingsData.find(data => data.id === 7).title}</h1>
                            <p className={styles.description}>
                                {famousThingsData.find(data => data.id === 7).description}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {famousThingsData.find(data => data.id === 7).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{famousThingsData.find(data => data.id === 8).title}</h1>
                            <p className={styles.description}>
                                {famousThingsData.find(data => data.id === 8).description}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {famousThingsData.find(data => data.id === 8).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={paDonMue} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={maiSak} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{famousThingsData.find(data => data.id === 9).title}</h1>
                            <p className={styles.description}>
                                {famousThingsData.find(data => data.id === 9).description}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {famousThingsData.find(data => data.id === 9).ref}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FamousThings