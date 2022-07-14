import { gql } from '@apollo/client';

export const QUERY_COMMENTS = gql`
  query comments($username: String) {
    comments(username: $username) {
      _id
      commentText
      createdAt
      username
      
    }
  }
`;

export const QUERY_COMMENT  = gql`
  query comment($id: ID!) {
    thought(_id: $id) {
      _id
      thoughtText
      createdAt
      username
      
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      
      comments {
        _id
        commentText
        createdAt
        
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ART  = gql`
  query arts() {
    arts() {
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
`;

