export const userTypeDef = `#graphql
  type User {
    id: ID!
    username: String!
    email: String!
  }
  
  type Query {
    users: [User!]!
    user: User!
  }
`;
