const {Comment} = require('../models')

module.exports = {
    // get all comment
    async index (req, res) {
        try {
            const comments = await Comment.findAll()
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
    async update (req, res) {
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
            const comment = await Comment.findOne({
                where: {
                    id: req.params.commentId
                }
            })
            
            if (!comment) {
                return res.status(403).send({
                    error: 'the comment information was correct not found'
                })
            }

            await comment.destroy()
            res.send(comment)
        } catch (err) {
            req.status(500).send({
                error: 'The comment information was incorrect by remove'
            })
        }
    },

    // get blog by id
    async show(req, res) {
        try {
            const comment = await Comment.findByPk(req.params.commentId)
            res.send(comment)
        } catch (err) {
            res.status(500).send({
                error: 'the comment information was correct by id'
            })
        }
    }

} 