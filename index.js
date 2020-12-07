const { ApolloServer, MockList, gql } = require('apollo-server');
const faker = require('faker');

const mocks = {
    Query: () => ({
        allComments: () => new MockList(5)
    }),
   // Int: () => 6,
   // String: () => faker.hacker.phrase(),

    Comment: () => ({
        text: () => faker.hacker.phrase(),
        name: () => faker.name.firstName(),
        date: () => faker.date.past(),
        time: () => faker.time.recent(),
        avatar: () => faker.image.avatar()

    })
};

const typeDefs = gql`
type Comment {
name: String!,
date: String!,
time: String!,
text: String!
avatar: String
}
  type Cat {
  id: ID!
  name: String!
  age: Int!
  nice: Boolean
}
type Horse {
  id: ID!
  name: String!
  netWorth: Float!
  description: String
}
type Query {
  allCats: [Cat!]!
  allHorses: [Horse!]!
  allComments: [Comment!]
}
`;
const server = new ApolloServer({
    typeDefs,
    mocks
});

server.listen().then(({ url }) => console.log(`Server running on ${url}`));



