import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeStack from "./assets/routes/HomeStack";
// import HomeScreen from "./screens/HomeScreen";
// import SignupScreen from "./screens/SignupScreen";
// import ClientScreen from "./screens/ClientScreen";
// import VendorScreen from "./screens/VendorScreen";
// import ProfilScreen from "./screens/ProfilScreen";
// import ProductScreen from "./screens/ProductScreen";



// const Stack = createNativeStackNavigator(); 
export default function App() {
  return (
    <HomeStack/>
//     <NavigationContainer>
//      <Stack.Navigator
//     initialRouteName="Home"
//               screenOptions={{
//                    headerStyle: {
//             // backgroundColor: '#f4511e',
//              },
//               // headerTintColor: '#fff',
//               headerTitleStyle: {
//                       fontWeight: 'bold',
//                       textAlign: 'center', // Pour centrer le titre
//             },
//             headerTitleAlign: 'center', // Alignement horizontal du titre au centre
//     }}
// >

      
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Signup" component={SignupScreen} />
//         <Stack.Screen name="Client" component={ClientScreen}/>
//         <Stack.Screen name="Vendor" component={VendorScreen}/>
//         <Stack.Screen name="Profil" component={ProfilScreen} />
//         <Stack.Screen name="Product" component={ProductScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
  );
}
