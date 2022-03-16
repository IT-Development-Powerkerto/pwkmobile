import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Forget, Home } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options = {{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options = {{ headerShown: false }} />
            <Stack.Screen name="Forget" component={Forget} options = {{ headerShown: false }} />
            <Stack.Screen name="MyTabs" component={MyTabs} options = {{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default Router;