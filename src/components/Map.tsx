import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../pages/LoadingScreen';
import { Fab } from './Fab';



interface Props {
    markers ?: Marker[];
}

export const Map = ({ markers }: Props) => {

    
    const {hasLocation,initialPosition} = useLocation();

    if(!hasLocation){
        return <LoadingScreen/>
    }
    return (
        <>
            <MapView
                style={{ width: '100%', height: '100%', }}
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitud,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {markers}
                {/* <Marker
                image={require('../assets/custom-marker.png')}
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="Esto es un titulo"
                    description="Esto es una descripción"
                /> */}
                {/* {this.state.markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                ))} */}
            </MapView>
            <Fab
                iconName='star-outline'
                onPress={()=>console.log('Hola')}
                style={{
                    position: 'absolute',
                    bottom:20,
                    right:20,
                    
                }}
            />
        </>
    )
}
