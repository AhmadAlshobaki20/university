import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Screen/HomeScreen.tsx';
import ProfileScreen from './Screen/ProfileScreen.tsx';
import SplashScreen from './Screen/SplashScreen.tsx';
import RegisterScreen from "./Screen/RgisterScreen.tsx"
import VerifyScreen from './Screen/verify.tsx';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"
                component={MyStack}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
                headerShown: false
            }} />

            <Stack.Screen name="VerifyScreen" component={VerifyScreen} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    );
};



const NavigationApp = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

export { NavigationApp };