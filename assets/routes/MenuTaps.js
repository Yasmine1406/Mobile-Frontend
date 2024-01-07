import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import HomeVendor from '../../screens/HomeVendor';
import ProfilScreen from '../../screens/ProfilScreen';
import AddPost from '../../screens/AddPost';



const Tab = createBottomTabNavigator();



export default function MenuTaps() {
    return (
            <Tab.Navigator
                initialRouteName="screen"
                screenOptions={{ headerShown: false }}
            >
                <Tab.Screen
                    name="screen"
                    component={HomeVendor}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" size={size} color={color} />
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
                    name="add"
                    component={AddPost}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Add ',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="add-circle" color={color} size={size} />
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
                        headerShown: false,
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
            
                </Tab.Navigator>
    )
}