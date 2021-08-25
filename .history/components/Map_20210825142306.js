
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';



function Map() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
    });
    return (

        <ReactMapGL
            {...viewport}
            mapStyle='mapbox://styles/sayedjamil29/cksr8dq0j209e17qip0ejjc0u'
            mapboxApiAccessToken={process.env.mapbox_key}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
        </ReactMapGL>

    )
}

export default Map
