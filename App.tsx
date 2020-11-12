import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { ApolloProvider } from "@apollo/client";
import { textinputStyles, textstyles } from './Styles';
import { client }  from './ApolloLinks';



export default function App() {
  console.log("App startet")
  return (
    <ApolloProvider client={client}>
    <ScrollView>
      <View style={textstyles.container}>
        <Text>Dette skal bli en app, snart!</Text>
        <StatusBar style="auto" />
      </View>
      <TextInput
          style={textinputStyles.container}
          placeholder="Søk her" autoFocus onKeyPress={() => console.log("Tast registrert")}
        />
    </ScrollView>
    </ApolloProvider>
  );
}

