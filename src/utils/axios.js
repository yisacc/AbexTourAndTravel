import axios from 'axios';
const baseURL="http://localhost:1337/";
const axiosInstance=axios.create({
    baseURL:baseURL,
});

axiosInstance.interceptors.response.use(
    
    (response)=>
    new Promise((resolve,reject)=>{
        
        resolve(response);
    }),
    (error)=>{
        console.log(error);
    });

    export default axiosInstance;