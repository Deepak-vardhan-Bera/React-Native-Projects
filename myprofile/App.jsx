import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View,
  TouchableHighlight,SafeAreaView,ScrollView
} from 'react-native';
import Actioncard from './Actioncard';

function App() {
 return(<>
 <SafeAreaView>

  <ScrollView style={styles.body} >
  <Actioncard/>
  </ScrollView>
 </SafeAreaView>
 </>)


}
const styles = StyleSheet.create({
body:{
  backgroundColor:"#ede7e1"
}
})

export default App;
