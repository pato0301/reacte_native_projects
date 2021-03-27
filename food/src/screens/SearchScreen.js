import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
    // We can also use <> </> to achive the same as view 
    // with style flex : 1
    <View style={{flex:1}}>
        <SearchBar 
            term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)} 
            // we can put what is below, as we are only calling the function
            // onTermSubmit={searchApi}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {/* <Text>We have found {results.length} results</Text> */}
        <ScrollView>
            <ResultList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective"
                // navigation={navigation}
            />
            <ResultList 
                results={filterResultsByPrice('$$')} 
                title="Bit Pricier"
                // navigation={navigation}
            />
            <ResultList 
                results={filterResultsByPrice('$$$')} 
                title="Big Spender"
                // navigation={navigation}
            />
        </ScrollView>
        {/* <ResultList results={filterResultsByPrice('$$$$')} title="Big Big Spender"/> */}
    </View>);
};

const style = StyleSheet.create({

})

export default SearchScreen;