import React from 'react';
import {Text, View, Button, TextInput, WebView} from 'react-native';

export default class ThirdScreen extends React.Component {
    static navigationOptions = {
        title : "Web View Facebook",
    };

    render(){
        return(
          <WebView
            source={{uri: 'https://m.facebook.com'}}
            style={{marginTop: 20}}
          />
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
       backgroundColor:'#AA00FF', flex:1, justifyContent:'center', alignItems:'center', padding:10
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