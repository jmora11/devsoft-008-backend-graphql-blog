const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const userType = new GraphQLObjectType({
    name: 'UserType',
    description: 'Tipo de dato Usuario',
    fields: {
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString }
    }
});

const postType = new GraphQLObjectType({
    name: 'PostType',
    description: 'Tupo de publicación',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        authorId: { type: GraphQLID }
    }
});

module.exports = {
    userType,
    postType
};
