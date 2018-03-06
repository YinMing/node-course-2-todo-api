var mongoose = require('mongoose');
//make a user model (email, pwd)
//email - require it - trim it - set type - set min length of 1
var User = mongoose.model('User',{
  email:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  password:{
    type: String,
    required: true,
    minlength: 6
  }
});

// var user = new User({
//   email: 'apluskei@gmail.com'
// });
//
// user.save().then((doc)=>{
//   console.log('User saved', doc);
// },(e)=>{
//   console.log('Unable to save user', e);
// });
module.exports = {User};
