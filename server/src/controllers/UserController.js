module.exports = {
    // get all user
    index (req, res) {
        res.send('watching all user....');
    },
    // create user
    create (req, res) {
        res.send('create user - '+ JSON.stringify(req.body));
    },
    // edit user
    update (req, res) {
        res.send('update user - '+ req.params.userId +' : '+ JSON.stringify(req.body));
    },
    // delete user
    remove (req, res) {
        res.send('remove user - '+ req.params.userId +' : '+ JSON.stringify(req.body));
    },
    // get user by id
    show (req, res) {
        res.send('watching user - '+ req.params.userId);
    }    
}