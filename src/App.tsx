import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View } from 'react-native';
import Routes from './routes';

const App: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#12043E"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: '#0a0613' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
