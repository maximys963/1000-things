import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";



export default class Profile extends Component{
  static navigationOptions= {
    title: "John Doe",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
  };
  constructor(props){
    super(props);
}
  render(){
    return(

      <View style={styles.container}>

          <Image
              style={{
                width: 120,
                height: 120,
                marginTop: 30,
               marginBottom: 30,
              }}
              source={require('../../logo/user.png')}
                />
              <Text
                style={{
                  marginBottom: 20,
                  fontSize: 20,
                }}
                >"Lorem ipsum dolor"</Text>
               <ButtonR style={styles.mainButton}
                 textStyle={{color:"white"}}
                 >Take task</ButtonR>
                <View style={styles.menuBar}>
                <View style={styles.menuButton1}>
                  <Text style={{alignSelf:'center'}}>5</Text>
                  <Text style={{alignSelf:'center'}}>achives</Text>
                </View>
                <View  style={styles.menuButton2}>
                  <Text style={{alignSelf:'center'}}>4</Text>
                  <Text style={{alignSelf:'center'}}>publication</Text>
                </View>
                <View  style={styles.menuButton3}>
                <Text style={{alignSelf:'center'}}>5</Text>
                <Text style={{alignSelf:'center'}}>followers</Text>
            </View>
            </View>

      </View>

    );
  }
}
const styles  = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  menuBar:{
    flexDirection: 'row',
    height:60
  },
  menuButton1:{
    borderColor: '#7f8c8d',
     borderRadius: 0,
     width:110,
     height:60,
     borderStyle: 'solid',
     borderWidth: 1,
    marginRight: -2,
   justifyContent: 'center',
      flexDirection:'column',
 },

menuButton2:{
  borderColor: '#7f8c8d',
  borderRadius: 0,
  width:110,
  height:60,
  borderStyle: 'solid',
  borderWidth: 1,
   justifyContent: 'center',
      flexDirection:'column',
 },
 menuButton3:{
   borderColor: '#7f8c8d',
  borderRadius: 0,
  width:110,
  height:60,
  borderStyle: 'solid',
  borderWidth: 1,
  marginLeft: -1,
   justifyContent: 'center',
   flexDirection:'column',
   },
   mainButton:{
     borderRadius: 0,
     width: 140,
     height: 50,
     alignSelf: 'center',
     backgroundColor: '#27ae60',
     borderColor: '#27ae60',
     marginBottom: 20,



   }






});
