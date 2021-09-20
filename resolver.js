const User = require('./FriendMongooseSchema')
const resolvers = {
    Query : {
        author: (_,{id})=>{
            console.log(id)
            return User.findOne({_id:id})

        }
    },
    Mutation : {
        createFriend: (_,{input})=>{
            const user = new User(input)
            user.save();
            console.log(user)
            return user._id
        }
    }
}
module.exports = resolvers