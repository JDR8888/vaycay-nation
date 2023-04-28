const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    users: [User]
  }

  type Park = {
    total: string;
    data: {
      activities: {
        id: string;
        name: string;
      }[];
      addresses: {
        postalCode: string;
        city: string;
        stateCode: string;
        line1: string;
        type: 'Physical' | 'Mailing';
        line3?: string;
        line2?: string;
      }[];
      contacts: {
        description: string;
        phoneNumbers: {
          phoneNumber: string;
          description: string;
          extension?: string;
          type: string[];
        }[];
        emailAddresses: {
          emailAddress: string;
          description: string;
        }[];
      };
      description: string;
      designation: string;
      directionsInfo: string;
      directionsUrl: string;
      entranceFees?: {
        cost: string;
        description: string;
        title: string;
      }[];
      entrancePasses?: {
        cost: string;
        description: string;
        title: string;
      }[];
      fullName: string;
      id: string;
      images: {
        credit?: string;
        altText?: string;
        title?: string;
        caption?: string;
        url: string;
      }[];
      name: string;
      operatingHours: {
        name: string;
        description?: string;
        standardHours: {
          sunday: string;
          monday: string;
          tuesday: string;
          wednesday: string;
          thursday: string;
          friday: string;
          saturday: string;
        };
        exceptions?: {
          name: string;
          startDate: string;
          endDate: string;
          exceptionHours: {
            sunday?: string;
            monday?: string;
            tuesday?: string;
            wednesday?: string;
            thursday?: string;
            friday?: string;
            saturday?: string;
          };
        }[];
      }[];
      parkCode: string;
      states: string;
      topics: any[];
      url: string;
      weatherInfo: string;
    }[];
    limit: string;
    start: string;
  };
  
`;

module.exports = typeDefs;
