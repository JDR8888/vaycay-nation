const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    username: String
    email: String
    password: String

    visited: [Visit]
    wishlist: [ParkId]
  }

  type ParkID {
    ParkId: Int
  }

  type Park {
    id: Int
    fullName: String
    images: [ImageObj]
    id: String
    lat: Int
    lon: Int
    weatherInfo: String
    operatingHours: [operatingHoursObj]
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

  type Query {
    users: [User]
    user(email: String!): User
    parks(park: String): [Park]
    park(parkId: String!): Park
    visits(user: String): [Visit]
    visit(visitId: ID!): Visit
  }

    type Mutation {
      addUser(userName: ID!, email: String!, password: String!, name: String!): Auth
      addVisit(
        park: String!
        user: ID!
        review: String
      ): Visit
      login(email: String!, password: String!): Auth
      updateUser(
        userId: ID!
        username: String
        email: String
        password: String
        ): User
      updateVisit(
        visitId: ID!
        review: String
      ): Visit
      addToWishlist(userId: ID!, parkId: String!): User
      removeFromWishlist(userId: ID!, parkId: Int!): User
      removeUser(userId: ID!): User
      removeVisit(visitId: ID!): Visit
    }
  `;

module.exports = typeDefs;



// type Park {
//   total: string;
//   data: {
//     activities: {
//       id: string
//       name: string
//     }[];
//     addresses: {
//       postalCode: string;
//       city: string;
//       stateCode: string;
//       line1: string;
//       type: 'Physical' | 'Mailing';
//       line3?: string;
//       line2?: string;
//     }[];
//     contacts: {
//       description: string;
//       phoneNumbers: {
//         phoneNumber: string;
//         description: string;
//         extension?: string;
//         type: string[];
//       }[];
//       emailAddresses: {
//         emailAddress: string;
//         description: string;
//       }[];
//     };
//     description: string;
//     designation: string;
//     directionsInfo: string;
//     directionsUrl: string;
//     entranceFees?: {
//       cost: string;
//       description: string;
//       title: string;
//     }[];
//     entrancePasses?: {
//       cost: string;
//       description: string;
//       title: string;
//     }[];
//     fullName: string;
//     id: string;
//     images: {
//       credit?: string;
//       altText?: string;
//       title?: string;
//       caption?: string;
//       url: string;
//     }[];
//     name: string;
//     operatingHours: {
//       name: string;
//       description?: string;
//       standardHours: {
//         sunday: string;
//         monday: string;
//         tuesday: string;
//         wednesday: string;
//         thursday: string;
//         friday: string;
//         saturday: string;
//       };
//       exceptions?: {
//         name: string;
//         startDate: string;
//         endDate: string;
//         exceptionHours: {
//           sunday?: string;
//           monday?: string;
//           tuesday?: string;
//           wednesday?: string;
//           thursday?: string;
//           friday?: string;
//           saturday?: string;
//         };
//       }[];
//     }[];
//     parkCode: string;
//     states: string;
//     topics: any[];
//     url: string;
//     weatherInfo: string;
//   }[];
//   limit: string;
//   start: string;
// };

