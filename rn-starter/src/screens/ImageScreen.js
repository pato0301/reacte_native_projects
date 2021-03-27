import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {

    return <View>
        <ImageDetail 
            title="Forest" 
            imageSource={require('../../assets/forest.jpg')}
            score={9}
        />
        <ImageDetail 
            title="Mountain" 
            imageSource={require('../../assets/mountain.jpg')}
            score={8.5}
        />
        <ImageDetail 
            title="Beach" 
            imageSource={require('../../assets/beach.jpg')}
            score={8}
        />
    </View>
}

const style = StyleSheet.create({

})

export default ImageScreen;