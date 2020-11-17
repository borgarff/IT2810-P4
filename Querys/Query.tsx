import { gql } from "@apollo/client";

//The querys used in this application

export const TRAVEL_QUERY = gql`
query getStop($id: String!){
  stopPlace(id: $id) {
    id
    estimatedCalls {
      expectedArrivalTime
      destinationDisplay {
        frontText
      }
      serviceJourney {
        journeyPattern {
          line {
            name
            publicCode
          }
        }
      }
    }
  }
}
`;

export const LOCATION_QUERY = gql`
query getLocation($name: String!){
    features(name: $name) {
      properties{
        id
        name
        county
        locality
      }
    }
  }
`;