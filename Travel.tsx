import React from 'react';
import { useQuery } from "@apollo/client";
import { View, Text, FlatList, Button } from "react-native";
import { TRAVEL_QUERY } from "./Querys/Query";
import { AppLoading } from 'expo';

interface stopPlaceData {
  stopPlace: stopPlace;
}

interface stopPlace {
  id: string;
  estimatedCalls: estimatedCalls[];
}

interface estimatedCalls {
  expectedArrivalTime: string;
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
  publicCode: number;
}

interface stopPlaceVars {
  id: string;
}

interface Props{
	id: string;
}


  export default function Travel(stopID:Props) {
    const { loading, data, error } = useQuery<stopPlaceData, stopPlaceVars>(
    TRAVEL_QUERY,
        {variables: { id: stopID.id}}
    );
    let stopPlaceView: JSX.Element | null = null;


    if (loading) stopPlaceView = ( <Text>Loading...</Text> )
    if (data) stopPlaceView = (
      <View>
          <FlatList style={({margin: 20})} data={data.stopPlace.estimatedCalls} 
          renderItem={ (linje ) => (
            <View style={({margin: 10})}>
              <Text style={({color: "white"})}>{linje.item.destinationDisplay.frontText}</Text>
            </View>
          ) }
          keyExtractor={(linje) => (linje.expectedArrivalTime)}
          initialNumToRender={15}/>
      </View>

    )
    if (error) stopPlaceView = (<Text style={({color: "white"})}>Det har skjedd en feil</Text>)

    return stopPlaceView;
}