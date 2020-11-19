const express = require('express')
const router = require('./routes/index')
const auth = require('./routes/authorization')
const passport = require("passport")

const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  res.locals.isauth = req.isAuthenticated();
  next();
});

app.use(auth)
app.use(router)

passport.serializeUser(function (user_id, done) {
  done(null, user_id);
});
passport.deserializeUser(function (user_id, done) {
  done(null, user_id);
});

app.listen(port, () => {
  console.log(`This App is running on port: ${port}`)
})