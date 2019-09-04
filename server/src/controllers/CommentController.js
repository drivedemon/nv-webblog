const {Comment} = require('../models')

module.exports = {
    // get all comment
    async index (req, res) {
        try {
            const comments = await Comment.finlAll()
            res.send(comments)
        } catch (err) {            
            res.status(500).send({
                error: 'the comments information was correct'
            })
        }
    },

    // create comment
    async create (req, res) {
        try {
            const comment = await Comment.create(req.body)
            res.send(comment.toJSON())
        } catch (err) {            
            res.status(500).send({
                error: 'Create comment incorrect'
            })
        }
    },

    // edit comment, suspend, active
    async put (req, res) {
        try {
            await Comment.update(req.body, {
                where: {
                    id: req.params.commentId
                }
            })
            res.send(req.body)
        } catch (err) {
            req.status(500).send({
                error: 'Update comment incorrect'
            })
        }
    },

    // delete comment
    async remove (req, res) {
        try {

        } catch (err) {
            req.status(500).send({
                error: 'The comment information was incorrect'
            })
        }
    }
} 