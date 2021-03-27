import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'; 

import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input 
                label="Email" 
                value={email} 
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setEmail}
            />
            <Spacer/>
            <Input 
                // secureTextEntry={true} the same as below
                secureTextEntry
                label="Password"
                value={password} 
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={newPassword => setPassword(newPassword)}
            />
            {{errorMessage} ? <Text style={style.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button 
                    title={submitButtonText} 
                    onPress={() => onSubmit({ email, password })}
                />
                {/* <Button 
                    title="Go to Main Flow" 
                    onPress={() => navigation.navigate('mainFlow')}
                /> */}
            </Spacer>
        </>
    )
};

const style = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color :'red',
        marginLeft: 15,
        marginTop: 15,
    },
})

export default AuthForm;