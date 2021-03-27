import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 3rgWcgqnRjJkmky0XnWrTjY1bGLKoWqDc7gMCXG9LeWNjOEDXWnEsABwwMWfadVCF389q7xNVpTCpYYJG17tOrhJUaRHif43a4pvFIqyJ2hkjF0KwKHLjTACOIBCYHYx'
    }
});