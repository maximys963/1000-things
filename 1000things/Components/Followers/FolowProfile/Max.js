import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, ScrollView, ImageBackground, Animated, Easing} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";



export default class Max extends Component{
  static navigationOptions= {
    title: "Max",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
    header: null,
  };
  constructor(props){
    super(props);
}
render(){
    var {navigate} = this.props.navigation;
  return(

    <View  style={styles.container}>

      <ImageBackground
        style={{ height: 300, marginBottom:-25, justifyContent:'center', alignItems: 'center', }}
        source={require('./riverblur.jpg')}
        >
        <Image
            style={{
              width: 170,
              height: 170,
              marginTop: 10,
             marginBottom: 10,
            }}
            source={require('./photos/Max512.png')}
              />
            <Text style={{fontSize:24, color: 'white'}}>Панасенко Максим</Text>
            <Text
              style={{
                marginBottom: 20,
                fontSize: 20,
                color: 'white',
              }}
              >"Labor improbus"</Text>
            </ImageBackground>
            <View style={styles.mainButton}
               ><Text style={{fontSize:16, color: 'white'}}

               >Додати</Text></View>
              <View style={styles.menuBar}>
              <View style={styles.menuButton1}>
                <Text style={{alignSelf:'center', fontSize:18,}}>4</Text>
                <Text style={{alignSelf:'center'}}

                  onPress={
                    ()=> navigate("Achiv",{})
                  }
                  >досягнень</Text>
              </View>
              <View style={styles.separ}/>
              <View  style={styles.menuButton2}>
                <Text style={{alignSelf:'center', fontSize:18,}}>3</Text>
                <Text style={{alignSelf:'center'}}
                  onPress={
                    ()=> navigate("DoePublications",{})
                  }
                  >публікацій</Text>
              </View>
              <View style={styles.separ}/>
              <View  style={styles.menuButton3}>
              <Text style={{alignSelf:'center', fontSize:18,}}>4</Text>
              <Text style={{alignSelf:'center'}}
                onPress={
                  ()=> navigate("DoeFollowers",{})
                }

                >друзів</Text>
          </View>
          </View>
          <ScrollView style={styles.storyContainer}
            horizontal={true}

            >
            <Image style={styles.story}
             source={require('./MaxST/Max4.jpg')}
              ></Image>
            <Image style={styles.story}
              source={require('./MaxST/Max2.jpg')}
              ></Image>
            <Image style={styles.story}
              source={require('./MaxST/Max3.jpg')}
              ></Image>
            <Image style={styles.story}
              source={require('./MaxST/Max1.jpg')}
              ></Image>


          </ScrollView>

    </View>

  );
}
}
const styles  = StyleSheet.create({
  separ:{
    height:40,
    width:3,
    borderRadius:60,
    backgroundColor: 'grey',
  },
  story:{

    width:160,
    height: 190,
    borderRadius: 25,
    marginRight:3,
    marginLeft:3,
  },
  storyContainer:{
    marginTop: 15,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },

  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
    // justifyContent: 'flex-start',
    // alignItems: 'center',

  },
  menuBar:{
    flexDirection: 'row',
    height:60,
    width: window.width,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuButton1:{
     height:60,
   justifyContent: 'center',
      flexDirection:'column',
      alignContent: 'center',

 },

menuButton2:{
  height:60,
   justifyContent: 'center',
   alignContent: 'center',
      flexDirection:'column',
 },
 menuButton3:{
  height:60,
   justifyContent: 'center',
   flexDirection:'column',
   alignContent: 'center',

   },
   mainButton:{
     borderRadius: 25,
     width: 180,
     height: 45,
     // alignSelf: 'center',
     backgroundColor: '#27ae60',
     borderColor: '#27ae60',
     marginBottom: 20,
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center'
   }






});
