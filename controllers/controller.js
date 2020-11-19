const { Post, User, Subforum } = require('../models/index')

class Controller {

  //show front page
  //show all post data sort by new
  //show all post data sort by votes(?)
  
  static showFrontPage(req, res) {
    Post.findAll({
      include: [
        {
          model: User
        },
        {
          model: Subforum
        }
      ]
    })
    .then(posts => {
      //res.send(posts)
      res.render('home.ejs', {posts})
    })
    .catch(err => {
      res.send(err)
    })
    
  }

  static showLoginPage(req, res) {
    res.render('auth_login.ejs')
  }

  static showRegisterPage(req, res) {
    res.render('auth_register.ejs')
  }
}

module.exports = Controller