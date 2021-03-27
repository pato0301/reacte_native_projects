// this is a mock file to test the location tracking in the app
// this file should not be upload with the production files

import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001;

// Fake traking
const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 9.164567 + increment * tenMetersWithDegrees,
            latitude: 45.502324 + increment * tenMetersWithDegrees,
        }
    };
}

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter ++;
}, 1000)