import React from 'react';
import { ActivityIndicator ,ReactRawTextShadowNode ,setState ,ToastAndroid, Text, View, Button, TextInput, ProgressBar, MyLoadingComponent} from 'react-native';
import { NavigationActions } from 'react-navigation';
import FirstScreen from './FirstScreen';

export default class TimerScreen extends React.Component {

    static navigationOptions = {
        title : "Timer Screen",
        headerLeft: null
    };

    constructor(props){
        super(props);
        this.state = {
          timePassed: false
        };
    }

    componentDidMount(){
        var { navigate } = this.props.navigation;
         // Start counting when the page is loaded
         this.timeoutHandle = setTimeout(()=>{
              // Add your logic for the transition
              navigate('FirstScreen')
         }, 5000);
    }

    componentWillUnmount(){
         clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }


    render(){
        // var { navigate } = this.props.navigation;
        //
        //
        // setTimeout(() => {this.setState({timePassed: true}), navigate('FirstScreen')}, 3000)
        return(
            <View style={styles.wrapper}>
                <ActivityIndicator />
            </View>
        );
        // if (!this.state.timePassed){
        //     return(
        //         <View style={styles.wrapper}>
        //             <Text style={styles.title}>Hello, You are in home</Text>

        //             <ActivityIndicator style={{marginTop: 50}} />
        //         </View>
        //     );
        // }else{
        //     return(
        //     <View style={styles.wrapper}>

        //     </View>
        //     );
        // }
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
