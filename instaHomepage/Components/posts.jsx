import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'

const Posts = () => {
    const sampleInstagramPosts = [
        { key:1,
          username: 'nature_explorer',
          profilePic:  'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
          postImage: 'https://images.unsplash.com/photo-1708941545932-b78f29329670?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtZSUyMGRpbWVuc2lvbnN8ZW58MHwxfDB8fHww',
          description: '🌿 Exploring the beauty of nature today! 🌳 #naturelovers #hikingadventures',
        },
        {key:2,
          username: 'travel_bug',
          profilePic:  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
          postImage: 'https://plus.unsplash.com/premium_photo-1681302677426-a6a602a01ff0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FtZSUyMGRpbWVuc2lvbnN8ZW58MHwxfDB8fHww',
          description: '🌍 Wanderlust vibes from my latest adventure! ✈️ #travelgram #explore',
        },
        {key:3,
          username: 'foodie_finds',
          profilePic: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600' ,
          postImage: 'https://images.unsplash.com/photo-1708941545947-fb7ba8c1e266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FtZSUyMGRpbWVuc2lvbnN8ZW58MHwxfDB8fHww',
          description: '🍜 Delicious noodles from a hidden gem in the city! 🍲 #foodie #yum',
        },
        {key:4,
          username: 'fitness_journey',
          profilePic: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600' ,
          postImage: 'https://images.unsplash.com/photo-1628123860704-9b1f4124a8b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbWUlMjBkaW1lbnNpb25zfGVufDB8MXwwfHx8MA%3D%3D',
          description: '💪 Morning workout session to kickstart the day! 🏋️‍♂️ #fitnessmotivation #healthylifestyle',
        },
        {key:5,
          username: 'fashionista',
          profilePic:  'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600' ,
          postImage: 'https://images.unsplash.com/photo-1652366643487-a432187cbff8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbWUlMjBkaW1lbnNpb25zfGVufDB8MXwwfHx8MA%3D%3D',
          description: '👗 Loving this new outfit! Ready for a stylish day out. 💃 #fashionblogger #ootd',
        },
        {key:6,
          username: 'art_lover',
          profilePic:  'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=600',
          postImage: 'https://images.unsplash.com/photo-1720040960409-e70d6d45bb40?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description: '🎨 Admiring modern art at the gallery today. So inspiring! 🖼️ #artlover #creative',
        }
      ];
      

      



    
  return (
     <ScrollView style={styles.container} >
   {sampleInstagramPosts.map(({username,profilePic,postImage,description,key})=>(
     <View style={styles.post} key={key} >
        <TouchableOpacity style={styles.postheader} >
            <Image style={styles.profile} source={{uri: profilePic }} /> 
      <Text style={styles.name} >{username}</Text>
      <Image source={require('../Assets/headericons/postmenu.png')} style={styles.postmenu}  />
      </TouchableOpacity>
      <Image source={{ uri:postImage }}  style={styles.postimage} />
     <View style={styles.postfooter} >
       <TouchableOpacity>
       <Image style={styles.heart} source={ require('../Assets/posticons/heart.png')} />
       </TouchableOpacity>
       <TouchableOpacity  style={styles.heart}>
       <Image style={styles.msg} source={ require('../Assets/posticons/msg.png')} />
       </TouchableOpacity>
     </View>
     </View>
 ))}
</ScrollView>



)}


export default Posts

const styles = StyleSheet.create({
  container:{
    height:700,
    flexBasis:600,
    flexGrow:900
  },
   post:{
     height:700,
     flex:1,
   },
   postheader:{
    flexDirection:'row'
   },
   profile:{
     height:50,
     width:50,
     borderRadius:24
   },
   name:{
    marginTop:12,
    fontSize:23,
    fontWeight:'bold'
   },
   postimage:{
    flex:1,
    height:390,
    marginTop:5,
   },
   postmenu:{
    height:30,
    resizeMode:'contain',
    marginTop:8,
    justifyContent:'flex-end',
    position:'absolute',
    right:4
  },
  postfooter:{
    height:55,
    marginVertical:5
  },
  heart:{
    height:35,
    resizeMode:'contain',
    position:'absolute',
    left:-6,
  },
  msg:{
    height:33,
    resizeMode:'contain',
    position:'absolute',
    left:26,
  }
})