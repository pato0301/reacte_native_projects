import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
    const [result,setResult] = useState(null);
    const id =  navigation.getParam('id')

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id)
    }, [])

    if(!result){
        return null;
    }

    return <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={style.image} source={{ uri: item }}/>
            }}
        />
    </View>
};

const style = StyleSheet.create({
    image:{
        height:200,
        width:300,
    }
});

export default ResultShowScreen;