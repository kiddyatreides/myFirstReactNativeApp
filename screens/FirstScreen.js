import React from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';


export default class FirstScreen extends React.Component {

    static navigationOptions = {
        title : "First Screen",
        color: "#AA00FF"
    };

    render(){
        var { navigate } = this.props.navigation;
        return (
            <View style={styles.wrapper}>
              <Text style={styles.title}>Hello World</Text>
              <Text style={styles.subtitle}>Powered by React Native</Text>
              <Text style={styles.owner}>Create by Kiddy</Text>
              <Text style={{marginTop:25, color: 'white'}}>Login</Text>
              <TextInput
               style={styles.textInput}
               placeholder="Input Username...."
               />
               <TextInput
                style={styles.textInput}
                placeholder="Input Password....."
                secureTextEntry={true}
                />
                <View style={{marginTop:25}}>
                  <Button
                    onPress={() => navigate('SecondScreen')}
                    title="Login"
                    color="#841584"
                  />
                </View>
            </View>
          );
    }

}

const styles={
    textInput:{
      height: 55, width: 190, alignSelf: 'center', marginTop: 10,  borderRadius: 4,
      borderWidth: 0.5,borderBottomColor:'white',
      color: 'white',
      borderColor: '#d6d7da', padding: 10
    },
    wrapper:{
       backgroundColor:'#2980b9', flex:1, justifyContent:'center', alignItems:'center', padding:10
    },
    title:{
      color:'white',
      fontSize:24,
      fontWeight:'bold'
    },
    subtitle:{
      color:'white',
      fontSize:17,
      fontWeight:'200',
      marginTop: 10
    },
    owner:{
      color:'white', fontSize:12, fontWeight: '100', marginTop: 5
    }
  }