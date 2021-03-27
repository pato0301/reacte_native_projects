import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";

const instance = axios.create({
    baseURL: 'http://2b6b61c78295.ngrok.io'
});

instance.interceptors.request.use(
    // call automatically every time we do a request
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    // call automatically every time there is and error when we do a request
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;