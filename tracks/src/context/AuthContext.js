import createDataContext from './createDataContext'
import trackerApi from '../api/tracker';
import AsyncStorage from "@react-native-community/async-storage";
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch(action.type)  {
        case 'add_error':
            return {...state, errorMessage: action.payload }
        case 'signin':
            return { errorMessage: '' , token: action.payload }
        case 'clear_error_message':
            return {...state, errorMessage: '' }
        case 'signout':
            return { token: null, errorMessage: '' }
        default:
            return state;
    }
};

tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    } else {
        navigate('loginFlow')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
} 

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            // console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signin', payload: response.data.token})
            navigate('TrackList') // navigate('mainFlow') is also valid
        } catch(err) {
            // console.log(err.message);
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'})
        }
    }
}

// This version of how we code siginin is valid as the way we did it with sign up
const  signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token})
        navigate('TrackList') // navigate('mainFlow') is also valid
    } catch(err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in'})
    }
};

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout' })
    navigate('loginFlow')
}


export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);