
import ReactMapGL from 'react-map-gl';


function Map() {
    return (
        
            <ReactMapGL
                {...viewport}
                width="100%"
                height="100%"
                onViewportChange={(viewport) => setViewport(viewport)} >
            
            </ReactMapGL>
    
    )
}

export default Map
