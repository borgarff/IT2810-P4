import React, { useState } from 'react';
import { Alert, AsyncStorage, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './Styling/Styles';
import Travel from './Travel';

interface Element_props{
	value: string;
	type: any;
	search_on_change?: any;
}

interface Props{
	layout: string;
	input_value: string;
	keyword: string;
	search_on_change: any;
	id: string;
}



function getRandomInt(max:number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function Element(props:Element_props){
    const [inputText, setInput] = useState("")

    let elementView: JSX.Element | null = null;

	if(props.type === "placeholder"){
		elementView = (
            <View style={styles.searchStyles}>
                <TextInput placeholder={props.value} autoFocus onChangeText={text => (setInput(text))} value={inputText}/>
                <Button 
                title="Søk "
                onPress={() => props.search_on_change(inputText)}
                />
            </View>
		
		);
	}
	else elementView = (
        <View style={styles.searchStyles}>
            <TextInput defaultValue={props.value} autoFocus onChangeText={text => (setInput(text))} value={inputText}/>
            <Button 
            title="Søk "
            onPress={() => props.search_on_change(inputText)}
            />
        </View>
		
    );
    
    return elementView;
}


export default function Presentation(props:Props){

    let presentationView: JSX.Element | null = null;
    switch (props.layout) {
        case "search": 
        presentationView = (
            <View>
                <Text>Se avganger fra ditt stoppested</Text>
                <Element type="placeholder" value="Søk her" search_on_change={props.search_on_change} />
            </View>
        );break;
        case "Geocoder": presentationView = (
            <View>
                <Text>Kommende avganger</Text>
                <Travel id={props.id}/>
            </View>
        ); break;
        case "results": presentationView = (
            <View>
                <Text>
                    Velg en av følgende steder:
                </Text>
                <Element type="defaultValue" value={props.keyword} search_on_change={props.search_on_change}/>
            </View>
        ); break;
        default: presentationView = (
            <View>
                <Text>Siden ikke funnet</Text>
            </View>
        );break;
    }
    return presentationView;
}


/*
Her er det ting fra prosjekt 3. Bør fjernes når jeg er ferdig

function Element(props:Element_props){
	if(props.type === "placeholder"){
		return(
		<input type="text" className="searchbar" placeholder={props.value} autoFocus onChange={props.search_on_change}/>
		);
	}
	return(
		<input type="text" className="searchbar" defaultValue={props.value} autoFocus onChange={props.search_on_change}/>
	);
}


export default function Presentation(props:Props){
	if(props.layout === "search"){
	return(
		<>
			<p>
				Se avganger fra ditt stoppested
			</p>
			<Element type="placeholder" value="Søk her" search_on_change={props.search_on_change}/>
		</>
	);
	}
	else if(props.layout === "Geocoder"){
		return(
			<>
				<p>Kommende avganger</p>
				<Travel id={props.id}/>
			</>
		);
	}
	else if (props.layout === "results"){
		return(
			<>
				<p>
					Velg en av følgende steder:
				</p>
				<Element type="defaultValue" value={props.keyword} search_on_change={props.search_on_change}/>
				
			</>
		);
	}
	else return <p>Siden ikke funnet</p>
}
*/