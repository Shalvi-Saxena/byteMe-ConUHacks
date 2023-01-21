require("dotenv").config();
const passport = require('passport');
const { Strategy, ExtractJwt } = require("passport-jwt");
const { User } = require("../models");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
options.secretOrKey = process.env.JWT_SECRET;

const Authenticate = (req, res, next) => {
  
};

// const Authenticate = (req, res, next) => {
//   console.log('here')
//   passport.authenticate('jwt', { session: false }, async (error, token) => {
//     console.log(token)
//     if (error || !token) {
//       res.status(401).json({ message: 'Unauthorized!' });
//     }
//     try {
//       if (token.expires < Date.now()) {
//         res.status(401).json({ message: 'Token Expired!' }); 
//       }
//       const userData = await User.findbyId(token.user.id);
//       if (!userData) {
//         res.status(401).json({ message: 'Invalid token!' }); 
//       }
//       req.user = userData;
//     } catch (error) {
//       next(error);
//     }
//     next();
//   });
// };

module.exports = (passport) => {
  passport.use(
    new Strategy(options, (payload, done) => {
      if(payload.expires <= Date.now()) {
        return done(new Error("Token Expired"), null);
      } 
      User.findById(payload.userData._id)
        .then((user) => {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch((err) => {
          console.log("Error in passport.js", err);
        });
    })
  )
};
