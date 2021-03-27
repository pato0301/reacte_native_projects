import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const COUNTER_INCREASE = 1;

const reducer = (state, action) => {

    switch(action.type) {
        case 'increase':
            return {...state,counter: state.counter + action.amount}
        case 'decrease':
            return {...state,counter: state.counter - action.amount}
        default:
            return state
    }
}

const CounterScreen = () => {
    // const [counter,setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, {counter:0});
    const { counter } = state;

    return <View>
        <Button 
            title="Increase" 
            onPress={() => {
                // Dont do this
                // counter++
                // setCounter(counter + 1)
                dispatch({type: 'increase', amount: COUNTER_INCREASE})
            }}
        />
        <Button 
            title="Decrease" 
            onPress={() => {
                // setCounter(counter - 1)
                dispatch({type: 'decrease', amount: COUNTER_INCREASE})
            }}
        />
        <Text>Current count: {counter}</Text>
    </View>
}

const style = StyleSheet.create({

})

export default CounterScreen;