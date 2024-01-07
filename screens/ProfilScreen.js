import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function ProfilScreen() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    return (
        <ImageBackground source={require('../assets/Profil.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={require('../assets/anas.jpg')}
                            style={styles.image}
                        />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>You are a: Client</Text>
                </View>
                
            <View style={styles.form}>
                <Text style={styles.label}>Username :</Text>
                <TextInput style={[styles.input, username ? { color: 'black' } : null]}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={handleEmailChange} />
                <Text style={styles.label}>Email Address</Text>
                <TextInput style={[styles.input, email ? { color: 'black' } : null]}
                    placeholder="Enter your email"
                    
                    value={email}
                     />

               
                
                </View>
                <View style={styles.bar}>

                </View>
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
    profileContainer: {
        alignItems: 'center',
        marginTop: 177,
    },
    profileImageContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        position: 'absolute',
        top: 340,
        left: 50,
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        color: 'black',
    },
    form: {
        
        padding: 20,
        // borderRadius: 10,
        // shadowColor: "white",
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
        width: 300,
        height: 280,
        marginTop: 50,
        
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
});
