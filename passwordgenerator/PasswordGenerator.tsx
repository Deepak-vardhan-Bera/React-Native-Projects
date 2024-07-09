import { StyleSheet, Text, View,TextInput,Keyboard,TouchableOpacity, Alert } from 'react-native'
import React ,{useState,useEffect} from 'react'
import Actioncard from './aboutscreen';
import * as yup from'yup'
import { Formik } from 'formik'
import  BouncyCheckbox  from 'react-native-bouncy-checkbox'
import { useNavigation } from '@react-navigation/native';
export default function PasswordGenerator() {
  const [Aboutme, setaboutme] = useState(false)
function aboutme(){
  setaboutme(!Aboutme)

}
  useEffect(() => {

    Alert.alert(
      'Welcome to the password generator! This is made by Deepak vardhan',
      'Ensure that the password Length must be greater than 5 or less than 17.',

      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }, []);
const passwordschema=yup.object().shape({
 passwordlength:yup.number()
 .default(8)
.min(6,'password Should Contain at least 6 characters')
.max(16,'Password Should Not contain More Than 16 characters')
.required('Password Length is necessary ')
})

const [password,setpassword]=useState('')
const [ispasswordset,setispasswordset]=useState(false);
const [uppercase, setuppercase] = useState(false);
const [lowercase, setlowercase] = useState(true);
const [numbers, setnumbers] = useState(false);
const [symbols, setsymbols] = useState(false);
const [text, settext] = useState('useless text')

const createpassword=(passwordlength:number,characters:string)=>{

 
  let result=''
  for (let i = 0; i < passwordlength; i++) {
    let index=Math.floor(Math.random()*characters.length)
    result += characters[index]
  }
  console.log(result);
  
  return result;
}
const generatepassword=(passwordlength:number)=>{
 let characters='';
 let Uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 let Lowercase='abcdefghijklmnopqrstuvwxyz'
 let Numbers='0123456789';
 let Symbols='!@#$%^&*_'
if (!(lowercase||uppercase||numbers||symbols)) {
  Alert.alert("Include at least one type of character")
  return
}
if (passwordlength==0) {
 Alert.alert("Enter Length of the password")
  return
}


if (uppercase) {
  characters+=Uppercase
}
if (lowercase) {
  characters+=Lowercase
}
if (numbers) {
  characters+=Numbers
}
if (symbols) {
  characters+=Symbols
}

const newPassword=createpassword(passwordlength,characters)
  setpassword(newPassword)
  Keyboard.dismiss();
  setispasswordset(true)
}

const reset=()=>{
  setlowercase(true)
  setuppercase(false)
  setnumbers(false)
  setsymbols(false)
  setispasswordset(false)
  setpassword('')
}

  return (


  <View style={styles.container} >
    <Text style={styles.heading} > Password Generator </Text>

   <Formik
       initialValues={{ passwordlength:''}}
      validationSchema={passwordschema}
      onSubmit={(values)=>{
        console.log(values);
        generatepassword(+values.passwordlength)
      }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset
         }) => (
          <>
        <View style={styles.inputcontainer} >
         <View style={styles.inputwrapper}> 
          <View style={styles.inputcoloumn} >
           <Text style={styles.questiontext} >Enter Length of Password:</Text>
           {
             touched.passwordlength&&errors.passwordlength&&(
              <Text   style={styles.errormsg} >
                {errors.passwordlength}
              </Text>
             )
           }
           </View>
           <TextInput
        style={styles.inputbox}
        value={values.passwordlength}
        onChangeText={handleChange('passwordlength')}
        // placeholder="Ex. 8"
        enablesReturnKeyAutomatically
        keyboardType='numeric'/>
           </View> 
           <View style={styles.checkbox} >
            <Text style={styles.questiontext} >Include LowerCase:</Text>
          <BouncyCheckbox
          isChecked={lowercase}
          size={35}
          fillColor="green"
          unFillColor='#FFFFFF'
          onPress={() => setlowercase(!lowercase)}
          disableText/>
         </View>
           <View style={styles.checkbox} >
            <Text style={styles.questiontext} >Include upperCase:</Text>
          <BouncyCheckbox
          isChecked={uppercase}
          size={35}
          fillColor="#f15a22"
          unFillColor='#FFFFFF'
          onPress={() => setuppercase(!uppercase)}
          disableText/>
         </View>
           <View style={styles.checkbox} >
            <Text style={styles.questiontext} >Include Numbers:</Text>
          <BouncyCheckbox
          isChecked={numbers}
          size={35}
          fillColor="#4a15ad"
          unFillColor='#FFFFFF'
          onPress={() => setnumbers(!numbers)}
          disableText/>
         </View>
           <View style={styles.checkbox} >
            <Text style={styles.questiontext} >Include Symbols:</Text>
          <BouncyCheckbox
          isChecked={symbols}
          size={35}
          fillColor="#392e4a"
          unFillColor='#FFFFFF'
          onPress={() => setsymbols(!symbols)}
          disableText/>
         </View>
        </View>
        <View style={styles.buttonscontainer} >
         <TouchableOpacity 
         onPress={handleSubmit} 
         disabled={!isValid}
        style={styles.generate} > 
          <Text  style={styles.generatebtn}>Generate</Text>
         </TouchableOpacity>
         <TouchableOpacity
          style={styles.generate}
          onPress={reset}> 
          <Text  style={styles.generatebtn}>Reset</Text>
           </TouchableOpacity>
          </View>
       </>
       )}
     </Formik>
 <View>
{
  ispasswordset?
    (   
    <View  style={styles.outputcontainer} >
      <Text  style={styles.password} >Password:</Text>
      <Text selectable style={styles.password} >{password}</Text>
      <Text style={styles.copy} >Longpress Password to Copy it</Text>
    </View>
  ):null
}
 </View>
 <TouchableOpacity onPress={aboutme} style={styles.aboutmecontainer} >
        <Text style={styles.aboutme} >About me</Text>
      </TouchableOpacity>
      {
        Aboutme?(
          <Actioncard/>
        ):null
      }
      
  </View>
  )
}

const styles = StyleSheet.create({
  aboutmecontainer:{
    backgroundColor:'#1b998b',
    height:60,
    width:150,
    marginHorizontal:130,
    marginTop:20
      },
      aboutme:{
        fontSize:25,
        textAlign:'center',
      paddingTop:10,
      color:"#fffd82",
      fontWeight:'bold'
      },
container:{
marginVertical:30,
flex:1,
},
heading:{
fontSize:55,
fontWeight:'bold',
textAlign:'center',
color:'#3F403F'
},
inputcontainer:{
  marginVertical:30,
  backgroundColor:'#c3ff68',
  // marginHorizontal:5 
},
inputwrapper:{
flexDirection:'row'
},
questiontext:{
fontSize:20,
fontWeight:'bold',
marginLeft:9,
marginTop:5,
color:'#1B998B'
},
inputcoloumn:{

},
inputbox:{
fontSize:20,
marginLeft:85,
height: 40,
width:75,
margin: 12,
padding: 10,
position:'static',
backgroundColor:'white',
borderColor:'#4E5283',
borderWidth:3,
borderRadius:5
},
checkbox:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginBottom:15,
  alignItems:'center'
},
errormsg:{
color:'red',
width:235,
marginLeft:10,
paddingLeft:8
},
buttonscontainer:{
  flexDirection:'row',
  justifyContent:'space-evenly'
},
generate:{
  backgroundColor:'#1b998b',
  height:60,
  width:150
},
generatebtn:{
  fontSize:25,
  textAlign:'center',
paddingTop:10,
color:"#fffd82",
fontWeight:'bold'
},
outputcontainer:{
  backgroundColor:'#fcca46',
  height:125,
  marginTop:50,
  marginHorizontal:9,
  flexDirection:'row',
  flexWrap:'wrap',
  elevation:4,
  shadowOffset:{
     width:2,
     height:2
  },
  borderRadius:10,
},
password:{
fontSize:24,
marginVertical:16,
fontWeight:'bold',
color:'#3F403F',
marginHorizontal:5
},
copy:{
marginHorizontal:10,
fontSize:20
}
})