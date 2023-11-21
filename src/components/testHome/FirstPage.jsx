import React, { useRef, useEffect, useState } from 'react';

import Logo from '../../images/logo.png'
import img_logo from '../../images/carPin.png'
import img_clipart from '../../images/clipart.png'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import styles from '../../components/testHome/navbar/Navbar.module.css'
import img_car from '../../images/car.png'
import img_motorcycle from '../../images/motorcycle.png'
import img_van from '../../images/van.png'

var mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoicGhyYWUtdHJhbnNpdCIsImEiOiJjbG5wcjhnemwwcnNvMnJxaTNvdG1qbnBwIn0.lkJwWKX7nRwo4qqjcWVmmg';

const FirstPage = () => {

    // From mapbox-gl
    const [nav, setNav] = useState(false)


    return (
        <div >
            <div className={styles.navbar}>
                {/* <img className='logo' src={Logo} alt="/" height={100} /> */}
                <h2 className='logo'>PHRAE TRANSIT</h2>
                <nav>
                    <ul className={nav ? [styles.menu, styles.actve].join(' ') : [styles.menu]}>
                        <li>
                            <a href="/">หน้าแรก</a>
                        </li>
                        <li>
                            <a href="/">แนะนำสถานที่ท่องเที่ยว</a>
                        </li>
                        <li>
                            <a href="/">ตารางค่าโดยสาร</a>
                        </li>
                        <li>
                            <a href="/">FAQs</a>
                        </li>
                        {/* <li>
                            <AiOutlineSearch size={25} style={{ marginTop: '6px' }} />
                        </li>
                        <li>
                            <AiOutlineUser size={25} style={{ marginTop: '6px' }} />
                        </li> */}
                    </ul>
                </nav>
                <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </div>
            <div>
                <h1>- PHRAE TRANSIT -</h1>
            </div>
            <div>
                <h3 className='choosetypes'>เลือกประเภทรถ</h3>
                <div className='types'>
                    <div >
                        <img src={img_motorcycle} alt="/" width={300} />
                        <h3 >มอเตอร์ไซค์รับจ้าง</h3>
                    </div>
                    <div>
                        <img src={img_car} alt="/" width={300} />
                        <h3>รถสองแถว</h3>
                    </div>
                    <div>
                        <img src={img_van} alt="/" width={300} />
                        <h3>รถตู้โดยสาร</h3>
                    </div>
                    <div>
                        <img src={img_van} alt="/" width={300} />
                        <h3>ข้อมูลอื่นๆ</h3>
                    </div>
                </div>
            </div>
            <div className='clipart'>
                <img  src={img_clipart} alt="/" marginTop={0}/>
            </div>
        </div>
    )
}




export default FirstPage