
import React,{useState} from 'react';
import { StyleSheet, View,ScrollView, Text,TouchableOpacity } from 'react-native';
import PasswordGenerator from './PasswordGenerator';
import Actioncard from './aboutscreen';
export default function App() {



  return (
    <>
       <ScrollView>
      <PasswordGenerator />
       </ScrollView>
</>
  );
}

const styles = StyleSheet.create({
 
});
