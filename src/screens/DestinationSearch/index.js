import React, { useEffect, useState } from "react";
import {View, Text, TextInput, SafeAreaView} from "react-native";
import styles from "./styles";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from "./PlaceRow";

import {useNavigation} from "@react-navigation/native";

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

const DestinationSearch = (props) => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const navigation = useNavigation();

    const checkNavigation = () => {
        if(originPlace && destinationPlace){
            navigation.navigate('SearchResults', {
                originPlace,
                destinationPlace
            })
        }
    }
    
    useEffect( () =>{
        checkNavigation();
        
    }, [originPlace, destinationPlace]);
    return (
        <SafeAreaView>
            <View style={styles.container}>

            <GooglePlacesAutocomplete
                placeholder='Where from?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setOriginPlace({data, details});
                   
                  }}
                  enablePoweredByContainer={false}
                  suppressDefaultStyles
                  currentLocation={true}
                  currentLocationLabel='Current location'
                  styles={{
                      textInput : styles.textInput, 
                      container: styles.autoCompleteConatiner,
                      listView: styles.listView,
                      separator: styles.separator,
                  }}
                  fetchDetails
                query={{
                    key: 'API KEY',
                    language: 'en',
                }}
                renderRow = {(data) => <PlaceRow data={data} />}
                renderDescription={(data) => data.description || data.vicinity}
                predefinedPlaces={[homePlace, workPlace]}
                />



            <GooglePlacesAutocomplete
                placeholder='Where to?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setDestinationPlace({data, details});
                   
                  }}
                  enablePoweredByContainer={false}
                  suppressDefaultStyles
                  styles={{
                      textInput : styles.textInput,
                      container: {
                          ...styles.autoCompleteConatiner, 
                          top: 55,
                      },
                      separator: styles.separator,
                    
                    
                  }}
                  fetchDetails
                query={{
                    key: 'API KEY',
                    language: 'en',
                }}
                renderRow = {(data) => <PlaceRow data={data} />}
                />

                { /* Circle near Origin input*/}

                <View style={styles.circle} />

                { /* Line between dots*/}

                <View style={styles.line} />

                { /* Circle near Destination input*/}

                <View style={styles.square} />
            </View>
        </SafeAreaView>
        
    );
};

export default DestinationSearch;