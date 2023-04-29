// const resolvers = {
//   Query: {
//     users: async () => {
//       return [
//         {
//           _id: 'asdioufo9a8rtjaod8iosmf',
//           username: 'Mork',
//           email: 'mork@nanoo.org',
//           password: 'youllneverguess',
//         },
//       ];
//     },
//   },
// };

// module.exports = resolvers;
require('dotenv').config();
// const ObjectId = require('mongoose').Types.ObjectId;
const { fetchParks, fetchPark } = require('../utils/api.js');
// const { AuthenticationError } = require('apollo-server-express');
// const { User } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Returns all parks
    parks: async (_, { park }) => {
      const data = await fetchParks(park);
      return data.results;
    },

    // Returns a park
    park: async (_, { parkId }) => {
      const data = await fetchPark(parkId);
      return data;
    },
  },
};

module.exports = resolvers;
