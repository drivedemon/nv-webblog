import Api from '@/services/Api'

export default {
    index () {
        return Api().get('comments')
    },
    show (blogId) {
        return Api().get('comment/'+commentId)
    },
    post (blog) {
        return Api().post('comment', comment)
    },
    put (blog) {
        return Api().put('comment/'+comment.id, comment)
    },
    delete (blog) {
        return Api().delete('comment/'+comment.id, comment)
    },
}