import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WellcomeScreen from './android/app/component/WellcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AppTab from './android/navigation/AppTab';
import Detail from './android/app/component/Detail';
import Order from './android/app/component/Order';

const Stack=createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}
      >
        <Stack.Screen name='Wellcome' component={WellcomeScreen}/>
        <Stack.Screen name='/' component={AppTab}/>
        <Stack.Screen name='detail' component={Detail}/>
        <Stack.Screen name='order' component={Order}/>
      </Stack.Navigator>
    </NavigationContainer>


    
  )
}

export default App

const styles = StyleSheet.create({})