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
    postText: String
    createdAt: String
    username: String
    commentCount: Int   
    profiles: [Profile]
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Profile {
    _id: ID
    gamertag: String
    rank: String
    platform: String
    hours: String
    comms: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
    addProfile(postId: ID!, gamertag: String!, rank: String!, platform: String!, hours: String!, comms: String!): Post
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
