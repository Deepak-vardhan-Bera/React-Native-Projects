import {Image, Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default function Head() {

const logo=()=>{

}
const heart=()=>{

}
const msg=()=>{

}

    return (
      <View style={styles.container} >
      <TouchableOpacity onPress={logo} >
        <Image style={styles.logo} source={ require('../Assets/headericons/logo.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={heart} >
        <Image style={styles.heart} source={ require('../Assets/headericons/heart.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={logo} >
        <Image style={styles.msg} source={ require('../Assets/headericons/msg.png')} />
      </TouchableOpacity>

      </View>
    )
  }

const styles = StyleSheet.create({
container:{
   flex:1,
   flexDirection:'row',
   justifyContent:'space-between'
    },
logo:{
    width:172,
    resizeMode:'contain',
    marginTop:10
},
heart:{
    resizeMode:'contain',
    width:30,
    marginLeft:125,
    marginTop:15
},
msg:{
    resizeMode:'contain',
    width:30,
    marginRight:14,
    marginTop:12
}
})