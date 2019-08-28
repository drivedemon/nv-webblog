import Api from '@/services/Api'

export default {
    register (credentitals) {
        return Api().post('register', credentitals)
    },
    login (credentitals) {
        return Api().post('login', credentitals)
    }
}