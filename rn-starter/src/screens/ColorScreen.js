import React, {useState} from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";

const ColorScreen = () => {
    const [colors,setColor] = useState([]);

    return <View>
        <Button 
            title="Add a Color"
            onPress={() => {
                setColor([...colors,randomRgb()]);
            }}
        />
        <FlatList
            keyExtractor={(item) => {item}}
            data={colors}
            renderItem={( {item} ) => {
                return <View style={{ height:100, width:100, backgroundColor: item }}></View>
            }}
        />
    </View>
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const style = StyleSheet.create({
});

export default ColorScreen;