import React from 'react';
import { ActivityIndicator, ListView, Text, View, Button, TextInput, WebView} from 'react-native';


class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class ListScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      }
    }
  

    static navigationOptions = {
        title : "Web View Facebook",
        headerLeft: null
    };

    componentDidMount() {
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson.movies),
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render(){
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
  
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
          />
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