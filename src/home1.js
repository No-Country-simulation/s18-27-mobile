import { Text, View, StyleSheet,SafeAreaView,TouchableOpacity ,Image,Button} from 'react-native';
import React,{useState,useEffect} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import { CheckBox } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const home=({navigation}) => {


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

  
 return(
    <View style={styles.container}>
     
     <Image  source={require('../assets/logo.png')}  style={{width:208 , height:114,marginTop: 29}  }/>

<TouchableOpacity  
  onPress={() =>navigation.navigate('Registration')} >
   <Text style={{fontFamily:'NothingYouCouldDo-Regular' ,fontSize:20,marginTop:29}} > crea tu cuenta para continuar </Text>
</TouchableOpacity>




 
<TouchableOpacity  
  onPress={() =>navigation.navigate('Login')} style={styles.button}>
  <Text style={{fontFamily:'Abel-Regular', fontSize:26}}> iniciar sesion con e-mail</Text>
</TouchableOpacity>
  





<View style={{
            paddingVertical: 8,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
            marginTop:10
        }}>
          <TouchableOpacity onPress={() =>navigation.navigate('Registration')}>
           <Text style={{fontFamily:'Abel-Regular', fontSize:26,marginRight:50}}> Olvidé mi contraseña</Text>
          
          </TouchableOpacity>
          <AntDesign name="right" size={32} color="black" marginLeft/>
        </View>






<Text style={{fontFamily:'NothingYouCouldDo-Regular', fontSize:15,marginTop:180,marginLeft:15,marginRight:10}}> Al usar nuestro servicios usted está 
de acuerdo con nuestra</Text>

<CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           // Use ThemeProvider to make change for all checkbox
           title='Politicas de privacidad y condiciones de uso'
           marginTop={2}
           
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="gray"
           alignItems='center'
         />
  

      

    
    
    
  </View>
 )

}
/* primer text 20 , la segunda 17*/
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
    marginTop:50,
    height:42,
    width:307,
    backgroundColor: '#EC952A',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:14,
  },

  titli: { fontSize: 18, margin: 20, color: "#cd000f"},
})