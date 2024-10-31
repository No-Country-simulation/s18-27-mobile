import { Text, View ,TouchableOpacity,TextInput,StyleSheet,Image } from 'react-native';
import React, {useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';


import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';






const Login =() => {
    const navigation= useNavigation()
    const [email,setEmail]= useState('')
    const [password, setPassword]=useState('')
   

    const [checked, setChecked] = React.useState(true);
     const toggleCheckbox = () => setChecked(!checked);




  let [fontsLoaded]=useFonts({
    'NothingYouCouldDo-Regular':require('./../assets/fonts/NothingYouCouldDo-Regular.ttf'),
    'Abel-Regular' :require('./../assets/fonts/Abel-Regular.ttf'),
      'Arsenal-Regular' :require('./../assets/fonts/Arsenal-Regular.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>;
   }


    

    


  loginUser=async(email,password) =>{


    


    try{
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential)=>{
      const user =userCredential.user;
      
        }).catch((error)=>{
        alert(error.message)
      })
         
    } catch(error){
        alert(error.message)
        /*console.log('el usuario no esta registrado')*/
        handleMessage
    }
  }
return(
    <View style={styles.container}>
     
      

      

      <View style={{marginTop:100}}>
          <TextInput style={styles.textInput}
                    placeholder="Email"
                    onChangeText={(email)=> setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
          />

          <TextInput style={styles.textInput}
                    placeholder="contraseña"
                    onChangeText={(password)=> setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
          />

      </View>
      <TouchableOpacity  
        onPress={() =>loginUser(email,password) } style={styles.button}>
        <Text style={{fontFamily:'Abel-Regular', fontSize:26}}> Iniciar sesion</Text>
      </TouchableOpacity>
      
     
   


      <View style={{
            paddingVertical: 8,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
            marginTop:10
        }}>

         <Text style={{ fontFamily:'Abel-Regular',fontSize:15,marginRight:9}}> no tienes cuenta?</Text>
          <TouchableOpacity onPress={() =>navigation.navigate('Registration')}>
          <Text style={{fontFamily:'Abel-Regular',fontWeight:'bold', fontSize:14}}>registrate aqui</Text>
          
          </TouchableOpacity>
          
        </View>



      
    </View>

)


}

export default Login

const styles=StyleSheet.create({
    container:{
        flex :1,
        backgroundColor:'#D9D9D9',
        alignItems:'center',
        marginTop:0,

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
