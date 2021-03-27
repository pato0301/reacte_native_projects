import React from 'react'
import { Text , StyleSheet, View} from 'react-native'

const ComponentScreen = () => {
    const name = 'Patricio'

    return (
    <View>
        <Text style={style.textStyle}>Getting started with React Native</Text>
        <Text style={style.nameStyle}>My name is {name}</Text>
    </View>);
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle:{
        fontSize:20
    }
});

export default ComponentScreen;