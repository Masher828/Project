const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema({
    id : {
        type : String,
        required : true
    }
});
const UserSchema = new mongoose.Schema({
    _id:{
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
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
    contacts : {
        type : [ContactSchema]
    }
  });

  

  const User = mongoose.model("User", UserSchema);

  module.exports = User;
