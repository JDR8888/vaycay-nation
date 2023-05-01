import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($username: ID!, $email: String!, $password: String!, $name: String!, $avatar: String!) {
    addUser(username: $username, email: $email, password: $password, name: $name, avatar: $avatar) {
      user {
        name
        email
      }
      token
    }
  }`;


  export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;