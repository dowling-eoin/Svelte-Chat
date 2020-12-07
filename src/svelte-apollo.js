import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: "http://localhost:4000/",
});


// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

export default apolloClient;