const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  { ObjectId } = mongoose.Schema.Types;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    countryCode: {
      type: String,
    },
    number: {
      type: String,
    },
  },
  settings: {
    type: Object,
  },
}, {
  timestamps: true
});

UserSchema.pre('save', function (next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = async function (password) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, function (err, isMatch) {
      if (err) {
        reject(err);
      }
      resolve(isMatch);
    });
  });
};

module.exports = mongoose.model('User', UserSchema, 'users');