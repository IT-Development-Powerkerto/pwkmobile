import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Forget, Home, LeadTunneling, MyProfile } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (

    <Tab.Navigator tabBar={props => <BottomNavigator {...props}  />}>
      <Tab.Screen name="Home" component={Home} options = {{ headerShown: false }} />
      <Tab.Screen name="Leads" component={LeadTunneling} options = {{ headerShown: false}} />
      <Tab.Screen name="Profile" component={MyProfile} options = {{ headerShown: false}} />
    </Tab.Navigator>
  );
}

const Router = () => {
    return(
        <Stack.Navigator initialRouteName='MyTabs' >
            <Stack.Screen name="Login" component={Login} options = {{ headerShown: false }} />
            <Stack.Screen name="Forget" component={Forget} options = {{ headerShown: false }} />
            <Stack.Screen name="MyTabs" component={MyTabs} options = {{ headerShown: false }} />
            {/* <Stack.Screen name="LeadTunneling" component={LeadTunneling} options = {{ headerShown: false}} /> */}
        </Stack.Navigator>
    );
}

export default Router;