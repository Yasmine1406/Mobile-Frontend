import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// import ChatStack from './chatStack';
// import Notifications from '../screens/notifications';
// import ProfileStack from './profileStack';
// import AddPost from '../screens/addPost';
import ClientScreen from '../../screens/ClientScreen';
import ProductScreen from '../../screens/ProductScreen'
import ProfilScreen from '../../screens/ProfilScreen';




const Tab = createBottomTabNavigator();



export default function MainTabs() {
    return (
            <Tab.Navigator
                initialRouteName="Product"
                screenOptions={{ headerShown: false }}
            >
                <Tab.Screen
                    name="Product"
                    component={ProductScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" size={size} color={color} />
                        ),
                        tabBarActiveTintColor: '#CF5C36',
                        tabBarInactiveTintColor: '#7f7e7e',
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            borderTopWidth: 0,
                            elevation: 0,
                            shadowOpacity: 0,
                        }
                    }}
            />
            
                
                
                <Tab.Screen
                    name="Profil"
                    component={ProfilScreen}
                    options={{
                        headerShown: true,
                        tabBarLabel: 'Profil',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="settings" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: '#CF5C36',
                        tabBarInactiveTintColor: '#7f7e7e',
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            borderTopWidth: 0,
                            elevation: 0,
                            shadowOpacity: 0,
                        }
                    }}
                />
                {/* <Tab.Screen
                    name="notif"
                    component={}
                    options={{
                        headerShown: true,
                        tabBarLabel: 'Notifications',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="notifications" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: '#CF5C36',
                        tabBarInactiveTintColor: '#7f7e7e',
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            borderTopWidth: 0,
                            elevation: 0,
                            shadowOpacity: 0,
                        }
                    }}
                /> */}
                </Tab.Navigator>
    )
}