import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
    <View style={style.backgroundStyle}>
        <Feather name='search' style={style.iconStyle} />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={style.inputStyle}
            placeholder = "Search"
            value={term}
            // onChangeText={newTerm => onTermChange(newTerm)}
            onChangeText={onTermChange} // same as above
            // onEndEditing={()=> onTermSubmit()}
            onEndEditing={onTermSubmit} // same as above
        />
    </View>);
};

const style = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom:10,
        // alignItems: 'center',
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex:1,
        fontSize: 18,
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
})

export default SearchBar;