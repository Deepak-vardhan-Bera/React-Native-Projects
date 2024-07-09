import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View,
  TouchableHighlight,SafeAreaView,ScrollView
} from 'react-native';
import Flatcards from './components/Flatcards';
import ElevatedFlatcards from './components/ElevatedFlatcards';
import Imagecards from './components/imagecards';
import Fancycards from './components/Fancycards';
import Actioncard from './components/Actioncard';
import Whatsapp from './components/Whatsapp';

function App() {
 return(<>
 <SafeAreaView>

  <ScrollView style={styles.body} >
  <Flatcards/>
  <ElevatedFlatcards/>
  <Imagecards/>
  <Fancycards/>
  <Actioncard/>
   <Whatsapp/>
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
