import { Text, View, StyleSheet,TextInput,SafeAreaView,TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import AntDesign from '@expo/vector-icons/AntDesign';

// You can import from local files


// or any pure javascript modules available in npm





const Dashboard=() => {
  const navigation= useNavigation()
  const [user,setUser]=useState('')
  const [name,setName]=useState('')
  useEffect(()=>{
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=>{
      if(snapshot.exists){
        setUser(snapshot.data())
        console.log(user)
      }
      else{
        console.log('user does not exist')
      }
    })
  },[])



  let [fontsLoaded]=useFonts({
    'NothingYouCouldDo-Regular':require('./../assets/fonts/NothingYouCouldDo-Regular.ttf'),
    'Abel-Regular' :require('./../assets/fonts/Abel-Regular.ttf'),
      'Arsenal-Regular' :require('./../assets/fonts/Arsenal-Regular.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>;
   }

   const [inputValue, setInputValue] = React.useState('');
 return(
  
  /*<Text style={{fontSize:20,fontWeight:'bold'}}>
      Hello,{user.firstName}
    </Text>*/
<View style={styles.container}>
<View style={{marginTop:30}}>
   
    <TouchableOpacity
      onPress={()=>{firebase.auth().signOut()}}
      style={styles.button1}
    >
      <Text style={{fontSize:25,fontFamily:'Abel-Regular'}}>
         cerrar sesion
      </Text >
    </TouchableOpacity>

  </View>

<View style={styles.container}>
      <View style={styles.circle}>
        <View style={styles.circle1}>
        <AntDesign name="check" size={60} color="black" />
        </View>
        
        <Text style={{fontSize:30,marginTop:40,fontFamily:'Abel-Regular',marginVertical:10}}> {name.firstName}, su registro se completó con éxito!</Text>
        <TouchableOpacity   onPress={() =>navigation.navigate('elegir_area')}  style={styles.button}>
          <Text style={styles.buttonText}>Empezar</Text>
        </TouchableOpacity>

        
        <View style={{
            paddingVertical: 7,
            paddingHorizontal: 7,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
            marginTop:0
        }}>
          <AntDesign name="team" size={24} color="black" />
         <Text style={{fontSize:30,fontFamily:'Abel-Regular',marginRight:7,marginLeft:7}}>Acceder a mi perfil</Text>
        
          <AntDesign name="right" size={32} color="black" marginLeft/>
        </View>
      </View>

      
    </View>

</View>




 )

}

export default Dashboard

const styles=StyleSheet.create({
  container:{
      flex :1,
      alignItems:'center',
      marginTop:20,

  },
  textInput:{
      paddingTop:20,
      paddingBottom:10,
      width:400,

    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'#000',
    marginBottom:10,
    textAlign:'center'
  
  },
  button1:{
    marginTop:120,
    height:50,  /* 42*/
    width:200,   /* 267*/
    backgroundColor: '#D9D9D9',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:14,
  },
  circle: {
    width: 370,
    height: 450,
    borderRadius: 30,
    backgroundColor: '#EC952A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  circle1: {
    width: 77,
    height: 77,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:0,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#00ccff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  button: {
    height:42,  /* 42*/
    width:267, 
    backgroundColor: '#D9D9D9',
    padding: 3,
    borderRadius: 5,
    marginTop:30,
    marginVertical:95,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText: {
    color: 'black',
    fontFamily:'Abel-Regular',
    fontSize:30,
    
  },
  circleText: {
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 0,
  },
  
  
})