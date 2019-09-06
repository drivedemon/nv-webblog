const {Blog} = require('../models')

module.exports = {
    // get all blog
    async index(req, res) {
        try {
            const blogs = await Blog.findAll()
            res.send(blogs)
        } catch (err) {
            res.status(500).send({
                error: 'the blogs information was correct'
            })
        }
    },

    // create blog
    async create(req, res) {
        try {
            const blog = await Blog.create(req.body)
            res.send(blog.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'create blog correct'
            })
        }
    },
    
    // edit blog,suspend,active 
    async update(req, res) {
        try {
            await Blog.update(req.body, {
                where: {
                    id: req.params.blogId
                }
            })                
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update blog correct'
            })
        }
    },
    
    // delete blog
    async remove(req, res) {
        try {
            const blog = await Blog.findOne({
                where: {
                    id: req.params.blogId
                }
            })
            
            if (!blog) {
                return res.status(403).send({
                    error: 'the blogs information was correct'
                })
            }

            await blog.destroy()
            res.send(blog)
        } catch (err) {
            res.status(500).send({
                error: 'the blogs information was correct'
            })
        }
    },
    
    // get blog by id
    async show(req, res) {
        try {
            const blog = await Blog.findByPk(req.params.blogId)
            res.send(blog)
        } catch (err) {
            res.status(500).send({
                error: 'the blogs information was correct by id'
            })
        }
    },

    // get myblog by id
    async myblog(req, res) {
        try {
            const blog = await Blog.findAll({
                where: {
                    userId: req.params.userId
                }
            })
            res.send(blog)
        } catch (err) {
            res.status(500).send({
                error: 'the blogs information was correct by id'
            })
        }
    }
}
