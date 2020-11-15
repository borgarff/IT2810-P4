import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { Alert, AsyncStorage, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { ApolloProvider } from "@apollo/client";
import { styles } from './Styling/Styles';
import { client, cache }  from './Components/ApolloLinks';
import { Separator } from './Components/UI_Components'
import { loadingCache } from './Components/Cache'
import Travel from './Travel';
import Gedocoder from './Geocoder'
import { AppLoading } from 'expo';


export default class App extends Component {
  state = {show: "search", input_value: "", keyword: "", id: "NSR:StopPlace:44085"};

	handleChange = (value1: string, value2: string) => {
		console.log(value2)
		this.setState(
			{show: value1, id: value2}
		)
	}

	new_search = () => {
		this.setState({show: "search"})
	}

	// Event listener which is being sent as props to the
	// Presentation component and listening for change in
	// input at the search area
	search_on_change = (event:any) => {
		console.log("change of state occured: ", event.target.value)
		this.setState(
			{show: "results", keyword: event.target.value}
		)
	}

  render() {
    
    function getRandomInt(max:number) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    return (
      <ApolloProvider client={client}>
      <ScrollView style={styles.bodyStyles}>
        <View style={styles.headerStyles}>
          <View style={styles.container}>
            <Text>Dette skal bli en app, snart!</Text>
            <StatusBar style="auto" />
          </View>
          <Separator />
        </View>
        <View style={styles.searchStyles}>
          <TextInput
              placeholder="Søk her" autoFocus onKeyPress={() => console.log("Tast registrert")}
            />
          <Button 
          title="Søk "
          onPress={() => Alert.alert('Søk knapp trykket og et ramdom tall ' + getRandomInt(1000))}
          />
        </View>
        <Separator />
        <View style={styles.LocationStyles}>
          <Gedocoder />
        </View>
      </ScrollView>
      </ApolloProvider>
    );
  }
}

