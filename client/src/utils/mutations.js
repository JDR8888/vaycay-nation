import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($username: ID!, $email: String!, $password: String!, $name: String!) {
    addUser(username: $username, email: $email, password: $password, name: $name) {
      user {
        name
        email
      }
      token
    }
  }`;

  