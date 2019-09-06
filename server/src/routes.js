const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const BlogController = require('./controllers/BlogController')
const CommentController = require('./controllers/CommentController')

module.exports = (app) => {
    // RESTFUL API for users management

    // get data from user login
    app.post('/login', UserAuthenController.login)
    
    // User route
    // create user
    app.post('/user', UserController.create)
    // update user
    app.put('/user/:userId', UserController.update)
    // delete user
    app.delete('/user/:userId', UserController.remove)
    // get user by id
    app.get('/user/:userId', UserController.show)
    // get  all user
    app.get('/users', isAuthenController, UserController.index)    

    // Blog route
    // create blog
    app.post('/blog', BlogController.create)
    // update blog
    app.put('/blog/:blogId', BlogController.update)
    // delete blog
    app.delete('/blog/:blogId', BlogController.remove)
    // get blog by id
    app.get('/blog/:blogId', BlogController.show)
    // get all blogs
    app.get('/blogs', BlogController.index)
    // get my blogs
    app.get('/myblogs/:userId', BlogController.myblog)

    // Comment route
    // create comment
    app.post('/comment', CommentController.create)
    // update comment
    app.put('/comment/:commentId', CommentController.update)
    // delete comment
    app.delete('/comment/:commentId', CommentController.remove)
    // get comment by id
    app.get('/comment/:commentId', CommentController.show)
    // get all comments
    app.get('/comments', CommentController.index)
}