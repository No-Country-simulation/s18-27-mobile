import { Text, View, StyleSheet,SafeAreaView,TouchableOpacity ,Image} from 'react-native';
import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Radio } from '../components/Inputs';
import { CheckBox } from '@react-native-community/checkbox';
import { Button } from '../components/Buttons';
import {MaterialIcons} from "@expo/vector-icons";





const elegir_area=({navigation}) => {


  
  const toggleCheckbox = () => setChecked(!checked);

  

  const [fruit,setFruit] = useState("");




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
     
    


<Text style={{fontFamily:'NothingYouCouldDo-Regular', fontSize:30,marginTop:2,marginLeft:15,marginRight:10}}> Ahora elegí tú área 
por descubrir..</Text>


<Radio options={[
  {label:'Lenguajes de programacion',value:'Lenguajes'},
  {label:'Desarrollo Web',value:'Desarrollo'},
  {label:'Desarrollo app mobile',value:'Desarrollo_app_mobile'},
  {label:'Base de Datos',value:'Base_de_Datos'},
  {label:'Inteligencia Artificial',value:'Inteligencia_Artificial'},
  {label:'Ciberseguridad',value:'Ciberseguridad'},
  {label:'Q.A Tester',value:'QA_Tester'},
]}
checkedValue={fruit}
onChange={setFruit}
style={{marginBottom:11}}

/>

<Button onPress={() =>navigation.navigate(`${fruit}`)}> acceder</Button>







    


         


         
  

      

    
    
    
  </View>
 )

}
/* primer text 20 , la segunda 17*/
export default elegir_area

const styles=StyleSheet.create({
  container:{
      flex :1,
      alignItems:'center',
       justifyContent: 'center',
      marginTop:2,

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
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },


})