const { Subforum, Post } = require('../models/index')

class SubforumController {

  static showAllSubforums(req, res) {
    Subforum.findAll()
    .then(data => {
      res.render('subforums.ejs', {data})
    })
    .catch(err => {
      res.send(err)
    })
    
  }

  static showSubforum(req, res) {
    const subforum = req.params.subforum
    Post.findAll({
      where: {
        name: subforum
      }
    })
    res.render('subforum-page.ejs', {data})
  }

  static getPost(req, res) {
    
  }
}

module.exports = SubforumController