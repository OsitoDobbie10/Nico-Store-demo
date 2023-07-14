import { MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
import Providers from '../Helpers/Providers'
import 'leaflet/dist/leaflet.css';

const MapViewer = (props) => {
    const {coordenas} = props;
    const {lat,long} = coordenas;
    const arreglo = [lat,long];
    console.log(arreglo)
    const centro = [14.0818,-87.20681];
  return (
   <MapContainer 
   center={centro}
   zoom={15}
   >
    <TileLayer 
    url={Providers.maptiler.url}
    attribution={Providers.maptiler.attribution}/>
    <Marker position={centro}>
      <Popup>
       Tu ubicacion actual.
      </Popup>
    </Marker>
   </MapContainer>
  )
}

export default MapViewer
