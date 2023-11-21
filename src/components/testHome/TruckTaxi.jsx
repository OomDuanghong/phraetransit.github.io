import React, { useRef, useEffect, useState } from 'react';
import styles from './MapsPage.module.css'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import routes from '../../data/boardingPoint.json'
import locations from '../../data/locations.json'

var mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoicGhyYWUtdHJhbnNpdCIsImEiOiJjbG5wcjhnemwwcnNvMnJxaTNvdG1qbnBwIn0.lkJwWKX7nRwo4qqjcWVmmg';

const TruckTaxi = () => {
    const [nav, setNav] = useState(false)
    const mapContainer = useRef(null);
    const map = useRef(null);
    let [lng, setLng] = useState(100.1425559);
    let [lat, setLat] = useState(18.1417761);
    const [zoom, setZoom] = useState(10);
    const optionsList = locations.options

    function handleSelect(data) {
        setSelectedOptions(data);
    }
    const getInitialState2 = () => {
        const selectedOptions = "";
        return selectedOptions;
    };
    const [selectedOptions, setSelectedOptions] = useState(getInitialState2);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const getInitialState = () => {
        const value = "";
        return value;
    };
    const [value, setValue] = useState(getInitialState);

    let geojsonData = {}
    let robWiang = routes.truckTaxi.robWiang
    let isHaveRobWiang
    if (value == 'm1s3') {
        geojsonData = routes.truckTaxi.m1s3
        isHaveRobWiang = true
    } else if (value == 'm1s4') {
        geojsonData = routes.truckTaxi.m1s4
        isHaveRobWiang = true
    } else if (value == 'm4s1182') {
        geojsonData = routes.truckTaxi.m4s1182
        isHaveRobWiang = true
    } else if (value == 'm4s1183-1') {
        geojsonData = routes.truckTaxi['m4s1183-1']
        isHaveRobWiang = true
    } else if (value == 'm4s1183-2') {
        geojsonData = routes.truckTaxi['m4s1183-2']
        isHaveRobWiang = true
    } else if (value == 'm4s2145-1') {
        geojsonData = routes.truckTaxi['m4s2145-1']
        isHaveRobWiang = true
    } else if (value == 'm4s2145-2') {
        geojsonData = routes.truckTaxi['m4s2145-2']
        isHaveRobWiang = true
    } else if (value == 'm4s2146-1') {
        geojsonData = routes.truckTaxi['m4s2146-1']
        isHaveRobWiang = true
    } else if (value == 'm4s2146-2') {
        geojsonData = routes.truckTaxi['m4s2146-2']
        isHaveRobWiang = true
    } else if (value == 'm4s2204-1') {
        geojsonData = routes.truckTaxi['m4s2204-1']
        isHaveRobWiang = true
    } else if (value == 'm4s2204-2') {
        geojsonData = routes.truckTaxi['m4s2204-2']
        isHaveRobWiang = true
    } else if (value == 'm4s2204-3') {
        geojsonData = routes.truckTaxi['m4s2204-3']
        isHaveRobWiang = true
    } else if (value == 'm4s2204-4') {
        geojsonData = routes.truckTaxi['m4s2204-4']
        isHaveRobWiang = true
    } else if (value == 'm4s2396-1') {
        geojsonData = routes.truckTaxi['m4s2396-1']
        isHaveRobWiang = true
    } else if (value == 'm4s2396-2') {
        geojsonData = routes.truckTaxi['m4s2396-2']
        isHaveRobWiang = true
    } else if (value == 'm4s2591-1') {
        geojsonData = routes.truckTaxi['m4s2591-1']
        isHaveRobWiang = true
    } else if (value == 'm4s2591-2') {
        geojsonData = routes.truckTaxi['m4s2591-2']
        isHaveRobWiang = true
    } else if (value == 'm4s2591-3') {
        geojsonData = routes.truckTaxi['m4s2591-3']
        isHaveRobWiang = true
    } else if (value == 'm4s2591-4') {
        geojsonData = routes.truckTaxi['m4s2591-4']
        isHaveRobWiang = true
    } else if (value == 'm4s2592-1') {
        geojsonData = routes.truckTaxi['m4s2592-1']
        isHaveRobWiang = true
    } else if (value == 'm4s2592-2') {
        geojsonData = routes.truckTaxi['m4s2592-2']
        isHaveRobWiang = true
    } else if (value == 'm4s2593') {
        geojsonData = routes.truckTaxi['m4s2593']
        isHaveRobWiang = true
    } else {
    }


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

        if (typeof selectedOptions.value !== 'undefined') {
            const el = {
                color: "#000000",
                draggable: true
            }
            new mapboxgl.Marker(el).setLngLat(locations[`${selectedOptions.value}`].geometry.coordinates).addTo(map.current);
        }


        if (value && isHaveRobWiang == true) {
            for (const feature of geojsonData.features) {
                // make a marker for each feature and add to the map
                const el = {
                    color: "#000000",
                    draggable: true
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
                // map.current.setZoom(15)
                if (isHaveRobWiang == true) {
                    // Add a data source containing GeoJSON data.
                    map.current.addSource('maine', {
                        'type': 'geojson',
                        'data': {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Polygon',
                                // These coordinates outline Maine.
                                'coordinates': [
                                    [

                                    ]
                                ]
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
                            'line-color': '#000',
                            'line-width': 3
                        }
                    });
                }
            });
        }
    });

    return (
        <div >
            {/* <h3 className='textlabel'>เลือกเส้นทางการเดินรถสองแถวที่ต้องการ</h3> */}
            <div className='selection_r'>
                <div className='selection_r'>
                    <label className='label'>เลือกสายรถ:</label>
                    <select className='selection' value={value} onChange={handleChange}>
                        <option value="default">เลือกสายของรถสองแถวที่ต้องการ</option>
                        <option value="m1s3">รอบเวียง-สามแยกโรงพยาบาล</option>
                        <option value="m1s4">ทุ่งโฮ้ง-รอบเวียง</option>
                        <option value="m4s1182">แพร่ – ร้องกวาง</option>
                        <option value="m4s1183-1">แพร่ – สอง – บ้านป่าแดง (เที่ยวไป)</option>
                        <option value="m4s1183-2">บ้านป่าแดง – สอง – แพร่ (เท่ียวกลับ)</option>
                        <option value="m4s2145-1">แพร่ – น้ําเลา (เที่ยวไป)</option>
                        <option value="m4s2145-2">น้ําเลา – แพร่ (เที่ยวกลับ)</option>
                        <option value="m4s2146-1">แพร่ – ห้วยหม้าย (เท่ียวไป)</option>
                        <option value="m4s2146-2">ห้วยหม้าย – แพร่ (เที่ยวกลับ)</option>
                        <option value="m4s2204-1">แพร่ – สรอย (เที่ยวไป)</option>
                        <option value="m4s2204-2">สรอย – แพร่ (เที่ยวกลับ)</option>
                        <option value="m4s2204-3">แพร่ – ลอง (เท่ียวไป)</option>
                        <option value="m4s2204-4">ลอง – แพร่ (เที่ยวกลับ)</option>
                        <option value="m4s2396-1">ร้องกวาง – บ้านห้วยเอียด</option>
                        <option value="m4s2396-2">เส้นทางช่วงร้องกวาง – บ้านน้ําพุสูง</option>
                        <option value="m4s2591-1">แพร่-วังชิ้น(เที่ยวไป)</option>
                        <option value="m4s2591-2">วังชิ้น-แพร่(เที่ยวกลับ)</option>
                        <option value="m4s2591-3">แพร่-วังเบอะ(เที่ยวไป)</option>
                        <option value="m4s2591-4">ว้งเบอะ-แพร่(เที่ยวกลับ)</option>
                        <option value="m4s2592-1">แพร่-ป่าแดง(เที่ยวไป)</option>
                        <option value="m4s2592-2">ป่าแดง-แพร่(เที่ยวกลับ)</option>
                        <option value="m4s2593">แพร่ - ห้วยไร่</option>
                    </select>
                </div>
                <div className='selection_r'>
                    <label className='label'>เลือกสถานที่ท่องเที่ยวที่ต้องการ(ถ้ามี):</label>
                    <Select
                        className='selection2'
                        options={optionsList}
                        placeholder="เลือกปลายทางที่ต้องการ"
                        value={selectedOptions}
                        onChange={handleSelect}
                        isSearchable={true}
                    />
                </div>
            </div>
            <div className='map-container'>
                <div ref={mapContainer} className={styles.mapcontainer} />
            </div>

        </div>
    )
}

export default TruckTaxi 