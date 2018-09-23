const passport = require('passport')
const router = require('express').Router()
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const GoodreadsStrategy = require('passport-goodreads').Strategy
// const {User} = require('../db/models')
module.exports = router

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */

if (!process.env.GOODREADS_KEY || !process.env.GOODREADS_SECRET) {
  console.log('Google client ID / secret not found. Skipping GoodreadsOAuth.')
} else {
  const goodReadsConfig = {
    consumerKey: process.env.GOODREADS_KEY,
    consumerSecret: process.env.GOODREADS_SECRET,
    callbackURL: process.env.GOODREADS_CALLBACK
  }

  const strategy = new GoodreadsStrategy(
    goodReadsConfig,
    // {
    //   consumerKey: GOODREADS_KEY,
    //   consumerSecret: GOODREADS_SECRET,
    //   callbackURL: 'http://127.0.0.1:3000/auth/goodreads/callback'
    // },
    (token, tokenSecret, profile, done) => {
      // (token, refreshToken, profile, done) => {
      console.log(token, profile)
      const goodreadsId = profile.id
      const name = profile.displayName
      const email = profile.email

      User.findOrCreate({
        where: {goodreadsId},
        defaults: {name, email}
      })
        // User.findOrCreate({goodreadsId: profile.id})

        .then(([user]) => done(null, user))
        .catch(done)
    }
  )
  passport.use(strategy)
  // const strategy = new GoogleStrategy(
  //   googleConfig,
  //   (token, refreshToken, profile, done) => {
  //     const goodReadsId = profile.id
  //     const name = profile.displayName
  //     const email = profile.emails[0].value

  //     User.findOrCreate({
  //       where: {goodReadsId},
  //       defaults: {name, email}
  //     })
  //       .then(([user]) => done(null, user))
  //       .catch(done)
  //   }
  // )

  // passport.use(strategy)

  router.get('/auth/goodreads', passport.authenticate('goodreads'))

  router.get(
    '/auth/goodreads/callback',
    passport.authenticate('goodreads', {
      successRedirect: '/home',
      failureRedirect: '/login'
    }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/')
    }
  )
  // router.get('/', passport.authenticate('goodreads', {scope: 'email'}))

  // router.get(
  //   '/callback',
  //   passport.authenticate('goodreads', {
  //     successRedirect: '/home',
  //     failureRedirect: '/login'
  //   })
  // )
}
