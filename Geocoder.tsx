import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { View, Text, FlatList, Button } from "react-native";
import { LOCATION_QUERY } from './Querys/Query'

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

interface Props{
	name: string;
	onChange: any;
	show: string;
}


export default function Geocoder(){
    const {loading, error, data} = useQuery<locationData, locationVars>(
        LOCATION_QUERY,
				{variables: {name: "Trondheim"}}
    );

    let loactinVeiw: JSX.Element | null = null;
    console.log(data)
    if (loading) loactinVeiw =  (<Text>Loading...</Text>)
    if (error) loactinVeiw = (<Text>Ikke kontakt med Server, eller en feil har oppstått</Text>)
    if (data) loactinVeiw = (
        <FlatList data={data.features} 
        renderItem={ (place) => (
          <View>
            <Text>{place.item.properties.name}</Text>
          </View>
        ) } 
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