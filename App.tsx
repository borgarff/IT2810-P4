import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log("App startet")
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>Dette skal bli en app, snart!</Text>
      <StatusBar style="auto" />
    </View>
    <TextInput
        style={textinputStyles.container}
        placeholder="Søk her" autoFocus
      />
    </ScrollView>

  );
}

const textinputStyles = StyleSheet.create({
  container: {
    flex: 2,
    margin: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
