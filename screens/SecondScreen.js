import React from 'react';
import {ReactRawTextShadowNode ,setState ,ToastAndroid, Text, View, Button, TextInput, ProgressBar, MyLoadingComponent} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class SecondScreen extends React.Component {

    static navigationOptions = {
        title : "Second Screen",
        headerLeft: null
    };


    render(){
        var { navigate } = this.props.navigation;
        var { dispatch } = this.props.navigation;

        const navigateAction = NavigationActions.navigate({
            routeName: 'FourthScreen',
            params: {},
            action: NavigationActions.navigate({routeName: 'FourthScreen'})
        });

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'FourthScreen' }),
            ],
          });
            
            
        return(
            <View style={styles.wrapper}>
                <Text style={styles.title}>Hello, You are in home</Text>
                <Text style={styles.subtitle}>Powered by React Native</Text>
                <Text style={styles.owner}>Create by Kiddy</Text>
                <View style={{marginTop:25}}>
                <Button
                    onPress={() => this.props.navigation.dispatch(resetAction)}
                    title="WebView Facebook"
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