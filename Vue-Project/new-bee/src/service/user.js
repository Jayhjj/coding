import axios from '../utils/axios'
export function register(params){//注册的接口
    return axios.post('/user/register',params)
}

export function login(params){
    return axios.post('/user/login',params)
}

//获取用户信息
export function getUserInfo(){
    return axios.get('/user/info')
}