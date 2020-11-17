import React from 'react';
import { useQuery } from "@apollo/client";
import { View, Text, FlatList, Button } from "react-native";
import { TRAVEL_QUERY } from "./Querys/Query";
import { AppLoading } from 'expo';
import { styles } from './Styling/Styles';
import { ArrivalTime } from './ArrivalTime';

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


  //This function runs a TRAVEL_QUERY
  //and returns data based on the stop place id
export default function Travel(stopID:Props) {
  const { loading, data, error } = useQuery<stopPlaceData, stopPlaceVars>(
    TRAVEL_QUERY,
        {variables: { id: stopID.id}}
    );
  let stopPlaceView: JSX.Element | null = null;


  //If the app is loading
  if (loading) stopPlaceView = ( <Text style={({color: "white"})}>Loading...</Text> )
  //if you get back data. The application will return the depature board.
  if (data) stopPlaceView = (
    <View>
        <FlatList style={({margin: 20})} data={data.stopPlace.estimatedCalls} 
        renderItem={ (linje ) => (
          <View style={styles.depatureStyles}>
            <ArrivalTime estimatedArrival={linje.item.expectedArrivalTime}/>
            <Text style={({color: "white"})}>{linje.item.destinationDisplay.frontText}</Text>
            <Text style={({color: "white"})}>{linje.item.serviceJourney.journeyPattern.line.publicCode}</Text>
          </View>
        ) }
        keyExtractor={(linje) => (linje.expectedArrivalTime)}
        initialNumToRender={15}/>
    </View>

  )
  //If something when wrong, or if there is no stopplace on that location
  if (error) stopPlaceView = (<Text style={({color: "white"})}>Det har skjedd en feil</Text>)

  return stopPlaceView;
}