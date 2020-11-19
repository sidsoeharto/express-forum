const express = require('express')
const bcrypt = require('bcrypt')
const validator = require("validator");
const router = express.Router()

const { User } = require('../models/index')

router.get("/logout", function (req, res) {
  console.log(`${req.session.user} has logged out`)

  req.session.destroy()
  res.redirect("/login")
});

router.get("/register", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/')
  } else {
    res.render('auth_register.ejs')
  }
})

router.post("/register", validateRegister(), (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) throw err

    const newUser = {
      username: req.body.username,
      password: hash,
    }

    User.create(newUser)
    .then(doc => {
      req.login(doc.id)
      req.session.user = req.body.username
      console.log(`${req.session.user} has registered`)
      res.redirect('/')
    })
    .catch(error => {
      res.send(error)
    })
  })
})

router.get("/login", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/")
  } else {
    res.render("auth_login")
  }
})

router.post("/login", (req, res) => {
  req.body.username = req.body.username.toLowerCase()
  req.body.password = req.body.password.toLowerCase()

  User.findOne({
    where:{
      username: req.body.username
    }
  })
  .then(doc => {
    if(!doc.length) {
      res.render('auth_login')
    } else {
      bcrypt.compare(req.body.password, doc[0].password, (err, result) => {
        if(err) throw err

        if(result == true) {
          req.login(doc[0].id, (err) => {
            if (err) throw err;
            req.session.user = req.body.username

            console.log(`${req.session.user} has logged in`)
            res.redirect('/')
          })
        }
      })
    }
  })
  .catch(err => {
    res.send(err)
  })
})

function validateRegister() {
  return function (req, res, next) {
    // make input not case sensitive
    req.body.username = req.body.username.toLowerCase();
    req.body.password = req.body.password.toLowerCase();

    if (
      validator.isAlphanumeric(req.body.username)
    ) {
      console.log("authentication = " + req.isAuthenticated());
      return next();
    }
    res.render("auth_register")
  }
}

module.exports = router;