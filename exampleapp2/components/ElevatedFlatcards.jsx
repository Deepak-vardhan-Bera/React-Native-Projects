import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const ElevatedFlatcards = () => {
  return (
    <View>
       <Text style={styles.heading} >Elevated Flat Cards</Text>
    <ScrollView horizontal={true}style={styles.container1}  >
    
        <View style={[styles.all]} >
            <Text style={styles.text}>scroll</Text>
        </View>
        <View style={[styles.all]} ><Text style={styles.text}>me</Text></View>
        <View style={[styles.all]} ><Text style={styles.text}>horizontal</Text></View> 
        <View style={[styles.all]} ><Text style={styles.text}>if</Text></View>
        <View style={[styles.all]} ><Text style={styles.text}>you</Text></View>
        <View style={[styles.all]} ><Text style={styles.text}>can</Text></View>
     </ScrollView>
    </View>
  )
}

export default ElevatedFlatcards

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:"bold",
        paddingHorizontal:8,
        paddingVertical:8
    
      },
      all:{
        width:100,
        height:130,
        borderRadius:5,
        margin:5,
        backgroundColor:"aqua"
      }
      ,container:{
        flex:1,
        flexDirection:"row",
        width:'100%',
        height:150,
        justifyContent:"space-evenly",
        alignItems:'center'
    },
    container1:{
       padding:8,
    },
    
      text:{
       textAlign:"center",
       top:50,
       fontSize:20
      }


})