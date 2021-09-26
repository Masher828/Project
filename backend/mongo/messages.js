const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    _id:{
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    timestamps : {
        type : String,
        required : true
    },
    from : {
        type : mongoose.Schema.Types.ObjectId
    },
    to:{
        type : mongoose.Schema.Types.ObjectId
    }
  });

  const Message = mongoose.model("Message", MessageSchema);
  
  module.exports = Message;
