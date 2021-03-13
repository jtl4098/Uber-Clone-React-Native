import React from "react";
import {View, Text, Image, FlatList} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";

import MapViewDirections from 'react-native-maps-directions';


const GOOGLE_MAPS_APIKEY = 'API KEY';

const RouteMap = ({origin, destination}) => {

    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
    };
    const destinationLoc ={
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng,
    };

    console.log(originLoc);
    return (

            
        
         
        <MapView
            style={{width: '100%', height: '100%'}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
                latitude: 43.25459326090419,
                longitude: -79.92023214458159,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
       >

        <MapViewDirections
            origin={originLoc}
            destination={destinationLoc}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
        />
        <Marker
            coordinate={originLoc}
            title={'Origin'}
        />

        <Marker
            coordinate={destinationLoc}
            title={'Destination'}
        />

           
            
         

       </MapView>
 
    );
};

export default RouteMap;