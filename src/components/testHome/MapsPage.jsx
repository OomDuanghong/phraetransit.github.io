import React, { useRef, useEffect, useState } from 'react';
import styles from './MapsPage.module.css'
import { Link } from 'react-router-dom'


var mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoicGhyYWUtdHJhbnNpdCIsImEiOiJjbG5wcjhnemwwcnNvMnJxaTNvdG1qbnBwIn0.lkJwWKX7nRwo4qqjcWVmmg';

const MapsPage = () => {
    const [nav, setNav] = useState(false)
    const mapContainer = useRef(null);
    const map = useRef(null);
    let [lng, setLng] = useState(100.666569875);
    let [lat, setLat] = useState(13.584486062500002);
    const [zoom, setZoom] = useState(10);

    const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });

    const geojsonData = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        100.56158655753484,
                        15.746653952288995
                    ],
                    "type": "Point"
                },
                "id": 0
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        100.56158655753484,
                        13.746653952288995
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        100.575354,
                        13.749331
                    ],
                    "type": "Point"
                }
            }
        ]
    };
    const geojsonData_2 = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        100.570228, 13.742326
                    ],
                    "type": "Point"
                },
                "id": 0
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        100.571900, 13.742040
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        100.550077,13.738051
                    ],
                    "type": "Point"
                }
            }
        ]
    };

    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }));
        // Set marker options.
        // new mapboxgl.Marker({
        //     color: "#AAAAAA",
        //     draggable: true
        // }).setLngLat([100.575354, 13.749331])
        //     .addTo(map.current)

        // new mapboxgl.Marker({
        //     color: "#ABFFFF",
        //     draggable: true
        // }).setLngLat([100.56158655753484, 13.746653952288995])
        //     .addTo(map.current)
        // add markers to map
        for (const feature of geojsonData_2.features) {
            // // create a HTML element for each feature
            // const el = document.createElement('div');
            // el.className = 'marker';
            // make a marker for each feature and add to the map
            const el = {
                color: "#ABFFFF",
                draggable: true
            }
            new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map.current);
        }
    });


    return (
        <div >
            <div ref={mapContainer} className={styles.mapcontainer} />
        </div>
    )
}

export default MapsPage