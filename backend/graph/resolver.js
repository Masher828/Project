    // const clients = require('./index') 
    const User = require('../mongo/user')
    const crypto = require("crypto");
    const ResolverRoot = {
        Query: {
            getUser: async(_, { id }) => {
                console.log(id, "ji")
                return "Helo"
            },
        },
        Mutation: {
            addUser: (_, { input }) => {
                input["_id"] = crypto.randomBytes(16).toString("hex");
                const user = new User(input)
                user.save();
                console.log(user)
                return user._id
            },
        }
    }
    exports = module.exports = ResolverRoot;