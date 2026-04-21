import { View, Text ,StyleSheet } from 'react-native'

import React from 'react'

import { useLocalSearchParams } from 'expo-router'

export default function ProductDetail() {

const {id} = useLocalSearchParams ();

return (

<View style={styles.container}>

<Text>ProductDetail</Text>

<Text>Detail about the product with id {id} </Text>

</View>

)

}

const styles = StyleSheet.create({

container:{

flex:1,

justifyContent:'center',

alignItems:'center',

},

});