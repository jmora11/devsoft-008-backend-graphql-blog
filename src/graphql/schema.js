const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { register, login, createPost } = require('./mutations');
const { allUsers, oneUser } = require('./querys');

const queryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Root query type',
    fields: {
        allUsers,
        oneUser
    }
});

const mutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'Root mutation type',
    fields: {
        register,
        login,
        createPost
    }
});

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType
});

module.exports = schema;