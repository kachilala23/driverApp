import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screen/SplashScreen';
import WelcomeScreen from './screen/WelcomeScreen';
import Profile from './screen/Profile';
import LoginScreen from './screen/LoginScreen';


const initialStack = createNativeStackNavigator();

const App = () => {
  
  // const InitialStackScreen = () => (
  //   <initialStack.Navigator screenOptions={{ headerShown:false }}>
  //      <initialStack.Screen name="Splash" component={SplashScreen} />
  //      <initialStack.Screen name="Welcome" component={WelcomeScreen} />
  //   </initialStack.Navigator>
  // ); 

  // const Stack = createStackNavigator();
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>      
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
     </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 40,
    fontWeight: '700'
  }
})

export default App;
