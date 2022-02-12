const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { register } = require('./mutations');

const queryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Root query type',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => {
                'Hello word'
            }
        }
    }
});

const mutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'Root mutation type',
    fields: {
        register
    }
});

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType
});

module.exports = schema;