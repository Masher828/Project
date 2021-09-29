const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");
const { join } = require("path");
/**
 * The schema for graph ql nodes
 * */

const compile = () => {
    return buildSchema(readFileSync(join(__dirname, "schema.graphql")).toString());
}
module.exports = compile;