import Axios from "axios";
import { auth_initiate, otp_service, otp_auth, auth_results } from "../../Constants";


export function authInit(json){

    return Axios.request({
        method : "POST",
        data : json,
        url : auth_initiate
    })
    .then(res=> res)
}


export function otpService(json){

    return Axios.request({
        method : "POST",
        data : json,
        url : otp_service
    })
    .then(res=>res)
}


export function otpAuth(json){

    return Axios.request({
        method : "POST",
        data : json,
        url : otp_auth
    })
    .then(res=>res)
}


export function otpAuthResult(json){

    return Axios.request({
        method : "POST",
        data : json,
        url : auth_results
    })
    .then(res=>res)
}
