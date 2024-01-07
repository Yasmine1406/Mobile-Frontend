import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';
import { register } from '../endpoint';


export default function SignupScreen({ navigation }) {
     const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelection = (option) => {
        if (selectedOption === option) {
            setSelectedOption(null); // Désélectionne si déjà sélectionné
        } else {
            setSelectedOption(option); // Sélectionne l'option
        }
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
  };
  const handleSignUp = async () => {
        const response = await register({ username:username, email: email, password: password });
        console.log(response); 

    navigation.navigate("Home");
    };

    return (
        <ImageBackground source={require('../assets/backsignup.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
            {/* <View style={styles.logoContainer}>
                 <Image
                       source={require('../assets/Logo.png')}
                       style={styles.logo}
                  />
            </View> */}
            <View style={styles.form}>
                <Text style={styles.label}>Username :</Text>
                <TextInput style={[styles.input, username ? { color: 'black' } : null]}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={handleUsernameChange} />
                <Text style={styles.label}>Email Adress :</Text>
                <TextInput style={[styles.input, email ? { color: 'black' } : null]}
                    placeholder="Enter your Email"
                    value={email}
                    onChangeText={handleEmailChange} />
                <Text style={styles.label}>Password :</Text>
                <TextInput style={[styles.input, password ? { color: 'black' } : null]}
                    placeholder="Enter your Password"
                    
                    value={password}
                    onChangeText={handlePasswordChange} secureTextEntry />
                <Text style={styles.label}>Confirm Password :</Text>
                <TextInput style={[styles.input, confirmPassword ? { color: 'black' } : null]}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChangeText={handleConfirmPasswordChange} secureTextEntry />
                
                {/* <View style={styles.images}>
                 <Image
                       source={require('../assets/client.png')}
                       style={styles.icon}
                    />
                <Image
                       source={require('../assets/vendor.png')}
                       style={styles.icon}
                  />
                </View> */}
                    
                <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === 'Client' ? styles.selectedOption : styles.unselectedOption,
          ]}
          onPress={() => handleOptionSelection('Client')}
        >
          <Text style={[styles.optionText ,selectedOption === 'Client' ? styles.selectedText : null]}>Client</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === 'Vendor' ? styles.selectedOption : styles.unselectedOption,
          ]}
          onPress={() => handleOptionSelection('Vendor')}
        >
          <Text style={[styles.optionText ,selectedOption === 'Vendor' ? styles.selectedText : null]}>Vendor</Text>
        </TouchableOpacity>
        
      </View>
                <TouchableOpacity style={styles.customButton} onPress={() => {}}>
              <Text style={styles.buttonText} onPress={handleSignUp}>Sign Up</Text>
                </TouchableOpacity>
                
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
    form: {
        
        padding: 20,
        // borderRadius: 10,
        // shadowColor: "white",
        // shadowOffset: {
        //     width: 0,
        //     height : 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
        width: 300,
        height: 500,
        marginTop: 100,
        
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
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
        marginTop: 20, 
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'black', 
        fontSize: 25, 
        textAlign: 'center',
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
    marginTop: 30,
    marginRight: 8,
    },
    images: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    },
     logo: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  icon: {
    width: 90,
    height: 90,
    },
  
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
      marginBottom: 10,
  },
  optionButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: '#cbd5c0',
  },
  selectedOption: {
    backgroundColor: '#344e41', // Style pour la sélection
  },
  unselectedOption: {
    backgroundColor: '#D8D6CB', // Style pour la non-sélection
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    },
    selectedText: {
      color: 'white',
  }
});
