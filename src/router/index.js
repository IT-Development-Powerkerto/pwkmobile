import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { BottomNavigator } from '../components';
import { AddBudgetingRealization, AddReimbursement, AddRoutineEvaliation, Budgeting, BudgetingRealization, Campaign, ChangePassword, CreatePromotion, DetailLead, EditProfile, EditPromotion, Evaluation, Forget, Home, LeadCampaign, LeadTunneling, Login, MyProfile, Promotion, Reimbursement, Splash } from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyCSTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Leads" component={LeadTunneling} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={MyProfile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const MyADVTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Campaign" component={Campaign} options={{ headerShown: false }} />
      <Tab.Screen name="Budgeting" component={Budgeting} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={MyProfile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='LeadCampaign'
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="MyCSTabs" component={MyCSTabs} />
      <Stack.Screen name="MyADVTabs" component={MyADVTabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forget" component={Forget} />
      <Stack.Screen name="Promotion" component={Promotion} />
      <Stack.Screen name="Reimbursement" component={Reimbursement} />
      <Stack.Screen name="BudgetingRealization" component={BudgetingRealization} />
      <Stack.Screen name="Evaluation" component={Evaluation} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="AddReimbursement" component={AddReimbursement} />
      <Stack.Screen name="AddBudgetingRealization" component={AddBudgetingRealization} />
      <Stack.Screen name="AddRoutineEvaliation" component={AddRoutineEvaliation} />
      <Stack.Screen name="CreatePromotion" component={CreatePromotion} />
      <Stack.Screen name="EditPromotion" component={EditPromotion} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="DetailLead" component={DetailLead} />
      <Stack.Screen name="LeadCampaign" component={LeadCampaign} />
    </Stack.Navigator>
  );
}

export default Router;