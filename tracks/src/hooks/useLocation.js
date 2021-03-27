import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default ( shouldTrack, callback ) => {
    // Track if there was an error while requesting access to localization
    // inside the app
    const [err, setErr] = useState(null);
    // const [subscriber, setSubscriber] = useState(null);
    
    // the empty array in useEffect means that always right the first time,
    // now, every time shouldTrack changes we will re-run startWatching()
    useEffect( () => {
        let subscriber;

        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync();
                if (!granted) {
                throw new Error('Location permission not granted');
                }
                // await requestPermissionsAsync();
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                }, 
                    callback
                );
                // setSubscriber(sub)
            } catch (e) {
                setErr(e);
            }
        }

        if (shouldTrack) {
            // start watching
            startWatching();
        } else {
            // stop watching
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
            // setSubscriber(null);
        }

        return () => {
            if(subscriber){
                subscriber.remove()
            }
        };
    }, [shouldTrack, callback])

    return [err];
}