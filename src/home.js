import { Text, View, StyleSheet,SafeAreaView,TouchableOpacity ,Image} from 'react-native';
import React,{useState,useEffect} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';


const home=({navigation}) => {

  let [fontsLoaded]=useFonts({
    'NothingYouCouldDo-Regular':require('./../assets/fonts/NothingYouCouldDo-Regular.ttf'),
    'Abel-Regular' :require('./../assets/fonts/Abel-Regular.ttf'),
      'Arsenal-Regular' :require('./../assets/fonts/Arsenal-Regular.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>;
   }


   

 return(
    <View style={styles.container}>
     
     <Text style={{fontFamily:'NothingYouCouldDo-Regular', fontSize:30,marginTop:35 ,textAlign:'center'}} > Bienvenidos a </Text>

<Image  source={require('../assets/logo.png')}  style={{width:259 ,height:143,marginTop: 50}  }/>

<Text style={{fontFamily:'NothingYouCouldDo-Regular', fontSize:30,marginTop:50,textAlign:'center'}} > Descubri tu nivel </Text>

<View style={{marginTop:20}}>
    
<TouchableOpacity  
  onPress={() =>navigation.navigate('home1')} style={styles.button}>
  <Text style={{ fontFamily:'Abel-Regular', fontSize:30}}> Ingresar</Text>
</TouchableOpacity>





        </View>

        <Text style={{fontFamily:'Arsenal-Regular', fontSize:17,marginTop:13,textAlign:'center'}} > Solo para seguir tu progreso </Text>
    
    
  </View>
 )

}
/*26, image width:269 heiht: 143   */
export default home

const styles=StyleSheet.create({
  container:{
      flex :1,
      alignItems:'center',
      marginTop:100,

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

  
  button:{
    marginTop:40,
    height:42,  /* 42*/
    width:267,   /* 267*/
    backgroundColor: '#EC952A',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:14,
  }
})