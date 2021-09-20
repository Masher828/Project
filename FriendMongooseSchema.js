const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    firstName: {
        type : String
    },
    lastName :{
        type :String
    }
})

const EmailSchema = new mongoose.Schema({
    email :{
        type : String
    }
})

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    },
  lastName:{
    type: String,
    required: true,
    },
  gender: {
    type: String,
    enum : ["MALE", "FEMALE", "OTHER"]
    },
  email : {
      type : [EmailSchema],
    },
  contacts:{
      type : [ContactSchema]
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;