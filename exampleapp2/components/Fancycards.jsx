import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const Fancycards = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.heading}  >Fancycards</Text>
      <View style={[styles.card,styles.Elevetedcard]} >
      <Image source={{
        uri:"https://narsipatnamonline.com/cmoon/images/tourism/8BRwCLtck9.jpg"
      }} style={styles.cardimage} ></Image>
      <View  style={styles.cardbody}>
        <Text style={styles.cardtittle} >Dharamattam Waterfalls</Text>
        <Text style={styles.cardlabel} >Narsipatnam,Anakapalle</Text>
        <Text style={styles.carddetails} >Daramattam Waterfalls is located at a distance of about 17 km west from Narsipatnam. The waterfall is most famous tourist place in Narsipatnam. This is the one of the best beautiful picnic spot for tourists.</Text>
        <Text style={styles.cardfooter} >12km away</Text>
      </View>
    </View>
    </View>
  )
}

export default Fancycards

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    heading:{
        fontSize:25,
        fontWeight:"bold",
        paddingHorizontal:8,
        paddingVertical:8
      },

      card:{
        borderRadius:10,
       marginHorizontal:12,
       marginVertical:12,
       height:500
      },

      cardimage:{
       height:300,
    },

    Elevetedcard:{
            backgroundColor:"#FFFFFF",
            elevation:3,
            ShadowOffset:{
                width:2,
                height:2
            }
    },
      cardbody:{
   flex:1,
   flexGrow:1
      },
      cardtittle:{
              color:'#0f0ade',
    fontWeight:"bold",
    fontSize:23,
    paddingVertical:5,
        textAlign:"center"
      },
      carddetails:{
        color:'#000000',
        fontSize:15,
        paddingVertical:3

      },
      cardfooter:{
        color:'#ff4c30',
                fontSize:16,
        paddingVertical:3,
        textAlign:"right",
        paddingHorizontal:10
      },
      cardlabel:{
        color:"#043b5c",
        fontSize:18,
        paddingVertical:3,
         textAlign:"center"
      },
})