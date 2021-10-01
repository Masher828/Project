// const clients = require('./index') 
const User = require('../mongo/user')
const mongoose = require('mongoose');
const Message = require('../mongo/messages');
    const ResolverRoot = {
        Query: {
            getUser: (_, { id }) => {
                return User.findById({"_id":id})
            },
            getMessage: (_,{id})=>{
                return Message.findById({"_id":id})
            }
        },
        Mutation: {
            addUser: (_, { input }) => {

                input["_id"] = new mongoose.Types.ObjectId();
                new User(input).save()
                return input["_id"]
            },
            sendMessage: (_, {input})=>{
                input["_id"] = new mongoose.Types.ObjectId();
                new Message(input).save()
                return input["_id"]

            }
        }
    }
    exports = module.exports = ResolverRoot;