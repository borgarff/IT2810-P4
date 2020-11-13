import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { View, Text } from "react-native";
//import { TRAVEL_QUERY } from "./Querys/Query";



const TRAVEL_QUERY = gql`
query getStop($id: String!){
  stopPlace(id: $id) {
    id
    name
    estimatedCalls {     
      realtime
      aimedArrivalTime
      aimedDepartureTime
      expectedArrivalTime
      expectedDepartureTime
      date
      destinationDisplay {
        frontText
      }
      serviceJourney {
        journeyPattern {
          line {
            name
            transportMode
            publicCode
          }
        }
      }
    }
  }
}
`;


interface stopPlaceData {
  stopPlace: stopPlace;
}

interface stopPlace {
  id: string;
  name: string;
  estimatedCalls: estimatedCalls[];
}

interface estimatedCalls {
  realtime: boolean;
  aimedArrivalTime: string;
  aimedDepartureTime: string;
  expectedArrivalTime: string;
  expectedDepartureTime: string;
  date: string;
  destinationDisplay: destinationDisplay;
  serviceJourney: serviceJourney;
}

interface destinationDisplay {
  frontText: string;
}

interface serviceJourney {
  journeyPattern: journeyPattern;
}

interface journeyPattern {
  line: line;
}

interface line {
  name: string;
  transportMode: string;
  publicCode: number;
}

interface stopPlaceVars {
  id: string;
}
  
  interface Props{
      id: string;
  }
  
  export default function Travel() {
    const { loading, data, error } = useQuery<stopPlaceData, stopPlaceVars>(
    TRAVEL_QUERY,
        {variables: { id: "NSR:StopPlace:337"}}
    );
    let stopPlaceView: JSX.Element | null = null;
    
    console.log(data)
    if (loading) stopPlaceView = (<Text>Loading...</Text>)
    if (error) stopPlaceView = (<Text>Det har skjedd en feil</Text>)
    if (data) stopPlaceView = (
    <View>
        {data && data.stopPlace.estimatedCalls.map( (linje) => (
            <View>
                <Text>Test</Text>
                <Text>{linje.destinationDisplay.frontText}</Text>
                {console.log(linje.destinationDisplay.frontText)}
            </View>
        ))}
    </View>
    )

    return stopPlaceView;
}
