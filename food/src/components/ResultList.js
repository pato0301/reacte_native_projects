import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'
import ResultDetail from './ResultDetail'

const ResultList = ({ title, results, navigation }) => {

    if(!results.length){
        return null;
    }

    return <View style={style.container}>
        <Text style={style.title}>{title}</Text>
        <FlatList
            // the below is equal to horizontal={true}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id:item.id})}>
                        <ResultDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
};

const style = StyleSheet.create({
    title: {
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom: 5,
    },
    container : {
        marginBottom: 10,
    }
})

export default withNavigation(ResultList);