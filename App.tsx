import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import { ApolloProvider } from "@apollo/client";
import { styles } from './Styling/Styles';
import { client, cache }  from './Components/ApolloLinks';
import { persistCache } from 'apollo3-cache-persist'
import { Separator } from './Components/UI_Components'
import Travel from './Travel';
import { AppLoading } from 'expo';


export default function App() {
  console.log("App startet")

  const [loadingCache, setLoadingCache] = useState(true)

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false))
  }, [])

  if (loadingCache) {
    return <AppLoading />
  }
  
  return (
    <ApolloProvider client={client}>
    <View style={styles.bodyStyles}>
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
      <Separator />
      <View style={{backgroundColor: "white"}}>
        <Travel />
      </View>
    </View>
    </ApolloProvider>
  );
}

