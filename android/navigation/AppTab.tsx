import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../app/src/tabscreen/Home';
import Heart from '../app/src/tabscreen/Heart';
import Bag from '../app/src/tabscreen/Bag';
import Notification from '../app/src/tabscreen/Notification';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator  
    
    
    screenOptions={{headerShown:false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
            
          tabBarIcon: () => {
            return <Entypo name="home" size={30} color="#C67C4E"/>;
          },
        }}
      />
      <Tab.Screen
        name="Heart"
        component={Heart}
        
        options={{
          tabBarIcon: () => {
            return <Entypo name="heart" size={30} color="rgba(141,141,141,1)"
          />;
          },
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="bag-outline" size={30} color="#8D8D8D"/>;
          },
        }}
      />
      <Tab.Screen name="Notification" component={Notification}
      options={{
        tabBarIcon:()=>{
            return <Ionicons name="notifications" size={30} color="#8D8D8D" />
        }
      }} />
    </Tab.Navigator>
  );
};

export default AppTab;

const styles = StyleSheet.create({});
