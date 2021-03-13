import React from "react";
import {View, Text, Dimensions} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen";
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";

const Stack = createStackNavigator();

const RootNavigator = (props) => {
    return (
        
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
               
                >

                    <Stack.Screen name={"Home"} component = {HomeScreen} />
                    <Stack.Screen name={"DestinationSearch"} component = {DestinationSearch} />
                    <Stack.Screen name={"SearchResults"} component = {SearchResults} />

                </Stack.Navigator>
                
            </NavigationContainer>
            
        
    );
};

export default RootNavigator;