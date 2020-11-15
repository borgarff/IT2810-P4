import React from 'react';
import { useQuery } from "@apollo/client";
import { View, Text, FlatList, Button } from "react-native";
import { LOCATION_QUERY } from './Querys/Query'

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


export default function Geocoder(){
    //Requesting location from this query
    const {loading, error, data} = useQuery<locationData, locationVars>(
        LOCATION_QUERY,
		{variables: {name: "Trondheim"}}
    );

    //Making a new empty JSX element
    let loactinVeiw: JSX.Element | null = null;

    console.log(data)
    //Set the JSX to be one of these elements based on the query
    if (loading) loactinVeiw =  (<Text>Loading...</Text>)
    if (error) loactinVeiw = (<Text>Ikke kontakt med Server, eller en feil har oppstått</Text>)
    if (data) loactinVeiw = (
        <FlatList style={({margin: 30})} data={data.features} 
        renderItem={ (place) => (
          <View style={({margin: 10})}>
            <Text>{place.item.properties.name}</Text>
            <Button title="Hent Rutetider" onPress={() => console.log(place.item.properties.id)}/>
          </View>
        ) }
        keyExtractor={ (place) => (place.properties.id)}
        initialNumToRender={5}/>
    )
    return loactinVeiw;
}


/*
	const search_on_change = (id:string) => {
		//console.log(event.target.value);
		console.log("const search_on_change");
		console.log(id)
		props.onChange("Geocoder", id)
	}

    if (loading) return <p>Loading...</p>
		if(props.show === "results"){
			return (
					<div>
						{data && data.features.map( (test, index) => (
							<div className="Geocoder" key={index}>
									<p>{test.properties.name}</p>
									<button
										onClick={() => search_on_change(test.properties.id)}> 

										Hent rutetider
									</button> <br/>
							</div>
					))}
					</div>
			);
		}
	return <p></p>
*/