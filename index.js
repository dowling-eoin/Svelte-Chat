const { ApolloServer, MockList, gql } = require('apollo-server');
const faker = require('faker');

const mocks = {
    Query: () => ({
        allComments: () => new MockList(2)
    }),

    Comment: () => ({
        id: () => faker.random.uuid(),
        text: () => faker.hacker.phrase(),
        name: () => faker.name.firstName(),
        date: () => faker.time.recent(),
        avatar: () => faker.image.image()
    }),
};

const typeDefs = gql`
type Comment {
id: String!,
name: String!,
date: String!,
text: String!,
avatar: String
}
type Query {
  allComments: [Comment!]
}
`;
const server = new ApolloServer({
    typeDefs,
    mocks
});

server.listen().then(({ url }) => console.log(`Server running on ${url}`));



