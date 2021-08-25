
import ReactMapGL from 'react-map-gl';


function Map() {
    return (

        <ReactMapGL
            mapStyle='mapbox://styles/sayedjamil29/cksr8dq0j209e17qip0ejjc0u'
            mapboxApiAccessToken={process.env.mapbox_key}>
view
        </ReactMapGL>

    )
}

export default Map
