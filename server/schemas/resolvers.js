require('dotenv').config();
const ObjectId = require('mongoose').Types.ObjectId;
const { getParksByState, getParksByName } = require('../utils/api.js');
const { AuthenticationError } = require('apollo-server-express');
const { User, Visit } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  Query: {
   
    users: async () => {
      return await User.find({}).populate('visits');
    },

    user: async (_, { email } ) => {
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
    }


  },


};

module.exports = resolvers;
