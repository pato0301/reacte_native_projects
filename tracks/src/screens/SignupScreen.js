import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
    <View style={style.container}>
        <NavigationEvents
            // onWillFocus={() => {}} call just after press the navigation button
            // onDidFocus={() => {}} when you land on the new screen this gets call
            onWillBlur={clearErrorMessage} // navigate away from the screen
            //onDidBlur={() => {}} as soon as the transition complets
        />
        <AuthForm
            headerText = 'Sign Up for Tracker'
            errorMessage = {state.errorMessage}
            onSubmit = {signup}
            submitButtonText = 'Sign Up'
        />
        <NavLink
            text = 'Already have an account? Sign in instead'
            routeName = 'Signin'
        />
    </View>)
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginBottom: 250,
    },
});

export default SignupScreen;