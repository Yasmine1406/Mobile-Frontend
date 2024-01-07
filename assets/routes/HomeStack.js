import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import SignupScreen from '../../screens/SignupScreen';
import VendorScreen from '../../screens/VendorScreen';
import ClientStack from './ClientStack';
import ClientScreen from '../../screens/ClientScreen';
import VendorStack from './VendorStack';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                                          headerStyle: {
                                      },
                                       headerTitleStyle: {
                                               fontWeight: 'bold',
                                               textAlign: 'center', // Pour centrer le titre
                                    },
                        headerTitleAlign: 'center',
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                    />
                    <Stack.Screen
                        name="client"
                        component={ClientStack}
                    />
                    <Stack.Screen
                        name="vendor"
                        component={VendorStack}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
}

 