require('dotenv').config();
const ObjectId = require('mongoose').Types.ObjectId;
const { getParksByState, getParksByName } = require('../utils/api.js');
const { AuthenticationError } = require('apollo-server-express');
const { User, Visit } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Returns multiple users with their visits
    users: async () => {
      return await User.find({}).populate('visits');
    },

    // Returns a single user with their visits

    user: async (_, { email }) => {
      return await User.findOne({ email }).populate('visits');
    },

    getParksByState: async (_, { state }) => {
      const response = await getParksByState(state);
      const data = response.data.data;
      return data;
    },

    getParksByName: async (_, { name }) => {
      const data = await getParksByName(name);
      return data.results;
    },
    // Returns all parks
    // games: async (_, { park }) => {
    //   const data = await getParks(park);
    //   return data.results;
    // },
  },
  Mutation: {
    // Creates a user
    addUser: async (_, args) => {
      const user = await User.create(args);
      // Creates a token for the user based of their info
      const token = signToken(user);
      // Returns the user info and their token
      return { token, user };
    },
    // Delete a user
    removeUser: async (_, { userId }) => {
      return await User.findOneAndDelete({ _id: userId });
    },
  },
};

module.exports = resolvers;
