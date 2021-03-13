import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:  {
        padding: 10,
        height: '100%',

    },
    textInput:{
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
    },

    listView:{
        position: 'absolute',
        top: 105,
    },
    autoCompleteConatiner:{
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        

    },
    iconContainer:{
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,

    },
    locationText:{
        
    },
    separator:{
        backgroundColor:'#efefef',
        height: 1,
    },

    circle:{
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 25,
        left: 15,
        borderRadius: 5,
    },
    line:{
        width: 1,
        height: 50,
        backgroundColor: '#e0e0e0',
        position: 'absolute',
        top: 30,
        left: 17,
        borderRadius: 5,
    },
    square:{
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 80,
        left: 15,

    }


});

export default styles;