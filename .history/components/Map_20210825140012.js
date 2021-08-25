
import ReactMapGL from 'react-map-gl';


function Map() {
    return (
        <div>
            <ReactMapGL
                {...viewport}
                width="100%"
                height="100%"
                onViewportChange={(viewport) => setViewport(viewport)}
            />
        </div>
    )
}

export default Map
