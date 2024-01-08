import React, { useState } from "react";
import styles_nav from '../navbar/Navbar.module.css';
import styles from './Locations.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import phraeRoad from '../../images/locations/phraeroad.jpeg'
import locationsData from '../../data/touristAttraction.json'
import paeMuangPee from '../../images/locations/paemuangpee.jpeg'
import thamPhaNangKoy from '../../images/locations/thamphanangkoy.jpeg'
import wiangKoSai from '../../images/locations/wiangkosai.jpeg'
import meaJokHotSpring from '../../images/locations/meajokhotspring.webp'
import kumWiChaiRaCha from '../../images/locations/kumwichairacha.webp'
import kumWongBuRi from '../../images/locations/kumwongburi.webp'
import kumJaoLuang from '../../images/locations/kumjaoluang.webp'
import phaKomol from '../../images/locations/phakomol.webp'

const Locations = () => {
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
                    <h1 className={styles.textLeft}>สถานที่ท่องเที่ยวเมืองแพร่</h1>
                </div>
                <div className={styles.vl}></div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={phraeRoad} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{locationsData.find(data => data.id === 1).name}</h1>
                            <p className={styles.description}>
                                {locationsData.find(data => data.id === 1).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {locationsData.find(data => data.id === 1).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {locationsData.find(data => data.id === 1).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {locationsData.find(data => data.id === 1).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{locationsData.find(data => data.id === 2).name}</h1>
                            <p className={styles.description}>
                                {locationsData.find(data => data.id === 2).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {locationsData.find(data => data.id === 2).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {locationsData.find(data => data.id === 2).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {locationsData.find(data => data.id === 2).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={paeMuangPee} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={thamPhaNangKoy} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{locationsData.find(data => data.id === 3).name}</h1>
                            <p className={styles.description}>
                                {locationsData.find(data => data.id === 3).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {locationsData.find(data => data.id === 3).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {locationsData.find(data => data.id === 3).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {locationsData.find(data => data.id === 3).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{locationsData.find(data => data.id === 4).name}</h1>
                            <p className={styles.description}>
                                {locationsData.find(data => data.id === 4).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {locationsData.find(data => data.id === 4).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {locationsData.find(data => data.id === 4).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {locationsData.find(data => data.id === 4).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={wiangKoSai} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={meaJokHotSpring} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{locationsData.find(data => data.id === 5).name}</h1>
                            <p className={styles.description}>
                                {locationsData.find(data => data.id === 5).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {locationsData.find(data => data.id === 5).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {locationsData.find(data => data.id === 5).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {locationsData.find(data => data.id === 5).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{locationsData.find(data => data.id === 6).name}</h1>
                            <p className={styles.description}>
                                {locationsData.find(data => data.id === 6).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {locationsData.find(data => data.id === 6).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {locationsData.find(data => data.id === 6).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {locationsData.find(data => data.id === 6).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={kumWiChaiRaCha} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={kumWongBuRi} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{locationsData.find(data => data.id === 7).name}</h1>
                            <p className={styles.description}>
                                {locationsData.find(data => data.id === 7).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {locationsData.find(data => data.id === 7).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {locationsData.find(data => data.id === 7).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {locationsData.find(data => data.id === 7).ref}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{locationsData.find(data => data.id === 8).name}</h1>
                            <p className={styles.description}>
                                {locationsData.find(data => data.id === 8).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {locationsData.find(data => data.id === 8).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {locationsData.find(data => data.id === 8).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {locationsData.find(data => data.id === 8).ref}
                            </p>
                        </div>
                    </div>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={kumJaoLuang} alt="/" />
                    </div>
                </div>
                <div className={styles.div_details}>
                    <div className={styles.div_details} >
                        <img className={styles.image} src={phaKomol} alt="/" />
                    </div>
                    <div className={styles.div_details} >
                        <div>
                            <h1 className={styles.subtopic}>{locationsData.find(data => data.id === 9).name}</h1>
                            <p className={styles.description}>
                                {locationsData.find(data => data.id === 9).description}
                            </p>
                            <p className={styles.description}>
                                <b>เวลาทำการ : </b> {locationsData.find(data => data.id === 9).availableTime}
                            </p>
                            <p className={styles.description}>
                                <b>พิกัด : </b> {locationsData.find(data => data.id === 9).address}
                            </p>
                            <p className={styles.description}>
                                <b>ที่มา : </b> {locationsData.find(data => data.id === 9).ref}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations