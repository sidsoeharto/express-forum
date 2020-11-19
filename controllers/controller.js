class Controller {

  static showFrontPage(req, res) {
    res.render('home.ejs')
  }
}

module.exports = Controller