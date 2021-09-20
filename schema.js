var { makeExecutableSchema } = require("@graphql-tools/schema");
var resolvers = require('./resolver')
const typeDefs = `
type Query {
    friend : Friend
    author(id: ID):  Friend
}
    type Friend {
        id : ID
        firstName : String
        lastName : String
        gender : Gender
        email : [Email]
        contacts : [Contact]

    }

    type Contact {
        firstName : String
        lastName : String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Email {
        email : String
    }
    type Mutation{
        createFriend(input : FriendInput) : ID
    }

    input FriendInput {
        firstName : String
        lastName : String
        gender : Gender
        email : [EmailInput]
        contacts :[ContactInput]
    }

    input EmailInput{
        email : String
    }

    input ContactInput{
        firstName : String
        lastName : String
    }

    `;

var schema = makeExecutableSchema({typeDefs,resolvers})
module.exports = schema