import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { ApolloProvider } from "@apollo/client";
import { styles } from './Styling/Styles';
import { client }  from './Components/ApolloLinks';
import { Separator } from './Components/UI_Components'


export default function App() {
  console.log("App startet")
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
            style={styles.textinputStyles} placeholder="Søk her" autoFocus onKeyPress={() => console.log("Tast registrert")}
          />
        <Button 
        title="Søk "
        onPress={() => Alert.alert('Søk knapp trykket')}
        />
      </View>
    </ScrollView>
    </ApolloProvider>
  );
}

