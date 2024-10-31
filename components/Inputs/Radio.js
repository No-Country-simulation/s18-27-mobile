import { Text,View,TouchableOpacity,StyleSheet } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';


const Radio=({options,checkedValue,onChange  ,style})=>{
    
  let [fontsLoaded]=useFonts({
    'NothingYouCouldDo-Regular':require('./../../assets/fonts/NothingYouCouldDo-Regular.ttf'),
    'Abel-Regular' :require('./../../assets/fonts/Abel-Regular.ttf'),
      'Arsenal-Regular' :require('./../../assets/fonts/Arsenal-Regular.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>;
   }

    return(<View style={[styles.container,style]}>

         {options.map((option) =>{
          let active =checkedValue==option.value;


            return(
                <TouchableOpacity style={active ? [styles.radio,styles.activeRadio]  : styles.radio} onPress={()=>{onChange(option.value);}}
                 key={option.value} >
                    <MaterialIcons name={active ? 'radio-button-checked' : "radio-button-unchecked"} 
                    size={24} 
                    color={active ? "#06b6d4":"#6b7280"}/>
                    <Text style={ active ? [styles.text,styles.activeText] :styles.text} >{option.label}</Text>
                </TouchableOpacity>
            )
         }
        )}

    </View>)

};




const styles=StyleSheet.create({

  container:{
  width:'100%',
  marginTop:50
  },
  radio:{

      height:40,
      width:'100%',
      flexDirection:'row',
      backgroundColor: '#D9D9D9',
      alignItems:'center',
      marginBottom:10,
      paddingHorizontal:15,
      borderRadius:15,
    },
    activeRadio: {
      backgroundColor: '#06b6d4'+'11',
    },
    text: {
      fontSize: 24,
      marginLeft: 15,
      fontFamily:"Abel-Regular",
      color:'#6b7280'
    },
    activeText: {
      color: '#374151',
    },
   
});

export default Radio;