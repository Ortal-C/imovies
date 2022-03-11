import axios from 'axios';
import querySting from 'query-string';
import apiConfig from './apiConfig';

const axiosClients = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: (parmas) => querySting.stringify({ ...parmas, api_key: apiConfig.apikey })
})


//  Can think of interceptors as Axios' equivalent to middleware in Express
axiosClients.interceptors.request.use(async (config) => config)

axiosClients.interceptors.response.use((response) => {
    return (response && response.data) ? response.data : response;
}, (error) => { throw error; })

export default axiosClients;