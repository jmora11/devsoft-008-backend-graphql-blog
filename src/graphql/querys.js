const { GraphQLList, GraphQLID } = require("graphql");
const { User } = require("../models");
const { userType } = require("./types");

const allUsers = {
    type: new GraphQLList(userType),
    async resolve() {
        return await User.find();
    }
};

const oneUser = {
    type: userType,
    description: 'Get user by id',
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_, {id}) {
        return await User.findById(id);
    }
}

module.exports = {
    allUsers,
    oneUser
};
