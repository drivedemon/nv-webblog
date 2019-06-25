import axios from 'axios'
// import sync way for send data from server to frontend
export default() => {
    return axios.create({
        baseURL: 'http://localhost:8082/',
    })
}