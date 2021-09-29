const graphqlHTTP = require("express-graphql");

// graph deps
const ResolverRoot = require("../graph/resolver");
const GraphSchema = require("../graph/GraphSchema");
// var router = express.Router();
/**
 * To handle graphQL routes
 * */

const graphAPI = (req, res) => {
    graphqlHTTP.graphqlHTTP({
        schema: GraphSchema(),
        rootValue: ResolverRoot,
        graphiql: process.env.BUILD !== "production",
        customFormatErrorFn: err => {
            let [code, message] = err.message.split("$;$");
            if (message && message.length > 0)
                return {
                    code: code,
                    message: message
                };
            else if (process.env.BUILD !== "production")
                return {
                    code: "DEV_ERROR",
                    message: code
                };
            else {
                log.error("############## Printing REQUEST START ##############");
                log.error(req.body);
                log.error("############## Printing REQUEST END ##############")
                log.error(code, err);
                return {
                    code: "INTERNAL_ERROR",
                    message: "Internal Error!"
                };
            }
        }
    })(req, res);
}


module.exports = GraphQLController = (router) => {
    router.get("/graph-api", graphAPI);
    router.post("/graph-api", graphAPI);

};