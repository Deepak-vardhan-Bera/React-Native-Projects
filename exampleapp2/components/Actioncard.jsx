import { StyleSheet, Text, View,Image,TouchableOpacity, Alert, Linking} from 'react-native'
import React from 'react'

const Actioncard = () => {
    
    const openinsta= async=()=>{
    Alert.alert("You are redirecting to instagram");
    setTimeout(()=>Linking.openURL('https://www.instagram.com/deepu_03_09?igsh=dHFkOWxuN3A2cHlx')
    ,2000)}
    const openfb=()=>{
        Alert.alert("You are redirecting to Facebook")
        setTimeout(()=>Linking.openURL('https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqa3dYdW5GTS1FWHdvZnAxVUdFV3ZLb042NHFEQXxBQ3Jtc0ttU0p4QnZaTWNLTVNxRzF6Y2stNUZCeUhscTlTLTlTclJXSkc1SEhjT0g0eEpoUUNTSHNERGZYSkg4cjdVLWpSclY4WVlhY2tHWnJ3WDN3SDFPOTZCUzNyaHFKN0JDN1lDR043dEFHUDNMVHc0ZThGcw&q=https%3A%2F%2Fm.facebook.com%2Fdeepak.vardhan.35%3Fref%3Dbookmarks')
        ,2000)
    }
    const openyt=()=>{
            Alert.alert("You are redirecting to Youtube")
            setTimeout(()=>Linking.openURL('https://www.youtube.com/channel/UCXen3j9EYxD7Uq0sev2rlhg')
            ,2000)
    }


  return (
    <View>
      <Text style={styles.heading} >Click on logo</Text>
      <View style={[styles.about,styles.elevation]}>
        <Text style={styles.cardtittle} >About Us</Text>
        <View style={styles.brand} >
        <Image source={require('../assets/myimage.jpg')} style={styles.image} />
         <Text numberOfLines={2} style={styles.name} >Deepak Vardhan</Text>
       </View> 
       <TouchableOpacity style={styles.logocontainer} onPress={openinsta} >
       <Image  source={require('../assets/instagram.png')} style={styles.logo} />
       <Text  style={styles.logoname}>deepu_03_09</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.logocontainer} onPress={openfb} >
       <Image  source={require('../assets/social.png')} style={styles.logo} />
       <Text  style={styles.logoname}>deepu_03_09</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.logocontainer} onPress={openyt} >
       <Image  source={require('../assets/yt.png')} style={styles.logo} />
       <Text  style={styles.ytname}>Deepak Vardhan</Text>
       </TouchableOpacity>
     </View>
    </View>
  )
}

export default Actioncard

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:"bold",
        paddingHorizontal:8,
        paddingVertical:8
      },
    about:{
            backgroundColor:"#ffffff",
            height:400,
            borderRadius:10,
            marginHorizontal:12,
            marginVertical:12,
            height:500,
            flex:1,
            backgroundColor:"#E0F2E9"
      },
    elevation:{
         elevation:4,
         shadowOffset:{
            width:2,
            height:2
         }
      },
    cardtittle:{
        color:'#3C887E',
     fontWeight:"bold",
     fontSize:27,
     paddingVertical:5,
     textAlign:"center"
      },
    image:{
        height:120,
        width:120,
        borderRadius:60,
        marginHorizontal:5,
        marginVertical:5
        },
    brand:{
            flexDirection:'row'
        },
    name:{
        marginVertical:38,
        marginHorizontal:11,
        fontSize:33,
        fontWeight:"bold"
        ,color:"#5B7B7A"
    },
   logo:{
    height:80,
    width:80,
    marginLeft:5,
    marginVertical:8
   },
   logocontainer:{
    flexDirection:'row',
    marginHorizontal:25,
    marginVertical:5
},
logoname:{
    marginVertical:18,
    marginHorizontal:71,
    fontSize:28,
    fontWeight:"500" 
    ,color:"#A17C6B"  
},
ytname:{
    marginVertical:18,
    marginHorizontal:65,
    fontSize:26,   
    fontWeight:"500" 
    ,color:"#A17C6B" 
},
})