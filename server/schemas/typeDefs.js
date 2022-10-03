const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    posts: [Post]
    friends: [User]
  }

  type Post {
    _id: ID
    createdAt: String
    username: String
    rank: String
    platform: String
    hours: String
    comms: String
    commentCount: Int   
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }



  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String
      rank: String
      platform: String
      hours: String
      comms: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(postId: ID!, commentBody: String!): Post
    addPost(postId: ID!, rank: String!, platform: String!, hours: String!, comms: String!): Post
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
