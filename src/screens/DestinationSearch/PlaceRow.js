import React from "react";
import {View, Text, Dimensions} from "react-native";
import styles from "./styles";

import HomeMap from "../../components/HomeMap";
import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";

import Entypo from "react-native-vector-icons/Entypo";

const placeRow = ({data}) => {

    return (
        <View style={styles.row}>
            <View style ={styles.iconContainer}>
                {data.description === 'Home' 
                    ? <Entypo name ='home' size={20} color={'white'}/>
                    : <Entypo name='location-pin' size={20} color={'white'}/>
                }
                
            </View>
            
            <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
            
        </View>
    );
};

export default placeRow;