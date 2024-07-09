import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatcards = () => {
  return (
    <View>
     <Text style={styles.heading} >Flat Cards</Text>
     <View style={styles.container} >
        <View style={styles.redbox} >
            <Text style={styles.text}>Red</Text>
        </View>
        <View style={styles.bluebox} ><Text style={styles.text}>Blue</Text></View>
        <View style={styles.greenbox} ><Text style={styles.text}>Green</Text></View>

     </View>
    </View>
  )
}

export default Flatcards

const styles = StyleSheet.create({
  heading:{
    fontSize:25,
    fontWeight:"bold",
    paddingHorizontal:8,
    paddingVertical:8

  }
  ,container:{
    flex:1,
    flexDirection:"row",
    width:'100%',
    height:150,
    justifyContent:"space-evenly",
    alignItems:'center'
},
  redbox:{
    backgroundColor:"red",
    width:100,
    height:130,
    borderRadius:5
  },
  bluebox:{
    backgroundColor:"blue",
    width:100,
    height:130,
    borderRadius:5
  },
  greenbox:{
    backgroundColor:"green",
    width:100,
    height:130,
    borderRadius:5
  },
  text:{
   textAlign:"center",
   top:50,
   fontSize:20
  }

})