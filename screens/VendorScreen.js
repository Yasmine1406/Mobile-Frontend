import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity ,Image,ImageBackground} from 'react-native';
import { loginVendeur, loginVendor } from '../endpoint';

export default function VendorScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleLogin = async () => {
         try {
        const response = await loginVendeur({ email: email, password: password });
        console.log(response); 

        navigation.navigate("home");
    } catch (error) {
        console.error("Error occurred:", error);
    }
    };

    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
        <View style={styles.images}>
            <Image
              source={require('../assets/vendor..png')}
              style={styles.icon1}
             />
      </View> 
            <View style={styles.form}>
                <Text style={styles.label}>Email :</Text>
                <TextInput style={[styles.input, email ? { color: 'black' } : null]}
                    placeholder="Enter your Email"
                    value={email}
                    onChangeText={handleEmailChange} />
                <Text style={styles.label}>Password :</Text>
                <TextInput style={[styles.input, password ? { color: 'black' } : null]}
                    placeholder="Enter your Password"
                    
                    value={password}
                    onChangeText={handlePasswordChange} secureTextEntry />

               
                
            </View>
                 <TouchableOpacity style={styles.customButton} >
                    <Text style={styles.buttonText} onPress={handleLogin}>Login</Text>
                </TouchableOpacity>
                <View style={styles.textWithIcon}>
                          <Image
                               source={require('../assets/account.png')} 
                               style={styles.icon}
                          />
                          <Text style={styles.text}>
                               Don't Have an account?
                         </Text>
                </View>

              <Text style={{textAlign: 'center', color: 'black' ,fontSize:18 }} onPress={()=> navigation.navigate("Signup")}>Sign Up </Text>
                
    </View>
    </ImageBackground>
    );
}
const styles = StyleSheet.create({
   container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    width: '100%', 
    height: '100%', 
    },
    images: {
        marginTop: 120,
        marginBottom: 10,
    },
    form: {
        
        padding: 20,
        // borderRadius: 10,
        // shadowColor: "white",
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
        width: 300,
        height: 250,
        // marginTop: 20,
        
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
        color: 'black'
    },
    input: {
        height: 60,
        borderColor: "white",
        backgroundColor:"white",
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 20,
        padding : 8,
    },
     customButton: {
        borderRadius: 5,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'black', 
        fontSize: 27, 
        textAlign: 'center',
        fontWeight:'bold',
    },
    logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: '#d2dbc8',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    // marginTop: 20,
    marginRight: 8,
    },
textWithIcon: {
  flexDirection: 'row',
  alignItems: 'center',
 marginBottom: 8,
  justifyContent: 'center',
},
icon: {
  width: 25, 
  height: 25, 
    marginRight: 10,
},
text: {
  color: 'black',
  fontSize: 16,
    },
icon1: {
    width: 150,
    height: 150,
  },
  
});