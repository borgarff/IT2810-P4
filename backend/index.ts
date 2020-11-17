import { ApolloServer } from "apollo-server";
import fetch from "node-fetch";


//Definging Querys
const typeDefs = `
  type Query {
    stopPlace(id: String!): stopPlace
    features(name: String!): [features]
  }

  type features{
    properties: properties
  }

  type properties {
    id: String
    name: String
    county: String
    locality: String
  }

  type stopPlace {
    id: String
    name: String
    estimatedCalls: [estimatedCalls]
  }

	type estimatedCalls {
		realtime: Boolean
		aimedArrivalTime: String
    aimedDepartureTime: String
    expectedArrivalTime: String
    expectedDepartureTime: String
    date: String
    destinationDisplay: destinationDisplay
    serviceJourney: serviceJourney
  }
  
  type destinationDisplay {
    frontText: String
  }

  type serviceJourney {
    journeyPattern: journeyPattern
  }

  type journeyPattern {
    line: line
  }

  type line {
    name: String
    transportMode: String
    publicCode: Int
  }
`;



// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    stopPlace: async (_root:any, id:string) => {
      id = JSON.stringify(id);
      id = id.replace('{"id":"', '');
      id = id.replace('"}', '');
      try {
        //Trying to fetch with POST from the API
        const results = await fetch(
          `https://api.entur.io/journey-planner/v2/graphql`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "ET-Client-Name":
                "prosjektoppgave_studenter_ved_NTNU - prosjektoppgave3"
            },
            body: JSON.stringify({
              query:
                '{stopPlace(id:"' +
                id +
                '"){id name estimatedCalls(timeRange:72100 numberOfDepartures:10){realtime aimedArrivalTime aimedDepartureTime expectedArrivalTime expectedDepartureTime date destinationDisplay{frontText}serviceJourney{journeyPattern{line{name transportMode publicCode}}}}}}'
            })
          }
        );
        //Converting result into json format
        const stopplaceData = await results.json();
        
        return stopplaceData.data.stopPlace;
      } catch (e) {
        console.error(e);
      }
    },
    features: async (_root:any, name:string) => {
      name = JSON.stringify(name);
      name = name.replace('{"name":"', '');
      name = name.replace('"}', '');
      try {
        //Trying to fetch with GET from API
        const results = await fetch(
          `https://api.entur.io/geocoder/v1/autocomplete?text=`+name+`&size=5&lang=no`
        );

        //Getting json information from results
        const placeData = await results.json();

        return placeData.features;
      } catch (e) {
        console.log(e);
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(( url ) => {
  console.log(`🚀 Server ready at http://localhost:4000/`);
});
