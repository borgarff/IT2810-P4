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

const renderItem = ( item:any ) => {
  const backgroundColor = 'black';
}
  export default function Travel() {
    const { loading, data, error } = useQuery<stopPlaceData, stopPlaceVars>(
    TRAVEL_QUERY,
        {variables: { id: "NSR:StopPlace:337"}}
    );
    let stopPlaceView: JSX.Element | null = null;



    console.log("Kjører query test")
    console.log(data)
    if (loading) stopPlaceView = ( <Text>Loading...</Text> )
    if (data) stopPlaceView = (
      <Button title="data" onPress={() => console.log(data)}/>
    )
    if (error) stopPlaceView = (<Text>Det har skjedd en feil</Text>)

    return stopPlaceView;
}

/*
      <FlatList data={data.stopPlace.estimatedCalls} 
      renderItem={ (linje) => (
        <View>
          <Text>{linje.item.destinationDisplay.frontText}</Text>
        </View>
      ) } 
      initialNumToRender={5}/>


          <View>
      {data && data.stopPlace.estimatedCalls.map( (linje) => 
        <View>
          <Text>{linje.destinationDisplay.frontText}</Text>
        </View>
      )}
    </View>
*/