import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () =>{
    const [name, setName] = useState('');

    return <View>
        <Text>Enter Name:</Text>
        <TextInput 
            style={style.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
        />
        <Text>My name is {name}</Text>
    </View>
};

const style = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1,
    }
});

export default TextScreen;