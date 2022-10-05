const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    cards: [Card]
    friends: [User]
    cardInfo: [CardInfo]
  }

  type CardInfo {
    _id: ID
    username: String
    rank: String
    platform: String
    hours: String
    voiceChat: String
  }

  type Card {
    _id: ID
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
    cards(username: String): [Card]
    card(_id: ID!): Card
    cardInfo (username: String): [CardInfo]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCard(rank: String!): Card
    addComment(cardId: ID!, commentBody: String!): Card
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;