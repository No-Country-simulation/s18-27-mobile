import { ScrollView,FlatList , Text, View, StyleSheet,TextInput,SafeAreaView,TouchableOpacity,Button, Alert} from 'react-native';
import React,{useState,useEffect,useCallback, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import YoutubePlayer from "react-native-youtube-iframe";
4
import { Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// You can import from local files


// or any pure javascript modules available in npm





const Lenguajes=({navigation}) => {
  
 
  
  let [fontsLoaded]=useFonts({
    'NothingYouCouldDo-Regular':require('./../assets/fonts/NothingYouCouldDo-Regular.ttf'),
    'Abel-Regular' :require('./../assets/fonts/Abel-Regular.ttf'),
      'Arsenal-Regular' :require('./../assets/fonts/Arsenal-Regular.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>;
   }

   

  const [playing, setPlaying] = useState(false);
  const [isMute, setMute] = useState(false);
  const controlRef = useRef();
  
  const reproducir = (estado) => {
    
        if (estado === '84WIaK3bl_s') {
         
          setPlaying((prev) => !prev);
    
        }
   
        if (state !== 'playing') {
    
          setPlaying(false);
    
        }
    
      };
    
      const togglePlaying = () => {
   
        setPlaying((prev) => !prev);
   
      };
    
      
    const data=[
      {id:1,
      title: 'java desde cero',
      url:'L1oMLsiMusQ'},

      {id:2,
        title: 'python desde cero',
        url:'DAdRO6ByBoU'},

        {id:3,
          title: 'java avanzado',
          url:'3BMrpuzDWes'},
          {id:4,
            title: 'python avanzado',
            url:'L_uSbumFspA'},
            {id:5,
              title: 'C#',
              url:'L-f8u0hwi4Y'},

    ];
   
    const dataa=[
      {ide:1,
      title: 'java para beginner'},
      

      {id:2,
        title: 'python para beginer',
        },

        {id:3,
          title: 'C# para principiantes',
          url:'3BMrpuzDWes'},
          {id:4,
            title: 'Java y HTML para principiantes',
            url:'L_uSbumFspA'},
            {id:5,
              title: 'C#',
              },

    ];
     
  


  





 return(
  
  /*<Text style={{fontSize:20,fontWeight:'bold'}}>
      Hello,{user.firstName}
    </Text>*/
<View >











        <Text style={{fontSize:20,fontFamily:'Abel-Regular',marginLeft:7}}>Acceder a mis videos</Text>
        
     
        <FlatList data ={data}  horizontal renderItem={({item})=>
            
        <View style={styles.circle}>
          <AntDesign name="playcircleo" size={24} color="black" />
         <Text style={{fontSize:7,fontFamily:'Abel-Regular',marginLeft:7,color:'white'}}>Java para principiantes !!</Text>

         </View >
}/>


      
        
        
       

        <Text style={{fontSize:20,fontFamily:'Abel-Regular',marginLeft:7}}> mis videos en curso</Text>

       
<FlatList data ={data}  renderItem={({item})=>{
  return <View style={styles.container}>
    
  < YoutubePlayer
height={350}
width={360}

play={false}
videoId={item.url}
/>
<Text style={{color:'white'}}>{item.title}</Text> 

</View>}} keyExtractor={item=>{item.id.toString()}}/>







        
        
      

   
      


</View>




 )

}

export default Lenguajes

const styles=StyleSheet.create({
  container:{
      backgroundColor:'black',
      marginVertical:10,
      marginHorizontal:16,
      justifyContent:'center',
      alignItems:'center',
      padding: 1,
      paddingBottom:0,
      borderRadius:6

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
    width: 100,
    height: 70,
    borderRadius: 12,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft:20,
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
  container1: {
       marginTop:4,
        flex: 1,
        alignContent:'center',
        alignItems:'center',
        backgroundColor: 'black',
    
      },
    
      container2: {
        marginTop:5,
        marginLeft:40,
        marginRight:30,
         flex: 1,
         alignItems:'center',
         
         
     
       },
    
      controlContainer: {
    
        flexDirection: 'row',
    
        justifyContent: 'space-around',
    
      },
  
  
})

/*<View style={{
            paddingVertical: 7,
            paddingHorizontal: 7,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
            marginTop:0
        }}>
         <AntDesign name="playcircleo" size={24} color="black" />
         <View style={styles.circle}>
         <Text style={{fontSize:7,fontFamily:'Abel-Regular',marginLeft:7,color:'white'}}>Java para principiantes !!</Text>

         </View > */