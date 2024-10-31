import { Text, View,TouchableOpacity,TextInput,StyleSheet,Button,Radio } from 'react-native';
import React,{useState} from 'react';
import { firebase } from '../config';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';



const Registration=() => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [firstName,setFirstName]= useState('')
  const [lastName, setLastName]= useState('')

  let [fontsLoaded]=useFonts({
    'NothingYouCouldDo-Regular':require('./../assets/fonts/NothingYouCouldDo-Regular.ttf'),
    'Abel-Regular' :require('./../assets/fonts/Abel-Regular.ttf'),
      'Arsenal-Regular' :require('./../assets/fonts/Arsenal-Regular.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>;
   }

  registerUser=async(email,password,firstName,lastName)=>{
    await firebase.auth().createUserWithEmailAndPassword(email,password,firstName,lastName)
    .then(()=>{
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp:true,
        url:'https://test-d6c32.firebaseapp.com',
      })
      .then(()=>{
        alert('verificando el email enviado')
      }).catch((error)=>{
        alert(error.message)
      })
      .then(()=>{
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set({
          firstName,
          lastName,
          email,
        })
      })
      .catch((error)=>{
        alert(error.message)
      })
    })
    .catch((error)=>{
      alert(error.message)
    })
  }
 return(
  <View style={styles.container} >
    

    <View style={{marginTop:100}}>
       <TextInput
          style={styles.textInput}
          placeholder="Nombres"
          onChangeText={(firstName)=>setFirstName(firstName)}
          autoCorrect={false}
       />
       <TextInput
          style={styles.textInput}
          placeholder="Apellidos"
          onChangeText={(lastName)=>setLastName(lastName)}
          autoCorrect={false}
       />

       <TextInput
          style={styles.textInput}
          placeholder="email"
          onChangeText={(email)=>setEmail(email)}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
       />

       <TextInput
          style={styles.textInput}
          placeholder="contraseña"
          onChangeText={(password)=>setPassword(password)}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
       />

    </View>
    <TouchableOpacity 
        onPress={()=>registerUser(email,password,firstName,lastName)}
        style={styles.button}
    >
      <Text style={{fontFamily: 'Abel-Regular',fontSize:26}}>Register</Text>
    </TouchableOpacity>
  </View>
 )

}

export default Registration



const styles=StyleSheet.create({
  container:{
      flex :1,
      alignItems:'center',
      marginTop:0,
      backgroundColor:'#D9D9D9'

  },
  textInput:{
      paddingTop:20,
      paddingBottom:10,
      width:300,

    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'#000',
    marginBottom:10,
    textAlign:'center'
  
  },
  button:{
    marginTop:40,
    height:50,  /* 42*/
    width:200,   /* 267*/
    backgroundColor: '#EC952A',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:14,
  }
})