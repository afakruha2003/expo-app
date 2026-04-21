import { View, Text, StyleSheet } from 'react-native'

import { Link } from 'expo-router';

export default function Home() {

return (

<View style={styles.container}>

<Text>Home</Text>

<Text>Hello world</Text>

<Link href={"/about"}>About</Link>
<Link href={"/profile"}>Profile</Link>
{/* <Link href={"/profile"}>Profile v2</Link>
<Link href={"/products"}>Products</Link> */}

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