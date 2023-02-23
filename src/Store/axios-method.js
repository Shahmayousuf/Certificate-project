import axios from "axios";
const BASEURL='https://api.certificates.edisonvalley.com/api/v1'
export const axiosApi=axios.create({
    baseURL:BASEURL,
    withCredentials:true,

})
axiosApi.interceptors.request.use(function(config){
    const token= localStorage.getItem("token")

    if(token){
    config.headers['Authorization']= 'token ' + token
    
    }else {
        console.log('error')

    }
    return config

})