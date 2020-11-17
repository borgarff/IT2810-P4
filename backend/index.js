const { ApolloServer } = require("apollo-server");
const fetch = require("node-fetch");
//const stopPlaces = require('data');

const stopPlaces = [
  {
      id: "NSR:StopPlace:60066",
      name: "Trondheim hurtigbåtterminal",
      estimatedCalls: [
          {
          realtime: true,
          aimedArrivalTime: "2020-11-17T22:46:00+0100",
          aimedDepartureTime: "2020-11-17T22:46:00+0100",
          expectedArrivalTime: "2020-11-17T22:46:00+0100",
          expectedDepartureTime: "2020-11-17T22:46:00+0100",
          date: "2020-11-17",
          destinationDisplay: {
              frontText: "Vikåsen via Singsaker"
          },
          serviceJourney: {
              journeyPattern: {
              line: {
                  name: "Vikåsen- Strindheim- Singsaker",
                  transportMode: "bus"
              }
              }
          }
          },
          {
          realtime: true,
          aimedArrivalTime: "2020-11-17T23:06:00+0100",
          aimedDepartureTime: "2020-11-17T23:06:00+0100",
          expectedArrivalTime: "2020-11-17T23:06:00+0100",
          expectedDepartureTime: "2020-11-17T23:06:00+0100",
          date: "2020-11-17",
          destinationDisplay: {
              frontText: "Vikåsen via Singsaker"
          },
          serviceJourney: {
              journeyPattern: {
              line: {
                  name: "Vikåsen- Strindheim- Singsaker",
                  transportMode: "bus"
              }
              }
          }
          },
          {
          realtime: true,
          aimedArrivalTime: "2020-11-17T23:26:00+0100",
          aimedDepartureTime: "2020-11-17T23:26:00+0100",
          expectedArrivalTime: "2020-11-17T23:26:00+0100",
          expectedDepartureTime: "2020-11-17T23:26:00+0100",
          date: "2020-11-17",
          destinationDisplay: {
              frontText: "Vikåsen via Singsaker"
          },
          serviceJourney: {
              journeyPattern: {
              line: {
                  name: "Vikåsen- Strindheim- Singsaker",
                  transportMode: "bus"
              }
              }
          }
          },
          {
          realtime: false,
          aimedArrivalTime: "2020-11-17T23:30:00+0100",
          aimedDepartureTime: "2020-11-17T23:30:00+0100",
          expectedArrivalTime: "2020-11-17T23:30:00+0100",
          expectedDepartureTime: "2020-11-17T23:30:00+0100",
          date: "2020-11-17",
          destinationDisplay: {
              frontText: "Vanvikan"
          },
          serviceJourney: {
              journeyPattern: {
              line: {
                  name: "Trondheim - Vanvikan",
                  transportMode: "water"
              }
              }
          }
          },
          {
          realtime: false,
          aimedArrivalTime: "2020-11-17T23:46:00+0100",
          aimedDepartureTime: "2020-11-17T23:46:00+0100",
          expectedArrivalTime: "2020-11-17T23:46:00+0100",
          expectedDepartureTime: "2020-11-17T23:46:00+0100",
          date: "2020-11-17",
          destinationDisplay: {
              frontText: "Vikåsen via Singsaker"
          },
          serviceJourney: {
              journeyPattern: {
              line: {
                  name: "Vikåsen- Strindheim- Singsaker",
                  transportMode: "bus"
              }
              }
          }
          },
          {
          realtime: false,
          aimedArrivalTime: "2020-11-18T00:06:00+0100",
          aimedDepartureTime: "2020-11-18T00:06:00+0100",
          expectedArrivalTime: "2020-11-18T00:06:00+0100",
          expectedDepartureTime: "2020-11-18T00:06:00+0100",
          date: "2020-11-17",
          destinationDisplay: {
              frontText: "Vikåsen via Singsaker"
          },
          serviceJourney: {
              journeyPattern: {
              line: {
                  name: "Vikåsen- Strindheim- Singsaker",
                  transportMode: "bus"
              }
              }
          }
          },
          {
          realtime: false,
          aimedArrivalTime: "2020-11-18T06:06:00+0100",
          aimedDepartureTime: "2020-11-18T06:06:00+0100",
          expectedArrivalTime: "2020-11-18T06:06:00+0100",
          expectedDepartureTime: "2020-11-18T06:06:00+0100",
          date: "2020-11-18",
          destinationDisplay: {
              frontText: "Vikåsen via Singsaker"
          },
          serviceJourney: {
              journeyPattern: {
              line: {
                  name: "Vikåsen- Strindheim- Singsaker",
                  transportMode: "bus"
              }
              }
          }
          },
          {
          realtime: false,
          aimedArrivalTime: "2020-11-18T06:20:00+0100",
          aimedDepartureTime: "2020-11-18T06:20:00+0100",
          expectedArrivalTime: "2020-11-18T06:20:00+0100",
          expectedDepartureTime: "2020-11-18T06:20:00+0100",
          date: "2020-11-18",
          destinationDisplay: {
              frontText: "Vanvikan"
          },
          serviceJourney: {
              journeyPattern: {
              line: {
                  name: "Trondheim - Vanvikan",
                  transportMode: "water"
              }
              }
          }
          },
          {
          realtime: false,
          aimedArrivalTime: "2020-11-18T06:20:00+0100",
          aimedDepartureTime: "2020-11-18T06:20:00+0100",
          expectedArrivalTime: "2020-11-18T06:20:00+0100",
          expectedDepartureTime: "2020-11-18T06:20:00+0100",
          date: "2020-11-18",
          destinationDisplay: {
              frontText: "Brekstad kai"
          },
          serviceJourney: {
              journeyPattern: {
              line: {
                  name: "Trondheim - Brekstad",
                  transportMode: "water"
              }
              }
          }
          },
          {
          realtime: false,
          aimedArrivalTime: "2020-11-18T06:26:00+0100",
          aimedDepartureTime: "2020-11-18T06:26:00+0100",
          expectedArrivalTime: "2020-11-18T06:26:00+0100",
          expectedDepartureTime: "2020-11-18T06:26:00+0100",
          date: "2020-11-18",
          destinationDisplay: {
              frontText: "Vikåsen via Singsaker"
          },
          serviceJourney: {
              journeyPattern: {
              line: {
                  name: "Vikåsen- Strindheim- Singsaker",
                  transportMode: "bus"
              }
              }
          }
          }
      ]
  }
  
]

const locations = [
  {
    name: "Trondheim",
    id: "NSR:StopPlace:60066"
  }

]

//Definging Querys
const typeDefs = `
  type Query {
    stopPlace(id: String!): stopPlace
    features(name: String!): features
  }

  type features{
    name: String
    id: String
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
      stopPlace(parent, args, context, info) {
        return stopPlaces.find(stopPlace => stopPlace.id === args.id)
      },
    /*
    stopPlace: async (_root, { id }) => {
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
        console.log(stopplaceData)
        //console.log(stopplaceData.data.stopPlace)

        return stopplaceData.data.stopPlace;
      } catch (e) {
        console.error(e);
      }
    }*/
    features(parent, args, context, info) {
      return locations.find(features => features.name === args.name)
    }
    /*
    features: async (_root, { name }) => {
      try {
        //Trying to fetch with GET from API
        const results = await fetch(
          `https://api.entur.io/geocoder/v1/autocomplete?text=${name}&size=10&lang=no`
        );

        //Getting json information from results
        const placeData = await results.json();
          console.log(placeData)
        return placeData.features;
      } catch (e) {
        console.log(e);
      }
    }*/
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
