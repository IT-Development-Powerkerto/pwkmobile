import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Forget, Home } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options = {{ headerShown: false }} />
            <Stack.Screen name="Forget" component={Forget} options = {{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options = {{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default Router;