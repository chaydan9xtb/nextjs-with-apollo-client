const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    username: String
    password: String
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    addUser(username: String!, password: String!): User
    updateUser(id: String!, username: String!, password: String!): User
  }
`;

module.exports = typeDefs;
