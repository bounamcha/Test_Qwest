
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    first_name: {
     type: String,
 
    },
    last_name: {
      type: String,
   
    },
    email: {
      type: String,
 
    },
    password: {
      type: String,
  
    },
    address:{
        type:String
    }
}); 

UserSchema.pre('save' , function  (next) {

    bcrypt.genSalt(10, (err,salt)=> {
        if(err) { 
            return next(err);
        }
        // Use this salt    value to   hash password
        bcrypt.hash(this.password,salt,(err,hash) => {
            if(err) {
                return next(err);
            }
        this.password = hash; 
        next();
        })
    })
})


//Custom method to check the password correct when login
UserSchema.methods.isPasswordMatch = function(plainPassword, hashed, callback) {
    bcrypt.compare(plainPassword, hashed, (err, isMatch) => {
      if (err) {
        return callback(err);
      }
      callback(null, isMatch);
    });
  }

const User = mongoose.model('User', UserSchema);
module.exports= User ;