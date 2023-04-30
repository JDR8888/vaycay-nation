const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    username: String
    email: String
    password: String

    visited: [Visit]
    wishlist: [Park]
  }

  type Park {
    fullName: String
    images: [ImageObj]
    id: String
    latitude: String
    longitude: String
    weatherInfo: String
    operatingHours: [operatingHoursObj]
    description: String
  }

  type ImageObj {
    url: String
    altText: String
  }

  type operatingHoursObj {
    description: String
  }

  type Visit {
    _id: ID
    park: String
    parkData: Park
    user: User
    review: String
  }

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    users: [User]
    user(email: String!): User
    getParksByState(state: String): [Park]
    getParksByName(name: String): [Park]
    park(parkId: String!): Park
    visits(user: String): [Visit]
    visit(visitId: ID!): Visit
  }

  type Mutation {
    addUser(
      username: ID!
      email: String!
      password: String!
      name: String!
    ): Auth
    addVisit(park: String!, user: ID!, review: String): Visit
    login(email: String!, password: String!): Auth
    updateUser(
      userId: ID!
      username: String
      email: String
      password: String
    ): User
    updateVisit(visitId: ID!, review: String): Visit
    addToWishlist(userId: ID!, parkId: String!): User
    removeFromWishlist(userId: ID!, parkId: Int!): User
    removeUser(userId: ID!): User
    removeVisit(visitId: ID!): Visit
  }
`;

module.exports = typeDefs;
