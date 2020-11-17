import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache()

//Hyperlink for the application
export const client = new ApolloClient({
  uri: 'http://localhost:4000/', //Husk å sjekk denne 
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});