const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const BlogController = require('./controllers/BlogController')

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
}