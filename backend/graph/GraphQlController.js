const graphqlHTTP = require("express-graphql");

// graph deps
const ResolverRoot = require("../graph/resolver");
const GraphSchema = require("../graph/GraphSchema");
// var router = express.Router();
/**
 * To handle graphQL routes
 * */

const GraphQLController = (router) =>
{
     router.get("/graph-api", this.graphAPI);
 router.post("/graph-api", this.graphAPI);
 const graphAPI=(req, res)=>{
    graphqlHTTP({
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
  };
}

module.exoports = GraphQLController;