import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosinstance = axios.create({
    baseURL: baseURL,
    headers:{
        'Content-Type':'application/json'
    }

})


// Adding request interceptor

axiosinstance.interceptors.request.use(
    function(config){
        const accesstoken = localStorage.getItem('accessToken')
        if(accesstoken){
            config.headers['Authorization'] = `Bearer ${accesstoken}`
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
)

// Add a response interceptor

axiosinstance.interceptors.response.use(
    function(response){
        return response;
    },
    // Handling failed responses
    async function (error) {
        const originalrequest = error.config;
        if(error.response.status === 401 && !originalrequest.retry){
            originalrequest.retry=true;
            const refreshToken = localStorage.getItem('refreshToken');
            try {
                const response = await axiosinstance.post('/token/refresh/',{refresh: refreshToken});
                localStorage.setItem('accessToken',response.data.access);
                originalrequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return axiosinstance(originalrequest);
            } catch (error) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                return false;
            }
        }
        return Promise.reject(error);
    }
)

export default axiosinstance;