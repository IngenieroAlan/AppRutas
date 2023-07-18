import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';


interface Props {
    markers ?: Marker[];
}

export const Map = ({ markers }: Props) => {

    useEffect(() => {
        Geolocation.getCurrentPosition(
            info => console.log(info),
            (err)=>console.log({err}),{
                enableHighAccuracy: true
            }
            );
    }, [])
    

    return (
        <>
            <MapView
                style={{ width: '100%', height: '100%', }}
                showsUserLocation
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
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
        </>
    )
}
