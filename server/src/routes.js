const UserController = require('./controllers/UserController');

module.exports = (app) => {
    // RESTFUL API for users management
    // create user
    app.post('/user', UserController.create);
    // update user
    app.put('/user/:userId', UserController.update);
    // delete user
    app.delete('/user/:userId', UserController.remove);
    // get user by id
    app.get('/user/:userId', UserController.show);
    // get  all user
    app.get('/users', UserController.index);
}