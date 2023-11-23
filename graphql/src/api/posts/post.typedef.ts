export const postTypeDef = `#graphql
  type Post {
    id: ID!
    content: String
    users: [User!]!
  }

  type Query {
    posts: [Post!]!
    post(id: ID!): Post!
  }
`;
