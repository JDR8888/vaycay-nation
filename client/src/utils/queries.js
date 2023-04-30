import { gql } from '@apollo/client';

export const GET_PARKS_BY_STATE = gql`
  query GetParksByState($state: String) {
    getParksByState(state: $state) {
      fullName
      weatherInfo
      id
      description
      images {
        url
        altText
      }
      latitude
      longitude
      operatingHours {
        description
      }
    }
  }
`;

export const GET_PARKS_BY_NAME = gql`
  query GetParksByName($name: String) {
    getParksByName(name: $name) {
      fullName
      description
      images {
        url
        altText
      }
      id
      latitude
      longitude
      weatherInfo
      operatingHours {
        description
      }
    }
  }
`;
