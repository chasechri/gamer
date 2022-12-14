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
    rank: String
    platform: String
    hours: String
    voiceChat: String
    createdAt: String
    username: String
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
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(rank: String!): Post
    editPost(
      rank: String!
      platform: String!
      hours: String!
      voiceChat: String!
    ) : Post
    deletePost(postId: ID!): Post
    addComment(postId: ID!, commentBody: String!): Post
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
