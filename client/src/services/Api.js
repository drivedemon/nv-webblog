import axios from 'axios'
import store from '@/store'
// import sync way for send data from server to frontend
export default() => {
    return axios.create({
        baseURL: 'http://localhost:8082/',
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}