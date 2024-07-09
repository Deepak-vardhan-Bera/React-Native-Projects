import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Head from './Components/head';
import Stories from './Components/stories';
import Posts from './Components/posts';
import Empty from './Components/Empty';

function App() {
  return(
  <>
  <SafeAreaView>
   <Head/>
   <Stories/>
   <Posts/>
 </SafeAreaView>
  </>
)}

export default App;
