let express = require('express');
let bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// get path localhost for send request to http
app.get('/status', function (req, res){
    res.send('hello node server is running......');
})
app.get('/hello/:person', function (req, res) {
    console.log('hello - '+ req.params.person);
    res.send('say hello - '+ req.params.person);
})
// get user by id
app.get('/user/:userId', function (req, res) {
    res.send('hi user - '+ req.params.userId);
})
// get all user
app.get('/users', function (req, res) {
    res.send('hi all user');
})
// create user
app.get('/user/:userId', function (req, res) {
    res.send('create user - '+ JSON.stringify(req.body));
})
// edit user
app.get('/user/:userId', function (req, res) {
    res.send('edit user'+ req.params.userId +" : "+ JSON.stringify(req.body));
})
// delete user
app.get('/user/:userId', function (req, res) {
    res.send('delete user'+ req.params.userId +" : "+ JSON.stringify(req.body));
})

let port = 8082;

app.listen(port, function() {
    console.log('server run port : '+port);
})