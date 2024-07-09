import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'

const Imagecards = () => {
  return (
 
     <View>
       <Text style={styles.heading} >Beautiful places</Text>
      <ScrollView horizontal={true}style={styles.container1}  >
     <View style={styles.body} >
     <Image style={styles.all}
       source={{
        uri:"https://imgs.search.brave.com/jNGGjsyaPWx-h1bGaUk44gFQKYw6nbPmG6Ehrq88lfw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU5/MzcxNzkxL3Bob3Rv/L3Rhai1tYWhhbC1p/bmRpYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TTVqNVdP/Ti1zYjVJYmVGeEU4/d0kzQ1JoRjFsWU8y/UWVGd0diSU1ZZzZm/Yz0"
       }}
     /> 
    </View>

    <View style={styles.body} >
     <Image style={styles.all}
       source={{
        uri:"https://imgs.search.brave.com/La7ULLx2o2XdPGt6vk3kpAdqgHhhFkC2W8CgGdqj3wI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NjgzMjkxL3Bob3Rv/L21hY2h1LXBpY2No/dS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9MkY4dkhsdWFl/ZTZ2WEJQRVBrMjdG/VG9EOGdFNFB4Tk9I/Q29QQjR1MjBRaz0"
       }}
       />
       </View>
        <View style={styles.body} >
       <Image style={styles.all}
       source={{
        uri:"https://cdn.britannica.com/82/94382-131-A775A403/Great-Wall-of-China-Beijing.jpg?w=600&q=60"
       }}
     /> 
   </View>

   <View style={styles.body} >
     <Image style={styles.all}
       source={{
        uri:"https://cdn.britannica.com/49/61349-131-B30C16E2/El-Castillo-pyramid-plaza-Toltec-state-Yucatan.jpg?w=600&q=60"
       }}
     /> 
     </View>
     <View style={styles.body} >
     <Image style={styles.all}
       source={{
        uri:"https://cdn.britannica.com/25/153525-050-FC43840D/Khaznah-Petra-Jordan.jpg?w=600&q=60"
       }}
     /> 
     </View>
    </ScrollView>
    
    </View>
  )
}

export default Imagecards

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:"bold",
        paddingHorizontal:8,
        paddingVertical:8
      },
      all:{
        width:230,
        height:150,
        borderRadius:5,
        // margin:5,
        backgroundColor:"aqua",
        elevation:5,
          borderRadius:10
      },
      body:{
        margin:5
      },
      detail:{
       textAlign:'justify',
         numberOfLines:'3' ,
    ellipsizeMode:'tail'
      }

})