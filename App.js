import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';

const App = StackNavigator({
  FirstScreen : {screen: FirstScreen},
  SecondScreen : {screen: SecondScreen},
  ThirdScreen : {screen: ThirdScreen},
  FourthScreen : {screen: FourthScreen},
});

export default App;
