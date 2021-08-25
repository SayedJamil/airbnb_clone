
import ReactMapGL from 'react-map-gl';

const viewport = 

function Map() {
    return (

        <ReactMapGL
            mapStyle='mapbox://styles/sayedjamil29/cksr8dq0j209e17qip0ejjc0u'
            mapboxApiAccessToken={process.env.mapbox_key}>
        </ReactMapGL>

    )
}

export default Map
