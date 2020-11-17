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
    new_search: any;
	id: string;
}

  //Returns the search bar and button elements
function Element(props:Element_props){
    const [inputText, setInput] = useState("")

    let elementView: JSX.Element | null = null;

    //The button press will change the state 
    //and give you the search results 
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

    //This switch returns the a JSX element based on the application state
    switch (props.layout) {
        case "search": 
        presentationView = (
            <View>
                <Element type="placeholder" value="Søk her" search_on_change={props.search_on_change} />
                <Text style={styles.textStyles}>Se avganger fra ditt stoppested</Text>
            </View>
        );break;
        case "Geocoder": presentationView = (
            <View>
                <Button title="Nytt søk" onPress={() => props.new_search()}/>
                <Text style={styles.textStyles}>Kommende avganger</Text>
                
                <Travel id={props.id}/>
            </View>
        ); break;
        case "results": presentationView = (
            <View>
                <Element type="defaultValue" value={props.keyword} search_on_change={props.search_on_change}/>
                <Text style={styles.textStyles}>
                    Velg en av følgende steder:
                </Text>
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