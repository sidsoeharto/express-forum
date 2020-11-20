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

  static showEditPost(req, res) {
    const id = Number(req.params.id)
    let dataSubforum;
    Subforum.findAll()
    .then(data => {
      dataSubforum = data;
      return Post.findByPk(id)
    })
    .then(data => {
      res.render("postedit.ejs",{data, dataSubforum})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static editPost(req, res) {
    const id = Number(req.params.id)

    const editPost = {
      title: req.body.title,
      content: req.body.content,
      SubforumId: req.body.SubforumId
    }

    Post.update(editPost, {
      where:{
        id: id
      }
    })
    .then(data => {
      res.redirect('/')
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deletePost(req,res) {
    const id = Number(req.params.id)

    Post.destroy({
      where: {
        id: id
      }
    })
    .then(data => {
      res.redirect('/')
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = PostController