    // const clients = require('./index')
    const crypto = require("crypto");
    const resolvers = {
        Query: {
            author: (_, { id }) => {
                console.log(id)
                return User.findOne({ _id: id })

            },
            // sendMessage: (_, { data, metadata }) => {
            //     console.log(data, metadata)

            //     // clients.client.get('12345678').send("New Message By Manish")
            //     return true
            // }
        },
        Mutation: {
            // addUser: (_, { input }) => {
            //     input["_id"] = crypto.randomBytes(16).toString("hex");
            //     const user = new User(input)
            //     user.save();
            //     console.log(user)
            //     return user._id
            // },
            // sendMessage: (_, { input }) => {
            //     input["_id"] = crypto.randomBytes(16).toString("hex");
            //     const message = new Message(input)
            //     message.save();
            //     return message._id
            // }
        }
    }
    module.exports = resolvers;