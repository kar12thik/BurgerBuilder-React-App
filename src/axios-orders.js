import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-20c2d.firebaseio.com/'
});

export default instance;