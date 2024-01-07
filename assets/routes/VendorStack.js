import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import VendorScreen from '../../screens/VendorScreen';
import MenuVendor from './MenuTaps';
import MenuTaps from './MenuTaps';




const Stack = createNativeStackNavigator();

export default function VendorStack() {
    return (
            <Stack.Navigator
                initialRouteName="vendor"
            >
                <Stack.Screen
                    name="vendor"
                    component={VendorScreen}
            />
            <Stack.Screen
                    name="home"
                    component={MenuTaps}
            />
                
            </Stack.Navigator>
    )
}