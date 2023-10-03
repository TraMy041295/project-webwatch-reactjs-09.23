import axios from 'axios';

const instance = axios.create({
    baseURL:"https://6496d60c83d4c69925a326f0.mockapi.io/",
})
export default instance