import React, { useRef, useEffect, useState } from 'react';
import styles from '../Home/PhraeTransit.module.css'
import routes_data from '../../data/boardingPoint.json'

import iphone from '../../images/iphone.png'
import motorcycle from '../../images/pics-motorcycle.png'
import tricycle from '../../images/pics-tricycle.png'
import trucktaxi from '../../images/pics-trucktaxi.png'
import pic_div1 from '../../images/1st-div-pic1.png'
import pic_div2 from '../../images/1st-div-pic2.png'
import pic_div3 from '../../images/1st-div-pic3.png'
import icon_div1 from '../../images/1st-div-icon1.png'
import icon_div2 from '../../images/1st-div-icon2.png'

var mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoicGhyYWUtdHJhbnNpdCIsImEiOiJjbG5wcjhnemwwcnNvMnJxaTNvdG1qbnBwIn0.lkJwWKX7nRwo4qqjcWVmmg';
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const PhraeTransitxx = () => {
    const [isHovered1_2, setIsHovered1_2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    // const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHoveredVehicle, setIsHoveredVehicle] = useState(false);
    const [isHoveredTouristAttraction, setIsHoveredTouristAttraction] = useState(false);
    const [isHoveredRecLocation, setIsHoveredRecLocation] = useState(false);
    const handleMouseEnter1 = () => {
        setIsHovered1_2(true);
    };
    const handleMouseLeave1 = () => {
        setIsHovered1_2(false);
    };
    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };
    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };
    // const handleMouseEnter4 = () => {
    //     setIsHovered4(true);
    // };
    // const handleMouseLeave4 = () => {
    //     setIsHovered4(false);
    // };
    const handleMouseEnter5 = () => {
        setIsHovered5(true);
    };
    const handleMouseLeave5 = () => {
        setIsHovered5(false);
    };
    const handleMouseEnterVehicle = () => {
        setIsHoveredVehicle(true);
    };
    const handleMouseLeaveVehicle = () => {
        setIsHoveredVehicle(false);
    };
    const handleMouseEnterTouristAttraction = () => {
        setIsHoveredTouristAttraction(true);
    };
    const handleMouseLeaveTouristAttraction = () => {
        setIsHoveredTouristAttraction(false);
    };
    const handleMouseEnterRecLocation = () => {
        setIsHoveredRecLocation(true);
    };
    const handleMouseLeaveRecLocation = () => {
        setIsHoveredRecLocation(false);
    };

    const ref1_2 = useRef(null);
    const ref3 = useRef(null);
    // const ref4 = useRef(null);
    // const ref5 = useRef(null);
    const refVehicle = useRef(null);

    const handleClickOn1_2 = () => {
        ref1_2.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleClickOn3 = () => {
        ref3.current?.scrollIntoView({ behavior: 'smooth' });
    };
    // const handleClickOn4 = () => {
    //     ref4.current?.scrollIntoView({ behavior: 'smooth' });
    // };
    // const handleClickOn5 = () => {
    //     ref5.current?.scrollIntoView({ behavior: 'smooth' });
    // };
    const handleClickOnVehicle = () => {
        refVehicle.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const motorcycles = routes_data.motorcycles.data
    const tricycles = routes_data.tricycles.data

    const mapContainer = useRef(null);
    const map = useRef(null);
    let [lng, setLng] = useState(100.1425559);
    let [lat, setLat] = useState(18.1417761);
    const [zoom, setZoom] = useState(11);

    const twoCalls = e => {
        handleChange(e)
        handleChangeRoute(e)
    }

    // get type
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const getInitialState = () => {
        const value = "";
        const key = "default"
        return value, key;
    };
    const [value, setValue] = useState(getInitialState);

    // get key routes
    const types = ['tram', 'trucktaxi1', 'trucktaxi4']
    const handleChangeRoute = (e) => {
        if (types.includes(e.target.value)) {
            setRoute('default');
        } else {
            setRoute(e.target.value);
        }
    };
    const getInitialStateRoute = () => {
        const key = "";
        return key;
    };
    const [key, setRoute] = useState(getInitialStateRoute);


    let route_lists = []
    let isHaveRobWiang = false
    let note = "*Click ที่หมุดของสถานที่บนเส้นทางเดินรถเพื่อดูข้อมูลเพิ่มเติม"
    // let description = ""
    let geojsonData = []
    // let robWiang = routes_data.truckTaxi.robWiang.route
    let title_route = ""
    // let description_route = ""
    let time_service = []

    if (value === 'tram') {
        route_lists = routes_data.tram
        isHaveRobWiang = false
    } else if (value === 'trucktaxi1') {
        route_lists = routes_data.truckTaxi.sai1
        isHaveRobWiang = true
    } else if (value === 'trucktaxi4') {
        route_lists = routes_data.truckTaxi.sai4
        isHaveRobWiang = false
    } else {
        route_lists = routes_data.default
    }

    if (key && key !== 'default' && value === 'tram') {
        title_route = `เส้นทางเดินรถ ${route_lists.find(data => data.id === key).name}`;
        // description_route = route_lists.find(data => data.id === key).description;
        time_service = route_lists.find(data => data.id === key).time;
    } else if (key && key !== 'default' && value === 'trucktaxi1') {
        title_route = `เส้นทางเดินรถหมวดที่ 1 ${route_lists.find(data => data.id === key).name}`;
        // description_route = route_lists.find(data => data.id === key).description;
        time_service = route_lists.find(data => data.id === key).time;
    } else if (key && key !== 'default' && value === 'trucktaxi4') {
        title_route = `เส้นทางเดินรถหมวดที่ 4 ${route_lists.find(data => data.id === key).name}`;
        // description_route = route_lists.find(data => data.id === key).description;
        time_service = route_lists.find(data => data.id === key).time;
    }

    geojsonData = route_lists.find(data => data.id === key);

    useEffect(() => {
        // if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            pan: {
                animate: true,
                duration: 2
            }
        });
        map.current.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }));

        if (key && key !== 'default' && value === 'tram') {
            let count = 1
            for (const feature of geojsonData.features) {
                // make a marker for each feature and add to the map
                const el = document.createElement('div');
                el.className = styles[`trammarker${count}`]
                // create the popup
                const popup = new mapboxgl.Popup({ offset: 25 }).setText(feature.name);
                new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(popup).addTo(map.current);
                count++
            }

            map.current.on('load', () => {
                map.current.addSource('route', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {
                        },
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': geojsonData.routes
                        }
                    }
                });
                map.current.addLayer({
                    'id': 'route',
                    'type': 'line',
                    'source': 'route',
                    'layout': {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    'paint': {
                        'line-color': '#007ae0',
                        'line-width': 8
                    }
                })

                // Add a data source containing one point feature.
                map.current.addSource('point', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {
                        },
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': geojsonData.routes
                        }
                    }
                });
                map.current.setZoom(14)
            });
        }
        else if (key && key !== 'default' && isHaveRobWiang === true) {
            // geojsonData = route_lists.find(data => data.id === key);
            for (const feature of geojsonData.features) {
                // make a marker for each feature and add to the map
                const el = {
                    color: "#000000",
                    draggable: false
                }
                // create the popup
                const popup = new mapboxgl.Popup({ offset: 25 }).setText(`${feature.name}\n${feature.properties.description}`);
                new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(popup).addTo(map.current);

            }
            map.current.on('load', () => {
                map.current.addSource('route', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {
                        },
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': geojsonData.routes
                        }
                    }
                });
                map.current.addLayer({
                    'id': 'route',
                    'type': 'line',
                    'source': 'route',
                    'layout': {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    'paint': {
                        'line-color': '#007ae0',
                        'line-width': 8
                    }
                })
                if (isHaveRobWiang === true) {
                    // Add a data source containing GeoJSON data.
                    map.current.addSource('maine', {
                        'type': 'geojson',
                        'data': {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Polygon',
                                // These coordinates outline Maine.
                                'coordinates': routes_data.truckTaxi.robWiang.route
                            }
                        }
                    });

                    // Add a new layer to visualize the polygon.
                    map.current.addLayer({
                        'id': 'maine',
                        'type': 'fill',
                        'source': 'maine', // reference the data source
                        'layout': {},
                        'paint': {
                            'fill-color': '#0080ff', // blue color fill
                            'fill-opacity': 0.5
                        }
                    });
                    // Add a black outline around the polygon.
                    map.current.addLayer({
                        'id': 'outline',
                        'type': 'line',
                        'source': 'maine',
                        'layout': {},
                        'paint': {
                            'line-color': '#0080ff',
                            'line-width': 3
                        }
                    });
                }
                map.current.setZoom(10)
            });
        } else if (key && key !== 'default' && isHaveRobWiang === false) {
            // geojsonData = route_lists.find(data => data.id === key);
            for (const feature of geojsonData.features) {
                // make a marker for each feature and add to the map
                const el = {
                    color: "#000000",
                    draggable: false
                }
                // create the popup
                const popup = new mapboxgl.Popup({ offset: 25 }).setText(feature.properties.description);
                new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(popup).addTo(map.current);

            }
            map.current.on('load', () => {
                map.current.addSource('route', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {
                        },
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': geojsonData.routes
                        }
                    }
                });
                map.current.addLayer({
                    'id': 'route',
                    'type': 'line',
                    'source': 'route',
                    'layout': {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    'paint': {
                        'line-color': '#007ae0',
                        'line-width': 8
                    }
                })
                map.current.setZoom(10)
            });
        } else {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [lng, lat],
                zoom: zoom,
                pan: {
                    animate: true,
                    duration: 2
                }
            });

            map.current.addControl(new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true,
                showUserHeading: true
            }));
        }
    });

    return (
        <div className={styles.all} name="viewport" content="width=device-width, initial-scale=1.0">
            <div className={styles.div_firstpage} >
                <h1 className={styles.header_welcome}>W E L C O M E</h1>
                <div className={styles.div_toPhrae}>
                    <h1 className={styles.header_to}>to</h1>
                    <h1 className={styles.header_phrae}> PHRAE</h1>
                </div>
                {/* <div>
                    <img className={styles.imgRoot} />
                </div>
                <div >
                    <div className={styles.clipart}></div>
                </div> */}
                <div>
                    <div className={styles.div_choices_firstpage_odd}
                        onMouseEnter={handleMouseEnterVehicle}
                        onMouseLeave={handleMouseLeaveVehicle}
                        onClick={handleClickOnVehicle}
                    >
                        {isHoveredVehicle ?
                            <div className={styles.div_choices_firstpage_hover}>
                                <div className={styles.choice_firstpage_Text}>
                                    <h1 className={styles.text_choice}>การเดินทาง</h1>
                                    <img className={styles.div_choices_icon} src={icon_div1} alt="/" />
                                    <h1 className={styles.text_order}>1</h1>
                                </div>
                                <div className={styles.choice_firstpage_img_div}>
                                    <img className={styles.choice_firstpage_img} src={pic_div1} alt="/" />
                                </div>
                            </div> :
                            <div className={styles.div_choices_firstpage_odd}>
                                <div className={styles.choice_firstpage_Text} >
                                    <h1 className={styles.text_choice}>การเดินทาง</h1>
                                    <img className={styles.div_choices_icon} src={icon_div1} alt="/" />
                                    <h1 className={styles.text_order}>1</h1>
                                </div>
                                <div className={styles.choice_firstpage_img_div}>
                                    <img className={styles.choice_firstpage_img} src={pic_div1} alt="/" />
                                </div>
                            </div>
                        }
                    </div>
                    <div className={styles.div_choices_firstpage_even}
                        onMouseEnter={handleMouseEnterTouristAttraction}
                        onMouseLeave={handleMouseLeaveTouristAttraction}
                    // onClick={handleClickOnVehicle}
                    >
                        {isHoveredTouristAttraction ?
                            <div className={styles.div_choices_firstpage_hover}>
                                <div className={styles.choice_firstpage_img_div}>
                                    <img className={styles.choice_firstpage_img} src={pic_div2} alt="/" />
                                </div>
                                <div className={styles.choice_firstpage_Text} >
                                    <h1 className={styles.text_order}>2</h1>
                                    <h1 className={styles.text_choice}>สถานที่ท่องเที่ยว</h1>
                                </div>
                            </div> :
                            <div className={styles.div_choices_firstpage_even}>
                                <div className={styles.choice_firstpage_img_div}>
                                    <img className={styles.choice_firstpage_img} src={pic_div2} alt="/" />
                                </div>
                                <div className={styles.choice_firstpage_Text} >
                                    <h1 className={styles.text_order}>2</h1>
                                    <h1 className={styles.text_choice}>สถานที่ท่องเที่ยว</h1>      
                                </div>
                            </div>
                        }

                    </div>
                    <div
                        className={styles.div_choices_firstpage_odd}
                        onMouseEnter={handleMouseEnterRecLocation}
                        onMouseLeave={handleMouseLeaveRecLocation}
                    // onClick={handleClickOnVehicle}
                    >
                        {isHoveredRecLocation ?
                            <div className={styles.div_choices_firstpage_hover}>
                                <div className={styles.choice_firstpage_Text}>
                                    <h1 className={styles.text_choice}>ของดีเมืองแพร่</h1>
                                    <img className={styles.div_choices_icon} src={icon_div2} alt="/" />
                                    <h1 className={styles.text_order}>3</h1>
                                </div>
                                <div className={styles.choice_firstpage_img_div}>
                                    <img className={styles.choice_firstpage_img} src={pic_div3} alt="/" />
                                </div>
                            </div> :
                            <div className={styles.div_choices_firstpage_odd}>
                                <div className={styles.choice_firstpage_Text}>
                                    <h1 className={styles.text_choice}>ของดีเมืองแพร่</h1>
                                    <img className={styles.div_choices_icon} src={icon_div2} alt="/" />
                                    <h1 className={styles.text_order}>3</h1>
                                </div>
                                <div className={styles.choice_firstpage_img_div}>
                                    <img className={styles.choice_firstpage_img} src={pic_div3} alt="/" />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div ref={refVehicle} id='selectType'>
                <div>
                    <div>
                        <h1 className={styles.headerPhrae}>PHRAE TRANSIT</h1>
                        <h1 className={styles.headerSelectTypeTitle}>เลือกประเภทรถ</h1>
                    </div>
                </div>
                <div className={styles.selectType}>
                    <div>
                        <img className={styles.iphone} src={iphone} alt="" />
                    </div>
                    <div>
                        <ul>
                            <div className={styles.type1_2}
                                onMouseEnter={handleMouseEnter1}
                                onMouseLeave={handleMouseLeave1}
                            >
                                {isHovered1_2 ?
                                    <div onClick={handleClickOn1_2} className={styles.typeHover2}>
                                        <h4 className={styles.thai_font}>มอเตอร์ไซค์รับจ้าง</h4>
                                        <h4 className={styles.thai_font}>รถสามล้อปั่น</h4>
                                    </div> :
                                    <div className={styles.type1_2}></div>
                                }

                            </div>
                            <div className={styles.type3}
                                onMouseEnter={handleMouseEnter3}
                                onMouseLeave={handleMouseLeave3}
                            >
                                {isHovered3 ?
                                    <div onClick={handleClickOn3} className={styles.typeHover}>
                                        <h4 className={styles.thai_font}>รถสองแถว</h4>
                                    </div> :
                                    <div className={styles.type3}></div>
                                }

                            </div>
                            {/* <div className={styles.type4}
                                onMouseEnter={handleMouseEnter4}
                                onMouseLeave={handleMouseLeave4}
                            >
                                {isHovered4 ?
                                    <div onClick={handleClickOn4} className={styles.typeHover}>
                                        <h4>รถตู้โดยสาร</h4>
                                    </div> :
                                    <div className={styles.type4}></div>
                                }

                            </div> */}
                            <div className={styles.type5}
                                onMouseEnter={handleMouseEnter5}
                                onMouseLeave={handleMouseLeave5}
                            >
                                {isHovered5 ?
                                    <div onClick={handleClickOn3} className={styles.typeHover}>
                                        <h4 className={styles.thai_font}>รถรางนำเที่ยว</h4>
                                    </div> :
                                    <div className={styles.type5}></div>
                                }

                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div ref={ref1_2} className={styles.darkBg} id='motorcycle'>
                <div className={styles.motorcycle_header}>
                    <img className={styles.pics} src={motorcycle} alt="" />
                    <div className={styles.vl}></div>
                    <h1 className={styles.thai_font}>มอเตอร์ไซค์รับจ้าง</h1>
                </div>
                <div>
                    <p className={styles.header_data}>จุดให้บริการ</p>
                    <div className={styles.body_data}>
                        {motorcycles.map((_motorcycle) => (
                            <div>
                                <p className={styles.title_data}>{_motorcycle.typeName}</p>
                                <ol>
                                    {(_motorcycle.lists).map((list) => (
                                        <li className={styles.lists} key={list}>{list.name} : {list.tel_number}</li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            <div className={styles.lightBg} id='tricycle'>
                <div className={styles.tricycle_header}>
                    <img className={styles.pics} src={tricycle} alt="" />
                    <div className={styles.vl}></div>
                    <h1 className={styles.thai_font}>รถสามล้อปั่น</h1>
                </div>
                <div>
                    <p className={styles.header_data}>จุดให้บริการ</p>
                    <div className={styles.body_data}>
                        {tricycles.map((_tricycle) => (
                            <div>
                                <p className={styles.title_data}>{_tricycle.typeName}</p>
                                <ol>
                                    {(_tricycle.lists).map((list) => (
                                        <li className={styles.lists} key={list}>{list.name} : {list.tel_number}</li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            <div ref={ref3} className={`${styles.darkBg}`} id='trucktaxi-and-tram'>
                <div className={styles.trucktaxi_header}>
                    <h1 className={styles.thai_font}>เส้นทางการเดินรถ</h1>
                    {/* <h1>สองแถว</h1> */}
                    <img className={styles.pics_trucktaxi} src={trucktaxi} alt="" />
                </div>
                <div className={styles.selectonmap_div}>
                    <div className={styles.select_div}>
                        <div className={styles.selection}>
                            <label className={styles.select_label}>เลือกเส้นทางเดินรถ:</label>
                            <select className={styles.selection} value={value} onChange={twoCalls}>
                                <option value="default">-- เลือกเส้นทางเดินรถที่ต้องการ --</option>
                                <option value="tram">รถรางนำเที่ยว</option>
                                <option value="trucktaxi1">เส้นทางหมวดที่ 1 เทศบาลเมืองแพร่</option>
                                <option value="trucktaxi4">เส้นทางหมวดที่ 4 นอกเทศบาลเมืองแพร่</option>
                            </select>
                        </div>
                        <div className={styles.selection}>
                            <label className={styles.select_label}>เลือกสายรถ:</label>
                            <select className={styles.selection} value={key} onChange={handleChangeRoute}>
                                <option className={styles.thai_font} value="default">เลือกสายของรถสองแถวที่ต้องการ</option>
                                {route_lists.map((list) => (
                                    <option className={styles.lists} value={list.id}> {list.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* <h6 className={`${styles.note}`}>{note}</h6> */}
                </div>
                <div className={styles.trucktaxi_map}>
                    <div ref={mapContainer} className={styles.mapcontainer} />
                </div>
                <div className={styles.trucktaxi_map}>
                    <div ref={mapContainer} className={styles.mapcontainer} />
                </div>
                <h6 className={`${styles.note}`}>{note}</h6>
                <div className={styles.description_div}>
                    <h1 className={styles.description_title}>{title_route}</h1>
                    <h1 className={styles.description_texttime}>เวลาที่ให้บริการ :</h1>
                    <div>
                        {time_service.length > 0 ? (
                            <table className={styles.description_texttime}>
                                <tbody>
                                    {time_service.map((time, i) => (
                                        <tr>
                                            <td>{i + 1}.   {time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : time_service.length === 0 ? (
                            <div className={styles.thai_font}>
                                ไม่พบข้อมูลเส้นทางเดินรถที่ต้องการ
                            </div>
                        ) : (
                            <div className={styles.thai_font}>
                                ไม่พบข้อมูลเส้นทางการเดินรถกรุณาเลือกเส้นทางการเดินรถให้ถูกต้อง
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default PhraeTransitxx