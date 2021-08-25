
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState("");

    //transform searchResults into lat and long object
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    const center = getCenter(coordinates);
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });
    console.log('')
    return (

        <ReactMapGL
            {...viewport}
            mapStyle='mapbox://styles/sayedjamil29/cksr8dq0j209e17qip0ejjc0u'
            mapboxApiAccessToken={process.env.mapbox_key}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker latitude={result.lat}
                        longitude={result.long}
                        offsetTop={-10}
                        offsetLeft={-20}>
                        <p onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce">📌</p>
                    </Marker>

                </div>
            ))}
        </ReactMapGL>

    )
}

export default Map
