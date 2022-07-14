import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      commentText
      createdAt
      username
      
    }
  }
`;
export const ADD_ART = gql`
  mutation addArt($artistAlphaSort: String,
    $title: String,
    $objectId: String,
    $primaryImage: String) {
    addArt(artistAlphaSort:$artistAlphaSort ,
        title:$title,
        objectId: $objectId,
        primaryImage: $primaryImage ) {
            _id
            artistAlphaSort
            title
            objectId
            primaryImage
            comments{
                _id
                commentText
                createdAt
                username
                
            }
      
    }
  }
`;


