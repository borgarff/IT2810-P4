import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";



//Hyperlink for the application
export const link = createHttpLink({
    uri: "https://mpjk0plp9.lp.gql.zone/graphql" //Husk bytt ut denne linken
  });
  
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });