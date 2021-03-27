import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from '../components/ColorCounter'

const BoxScreen = () => {
    return <View style={style.parentStyle}>
        <View style={style.viewOneStyle}/>
        <View style={style.viewTwoStyle}/>
        <View style={style.viewThreeStyle}/>
    </View>
}

const style = StyleSheet.create({
    parentStyle: {
        boderWidth: 3,
        borderColor: 'black',
        height: 200,
        // alignItems: 'flex-start',
        flexDirection: 'row', //column default
        justifyContent: 'space-between'
    },
    viewStyleOne:{
        height: 50,
        width:50,
        backgroundColor:'red',
        // boderWidth: 1,
        // borderColor: 'red',
        // // marginVertical: 20,
        // // marginHorizontal: 20,
        // padding10: 10,
        // margin: 20,
        // alignSelf: 'flex-start', // overwrite alignItems
    },
    viewStyleTwo:{
        height: 50,
        width:50,
        backgroundColor:'green',
        marginTop:50
        // boderWidth: 1,
        // borderColor: 'red',
        // // marginVertical: 20,
        // // marginHorizontal: 20,
        // padding10: 10,
        // margin: 20,
        // flex:1,
    },
    viewStyleThree:{
        height: 50,
        width:50,
        backgroundColor:'purple',
        // boderWidth: 1,
        // borderColor: 'red',
        // // marginVertical: 20,
        // // marginHorizontal: 20,
        // padding10: 10,
        // margin: 20,
    }
});

export default BoxScreen;
