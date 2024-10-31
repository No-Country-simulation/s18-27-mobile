
import { Text , TouchableOpacity,StyleSheet } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';


const Button=(props)=>{

  let [fontsLoaded]=useFonts({
    'NothingYouCouldDo-Regular':require('./../../assets/fonts/NothingYouCouldDo-Regular.ttf'),
    'Abel-Regular' :require('./../../assets/fonts/Abel-Regular.ttf'),
      'Arsenal-Regular' :require('./../../assets/fonts/Arsenal-Regular.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>;
   }
 return (<TouchableOpacity style={styles.container} {...props}>
    <Text style={styles.text}>{props.children + " "}</Text>
    
 </TouchableOpacity>)
}




const styles=StyleSheet.create({
  container:{
      height:60,
      width:'70%',
      flexDirection:'row',
      alignItems:'center',
       justifyContent: 'center',
      borderRadius:15,
      backgroundColor:"#EC952A" +"cc",

  },
  
  text: {
    fontSize: 30,
    color:'black',
    fontFamily:'Abel-Regular'
  },


});

export default Button;