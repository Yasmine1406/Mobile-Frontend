import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ClientScreen from '../../screens/ClientScreen';
import MainTabs from './MainTaps';
import ProductScreen from '../../screens/ProductScreen';
import ViewScreen from '../../screens/ViewScreen';
import PanierScreen from '../../screens/PanierScreen';





const Stack = createNativeStackNavigator();

export default function ClientStack() {
    return (
            <Stack.Navigator
                initialRouteName="client"
            >
                <Stack.Screen
                    name="client"
                    component={ClientScreen}
            />
            <Stack.Screen
                    name="Menu"
                    component={MainTabs}
            />
            <Stack.Screen
                    name="view"
                    component={ViewScreen}
            />
            <Stack.Screen
                    name="panier"
                    component={PanierScreen}
            />

            </Stack.Navigator>
    )
}