import React, { useContext } from 'react';
import { StyleSheet, Text, ActivityIndicator} from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)
    // Generate Random point to see how line drawing works
    // let points = []
    // for (let i = 0; i < 20 ; i++) {
    //     points.push({
    //         latitude: 37.33233 + i * 0.001,
    //         longitude: -122.03121 + i * 0.001
    //     })
    // }

    // console.log(locations);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }}/>
    }

    // console.log(currentLocation);

    return <MapView
        style={style.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        // TODO : add that when user goes out of map, re center map, to show user
        // Region willmove the map to always keep in the center your current location
        // region={{
        //     ...currentLocation.coords,
        //     latitudeDelta: 0.01,
        //     longitudeDelta: 0.01,
        // }}
        >
        <Circle
            center={currentLocation.coords}
            radius={30}
            strokeColor="rgba(158,158,255,1.0)"
            fillColor="rgba(158,158,255,3.0)"
        />
        <Polyline
            coordinates={locations.map(loc => loc.coords)}
        />
    </MapView>
};

const style = StyleSheet.create({
    map: {
        height: 300,
    }
})

export default Map;