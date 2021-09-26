const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");
const { join } = require("path");
/**
 * The schema for graph ql nodes
 * */

  const compile = () => {
    readFileSync(join(__dirname, "schema.graphql")).toString();
    return buildSchema(this.types);
  }
 
  const schema = () => {
    if (!GraphSchema._compiledSchema)
      GraphSchema._compiledSchema = new GraphSchema().compile();
    return GraphSchema._compiledSchema;
  }

  module.exports = schema;