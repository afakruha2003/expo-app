import { Stack } from 'expo-router'

import { StyleSheet, View, Text } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

export default function RootLayout() {

return (

<SafeAreaView style={styles.container}>

<Stack
  screenOptions={{
    headerStyle: { backgroundColor: 'darkmagenta' },
    headerTintColor: '#fff',
    headerTitle: 'Online Shopping',
    headerTitleStyle: { fontWeight: 'bold' },
    headerTitleAlign: 'center',
  }}
/>
{/* <Slot/> */}
<View style={styles.footer}>

<Text style={styles.footerText}> Contact Us</Text>

</View>

</SafeAreaView>

)

}

const styles = StyleSheet.create({

  container: {

    flex: 1

  },

  header: {

    backgroundColor: 'darkmagenta',

    padding: 20,

  },

  headerText: {

    color: 'white',

  },

  footer: {

    backgroundColor: 'darkmagenta',

    padding: 20,

  },

  footerText: {

    color: 'white',

  },
})