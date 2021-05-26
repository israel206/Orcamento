import axios from 'axios';
// chamando api para trabalhar com orcamento
const api = axios.create({
    baseURL: 'http://192.168.15.166:8080'
});

export default api;