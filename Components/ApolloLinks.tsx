import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";



//Hyperlink for the application
export const link = createHttpLink({
    uri: "http://localhost:4000/" //Husk bytt ut denne linken
  });
  
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });