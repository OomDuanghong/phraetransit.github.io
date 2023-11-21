import React, { useRef, useEffect, useState } from 'react';
import styles from './MapsPage.module.css'
import { Link } from 'react-router-dom'
import routes from '../../data/boardingPoint.json'
import image from '../../images/arrow.png'
// import image from '../../images/triangle.svg'


var mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoicGhyYWUtdHJhbnNpdCIsImEiOiJjbG5wcjhnemwwcnNvMnJxaTNvdG1qbnBwIn0.lkJwWKX7nRwo4qqjcWVmmg';

const Tram = () => {
    // const [nav, setNav] = useState(false)
    const mapContainer = useRef(null);
    const map = useRef(null);
    let [lng, setLng] = useState(100.1425559);
    let [lat, setLat] = useState(18.1417761);
    const [zoom, setZoom] = useState(11);

    // const getInitialState = () => {
    //     const value = "";
    //     return value;
    // };

    // const [value, setValue] = useState(getInitialState);

    // const handleChange = (e) => {
    //     setValue(e.target.value);
    // };

    const geojsonData = routes.tram

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

        let count = 1
        for (const feature of geojsonData.features) {
            // make a marker for each feature and add to the map
            const el = document.createElement('div');
            el.className = `marker${count}`

            // create the popup
            const popup = new mapboxgl.Popup({ offset: 25 }).setText(feature.properties.description);
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

            // Add a layer to use the image to represent the data.
            // map.current.addLayer({
            //     'id': 'point_',
            //     'type': 'symbol',
            //     'source': 'point',
            //     'layout': {
            //         'symbol-placement': 'line',
            //         'symbol-spacing': 150,
            //         // 'icon-allow-overlap': true,
            //         // 'icon-ignore-placement': true,
            //         'icon-image': 'car',
            //         'icon-size': 1.5,
            //         // 'visibility': 'visible'
            //     }
            // });
            // // });
            map.current.setZoom(20)

        });
    });

    return (
        <div >
            <div className='textlabel'>
                <h4>Click ที่หมุดของสถานที่บนเส้นทางเดินรถเพื่อดูข้อมูลเพิ่มเติม</h4>
            </div>
            <div>
                <div ref={mapContainer} className={styles.mapcontainer} />
            </div>
        </div>
    )
}

export default Tram