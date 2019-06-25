let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
const {sequelize} = require('./models');

const config = require('./config/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

// require for route can call app.js
require('./routes')(app);

// get path localhost for send request to http ================== create URL
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
app.post('/user/', function (req, res) {
    res.send('create user - '+ JSON.stringify(req.body));
})
// edit user
app.put('/user/:userId', function (req, res) {
    res.send('edit user'+ req.params.userId +" : "+ JSON.stringify(req.body));
})
// delete user
app.delete('/user/:userId', function (req, res) {
    res.send('delete user'+ req.params.userId +" : "+ JSON.stringify(req.body));
})

let port = process.env.PORT || config.port;

// run server by function sequelize for check condition if have not database == create else call app.listen 
sequelize.sync({force: false}).then(() => {
    app.listen(port, function() {
        console.log('server run port : '+port);
    })
})