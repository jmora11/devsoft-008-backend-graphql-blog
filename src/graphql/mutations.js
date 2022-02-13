const { GraphQLString } = require('graphql');
const { User, Post } = require('../models');
const { createJWTToken } = require('../utils/auth');
const { postType } = require("./types");

const register = {
    type: GraphQLString,
    description: 'Register a new user',
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        displayName: { type: GraphQLString }
    },
    async resolve(_, args) {
        const { username, email, password, displayName } = args;
        const user = new User({username, email, password, displayName});
        await user.save();

        return createJWTToken({
            id: user._id,
            username:user.username,
            email:user.email,
            displayName: user.displayName
        });
    }
};

const login = {
    type: GraphQLString,
    description: 'Login to a new user and returns JWT',
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(_, args) {
        const user = await User.findOne({email: args.email}).select('+password');
        if(!user || args.password !== user.password) throw new Error('Invalid credentials');

        return createJWTToken({
            id: user._id,
            username:user.username,
            email:user.email,
            displayName: user.displayName
        });
    }
};

const createPost = {
    type: postType,
    description: 'Create a new post',
    args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString },
    },
    async resolve(_, args) {
        new Post({
            title: args.title,
            body: args.title,
            authorId: ''
        });
        return
    }
}

module.exports = {
    register,
    login,
    createPost
};
