import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return ( 
    <>
        <NavigationEvents onWillFocus={fetchTracks}/>
        {/* <Text style={{ fontSize:48 }}>TrackListScreen</Text> */}
        <FlatList
            daya={state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={
                        () => navigation.navigate('TrackDetail', { _id: item._id })
                    }>
                        <Text>Funciona</Text>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>
                )
            }}
        />
        {/* <Button 
            title="Go to Track Detail" 
            onPress={() => navigation.navigate('TrackDetail')}
        /> */}
    </>
    )
}

// Function if we want to customize the option we want to return
// using info of the props object
// if none customization is needed it, you can return and object
TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const style = StyleSheet.create({

});

export default TrackListScreen;