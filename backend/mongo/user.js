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
    name: {
      type: String,
      required: true,
      }
  });

  

  const User = mongoose.model("User", UserSchema);

  module.exports = User;
