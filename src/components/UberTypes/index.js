import React from "react";
import {View, Text, Pressable} from "react-native";
import UberTypeRow from "../UberTypeRow";
import styles from "./styles";

import typesData from '../../assets/data/types';
import types from "../../assets/data/types";
const UberTypes = (props) => {

    const confirm = () =>{

    }
    return (
        <View>
            {typesData.map((type) => (

            <UberTypeRow type={type} key={type.id}/>
            ))}
            

            <Pressable onPress={confirm} style={{
           
                backgroundColor: 'black',
                padding: 10,
                margin: 10,
              
                alignItems: 'center',
            }}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    );
};

export default UberTypes;