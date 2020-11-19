const { Subforum, Post } = require('../models/index')

class PostController {

  static showCreatePost(req, res) {
    Subforum.findAll()
    .then(data => {
      res.render('post.ejs',{dataSubforum:data})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createPost(req, res) {
    const newPost = {
      title: req.body.title,
      votes: 0,
      content: req.body.content,
      SubforumId: req.body.SubforumId
    }

    Post.create(newPost)
    .then(data => {
      res.redirect('/')
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = PostController