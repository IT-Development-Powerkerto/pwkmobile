import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { BottomNavigator } from '../components';
import { Budgeting, ChangePassword, Evaluation, Forget, Home, LeadTunneling, Login, MyProfile, Promotion, Reimbursement } from '../pages';

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
        <Stack.Navigator initialRouteName='Promotion' >
            <Stack.Screen name="Login" component={Login} options = {{ headerShown: false }} />
            <Stack.Screen name="Forget" component={Forget} options = {{ headerShown: false }} />
            <Stack.Screen name="MyTabs" component={MyTabs} options = {{ headerShown: false }} />
            <Stack.Screen name="Promotion" component={Promotion} options = {{ headerShown: false }} />
            <Stack.Screen name="Reimbursement" component={Reimbursement} options = {{ headerShown: false }} />
            <Stack.Screen name="Budgeting" component={Budgeting} options = {{ headerShown: false }} />
            <Stack.Screen name="Evaluation" component={Evaluation} options = {{ headerShown: false }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options = {{ headerShown: false }} />
            {/* <Stack.Screen name="LeadTunneling" component={LeadTunneling} options = {{ headerShown: false}} /> */}
        </Stack.Navigator>
    );
}

export default Router;