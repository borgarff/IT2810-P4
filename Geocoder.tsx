import React from 'react';
import { useQuery } from "@apollo/client";
import { View, Text, FlatList, Button } from "react-native";
import { LOCATION_QUERY } from './Querys/Query'
import { Colors } from 'react-native/Libraries/NewAppScreen';

//Types for the Location data
interface locationData {
    features: features[];
}

interface features {
    properties: properties;
}

interface properties {
    id: string;
    name: string;
    county: string;
    locality: string;
}

interface locationVars {
    name: string;
}

//Props that handels state managment
interface Props{
	name: string;
	onChange: any;
	show: string;
}


export default function Geocoder(props:Props){
    //Making a new empty JSX element
    let locationVeiw: JSX.Element | null = null;

    //Requesting location from this query
    const {loading, error, data} = useQuery<locationData, locationVars>(
        LOCATION_QUERY,
		{variables: {name: props.name}}
    );

    const search_on_change = (id:string) => {
		console.log("const search_on_change");
		console.log(id)
		props.onChange("Geocoder", id)
	}

    //Set the JSX to be one of these elements based on the query
    if (loading) locationVeiw =  (<Text>Loading...</Text>)
    if (error) locationVeiw = (<Text>Ikke kontakt med Server, eller en feil har oppstått</Text>)
    if (data) {
        if(props.show === "results") {
            locationVeiw = (
                <FlatList style={({margin: 20})} data={data.features} 
                renderItem={ (place) => (
                  <View style={({margin: 10})}>
                    <Text style={({color: "white"})}>{place.item.properties.name}</Text>
                    <Button title="Hent Rutetider" onPress={() => search_on_change(place.item.properties.id)}/>
                  </View>
                ) }
                keyExtractor={ (place) => (place.properties.id)}
                initialNumToRender={15}/>
            )
        }
        else locationVeiw = <Text />
    }
    return locationVeiw;
}