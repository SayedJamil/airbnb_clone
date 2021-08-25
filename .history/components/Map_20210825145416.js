
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
   
    //transform searchResults into lat and long object
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    const center = getCenter(coordinates);
    console.log(center);
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
