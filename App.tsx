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
import Presentation from './Presentation';
import Geocoder from './Geocoder';


export default class App extends Component {
  state = {show: "search", input_value: "", keyword: "", id: "NSR:StopPlace:44085"};

	handleChange = (value1: string, value2: string) => {
		console.log(value2)
		this.setState(
			{show: value1, id: value2}
		)
	}

	new_search = () => {
    console.log("Setter ny state")
		this.setState({show: "search"})
	}

	// Event listener which is being sent as props to the
	// Presentation component and listening for change in
	// input at the search area
	search_on_change = (value:string) => {
		console.log("change of state occured: ", value)
		this.setState(
			{show: "results", keyword: value}
    )
    console.log(value) //Fant en feil her
	}

  render() {

    return (
      <ApolloProvider client={client}>
      <ScrollView style={styles.bodyStyles}>
        <View style={styles.headerStyles}>
          <View style={styles.container}>
            <Text style={({fontSize: 30})}>Reiseplanlegger</Text>
            <StatusBar style="auto" />
          </View>
          <Separator />
        </View>
        <View>
            <Presentation 
              layout={this.state.show}
              keyword={this.state.keyword}
              input_value={this.state.input_value}
              search_on_change={this.search_on_change}
              id={this.state.id}
              new_search={this.new_search}
              />
        </View>
        <View style={styles.LocationStyles}>
          <Geocoder
            show={this.state.show}
            name={this.state.keyword}
            onChange={this.handleChange} />
        </View>
      </ScrollView>
      </ApolloProvider>
    );
  }
}

