import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'; 

import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack'

import Spacer from './Spacer'

const TrackForm = () => {
    // console.log('works 0');
    const { state : { name, recording, locations },
        startRecording, 
        stopRecording, 
        changeName 
    } = useContext(LocationContext);
    // console.log(useSaveTrack);
    const [saveTrack] = useSaveTrack();
    // console.log(saveTrack);

    // console.log(locations.length);
    // console.log('works 1');

    return (
        <>
            <Spacer>
                <Input 
                    value={name}
                    onChangeText={changeName}
                    placeholder="Enter Name"
                />
                <Spacer>
                { 
                recording ?
                (<Button title="Stop" onPress={stopRecording}/> 
                ) : ( <Button title="Start Recording" onPress={startRecording}/> 
                )}
                </Spacer>
                <Spacer>
                {
                    !recording && locations.length
                    ? <Button title="Save Recording" onPress={saveTrack}/>
                    : null
                }
                </Spacer>
            </Spacer>
        </>
    )
};

const style = StyleSheet.create({

});

export default TrackForm;