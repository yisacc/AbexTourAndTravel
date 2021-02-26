import axios from 'axios';
const baseURL="https://eastafricatourbackend.herokuapp.com/";
// const baseURL="http://localhost:1337";
const axiosInstance=axios.create({
    baseURL:baseURL,
});

axiosInstance.interceptors.response.use(
    
    (response)=>
    new Promise((resolve,reject)=>{
        
        resolve(response);
    }),
    (error)=>{
        return new Promise((resolve,reject)=>{
            reject(error);
        })
    });

    export default axiosInstance;