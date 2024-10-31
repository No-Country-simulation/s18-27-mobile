import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React,{useState,useEffect} from 'react';
import { firebase } from "./config";

import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";
import home from "./src/home";
import home1 from "./src/home1";
import elegir_area from "./src/elegir_area"
import Lenguajes from "./src/Lenguajes"


import {useFonts} from 'expo-font';
import * as Font from 'expo-font';
import { View } from "react-native-web";
import {AppLoading} from 'expo'










const Stack=createStackNavigator();




function App(){
  const [initializing,setInitializing]=useState(true);
  const [user,setUser]=useState();
  
  const [fontsLoaded,setFontsLoaded]=useState(false);






  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }
useEffect(() =>{
  const subcriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  return subcriber ;
}, []);
if (initializing) return null;
if(!user){
  return(

    

    <Stack.Navigator>
    <Stack.Screen 
      name="home" 
      component={home}
      options={{
        headerShown: false,
    }}
      />

<Stack.Screen 
      name="home1" 
      component={home1}
      options={{
        headerShown: false,
    }}
      />



      <Stack.Screen 
      name="Login" 
      component={Login}
      options={{
        headerTitle: () => <Header name=""/>,
        headerStyle:{
          height:80,
          borderBottomLeftRadius:0,
          borderBottomRightRadius:0,
          backgroundColor:'#D9D9D9',
          elevation:25
        }
    }}
      />

<Stack.Screen 
      name="Registration" 
      component={Registration}
      options={{
        headerTitle: () => <Header name=""/>,
        headerStyle:{
          height:80,
          borderBottomLeftRadius:0,
          borderBottomRightRadius:0,
          backgroundColor:'#D9D9D9',
          elevation:25
        }
      }}
      />




    </Stack.Navigator>
  );
}
 
 return(
  <Stack.Navigator>
      <Stack.Screen 
      name="Dashboard" 
      component={Dashboard}
      options={{
        headerTitle: () => <Header name=""/>,
        headerStyle:{
          height:80,
          borderBottomLeftRadius:0,
          borderBottomRightRadius:0,
          backgroundColor:'#D9D9D9',
          ShadowColor: '#000',
          elevation:25
        }
      }}
      />


<Stack.Screen 
      name="elegir_area" 
      component={elegir_area}
      options={{
        headerTitle: () => <Header name=""/>,
        headerStyle:{
          height:80,
          borderBottomLeftRadius:0,
          borderBottomRightRadius:0,
          backgroundColor:'#D9D9D9',
          elevation:25
        }
      }}
      />  


<Stack.Screen 
      name="Lenguajes" 
      component={Lenguajes}
      options={{
        headerTitle: () => <Header name=""/>,
        headerStyle:{
          height:80,
          borderBottomLeftRadius:0,
          borderBottomRightRadius:0,
          backgroundColor:'#D9D9D9',
          elevation:25
        }
      }}
      /> 
  </Stack.Navigator>
 );

}

export default() =>{
 const [fontsLoaded,setFontsLoaded]=useState(false)
 if (fontsLoaded){

 }


  return (
  
  
  <NavigationContainer>

    <App/>
  </NavigationContainer>)
}