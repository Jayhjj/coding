import axios from '../utils/axios'

export function addCart(params){
    return axios.post('/shop-cart',params)
}