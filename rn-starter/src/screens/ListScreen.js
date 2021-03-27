import React from 'react'
import {View, Text, FlatList, StyleSheet}  from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'friend#1', key: '1', age:'20'},
        {name: 'friend#2', key: '2', age:'30'},
        {name: 'friend#3', key: '3', age:'35'},
        {name: 'friend#4', key: '4', age:'21'},
        {name: 'friend#5', key: '5', age:'22'},
        {name: 'friend#6', key: '6', age:'24'},
        {name: 'friend#7', key: '7', age:'28'},
        {name: 'friend#8', key: '8', age:'30'},
        {name: 'friend#9', key: '9', age:'32'},
        {name: 'friend#10', key: '10', age:'18'},
    ]

    return (
        <FlatList 
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(friends)=> friends.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={style.textStyle}>
                    {item.name} - Age {item.age}
                </Text>
            }}
        />
    )
};

const style = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
})

export default ListScreen