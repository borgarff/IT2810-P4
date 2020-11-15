import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    headerStyles: {
        margin: 0,
        backgroundColor: 'lightseagreen'
    },
    bodyStyles: {
        margin: 0,
        backgroundColor: '#282c34'
    },
    container: {
      flex: 1,
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchStyles: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      LocationStyles: {
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 50
      }
  });