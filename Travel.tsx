import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { View, Text, FlatList, Button } from "react-native";
import { TRAVEL_QUERY } from "./Querys/Query";
import { AppLoading } from 'expo';
import { styles } from './Styling/Styles';
import { ArrivalTime } from './ArrivalTime';
import { Picker } from '@react-native-picker/picker';
import { RenderTravel } from './RenderTravel';




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
  transportMode: string;
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
  const [transport, useTransport] = useState("all");
  let stopPlaceView: JSX.Element | null = null;

  //If the app is loading
  if (loading) stopPlaceView = ( <Text style={({color: "white"})}>Loading...</Text> )
  //if you get back data. The application will return the depature board.

  if (data) {
    stopPlaceView = (
      <View>
        <View style={styles.depatureHeader}>
            <Text>Ankomst</Text>
            <Text>Linje</Text>
            <Text>Rute</Text>
            <Picker
              style={{ width: 50}}
              selectedValue={transport}
              onValueChange={(transportValue:any, itemIndex) => useTransport(transportValue)}
            > 
              <Picker.Item label="Alle" value="all" />
              <Picker.Item label="Buss" value="bus" />
              <Picker.Item label="Tog" value="rail" />
              <Picker.Item label="Fly" value="air"/>
              <Picker.Item label="Båt" value="water"/>
            </Picker>
        </View>
        <FlatList style={({alignSelf: "stretch"})} data={data.stopPlace.estimatedCalls} 
          renderItem={ (linje ) => (
            <RenderTravel arrivalTime={linje.item.expectedArrivalTime}
            publicCode={linje.item.serviceJourney.journeyPattern.line.publicCode}
            destination={linje.item.destinationDisplay.frontText}
            transportType={linje.item.serviceJourney.journeyPattern.line.transportMode}
            sort={transport}
            />
          ) }
          keyExtractor={(linje) => (linje.expectedArrivalTime)}
          initialNumToRender={15}/>
      </View>
    )
  }
  //If something when wrong, or if there is no stopplace on that location
  if (error) stopPlaceView = (<Text style={({color: "white"})}>Det har skjedd en feil</Text>)

  return stopPlaceView;
}

