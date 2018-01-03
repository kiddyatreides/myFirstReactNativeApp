import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';
import ListScreen from './screens/ListScreen';
import TimerScreen from './screens/TimerScreen';

const App = StackNavigator({
  FirstScreen : {screen: FirstScreen},
  SecondScreen : {screen: SecondScreen},
  ThirdScreen : {screen: ThirdScreen},
  FourthScreen : {screen: FourthScreen},
  ListScreen : {screen: ListScreen},
  TimerScreen : {screen: TimerScreen},
});

export default App;
