import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';
import { FontAwesome } from '@expo/vector-icons';

// Track location an see how it change over time
import useLocation from '../hooks/useLocation'

import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import '../_mockLocation'

const TrackCreateScreen = ({ isFocused }) => {
    // console.log(useContext(LocationContext));
    // console.log('works 0');
    const { state: { recording } , addLocation } = useContext(LocationContext);
    // console.log('works 1');
    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording]);
    // console.log('works 2');
    const [err] = useLocation( isFocused || recording, callback);

    // isFocused will return true or false
    // console.log(isFocused)
    // console.log(err);

    return <SafeAreaView forceInset={{ top: 'always' }}>
        <Text h2>Create Track</Text>
        <Map />
        {/* <NavigationEvents onWillBlur={() => console.log('leaving')}/> */}
        { err ? <Text>Please enable location services</Text> : null }
        <TrackForm/>
    </SafeAreaView>
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}

const style = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);