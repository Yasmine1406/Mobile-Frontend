import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Alert,TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addProduits } from '../endpoint';
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddPost() {
    // const [articleImage, setArticleImage] = useState(null);
    const [prix, setPrice] = useState('');
    const [nomProduit, setNomProduit] = useState('');
    const [quantité, setQuantite] = useState('');
    const [dateDePéremption, setDate] = useState(new Date(2024, 0, 1));
    // const [showPicker, setShowPicker] = useState(false);
    // const [categorie, setCategorie] = useState('1');

    const addProduct = async () => {
        const idVendeur = await AsyncStorage.getItem('vendeurId');
        addProduits({nomProduit:nomProduit, quantité: quantité, dateDePéremption:dateDePéremption, prix: prix, idVendeur:idVendeur})
    }

    const handleNomChange = (text) => {
        setNomProduit(text);
    };
    const handleDateChange = (text) => {
        setDate(text);
    };
    const handleQuantiteChange = (text) => {
        setQuantite(text);
    }
    const handlePriceChange = (text) => {
        setPrice(text);
    };
    const handleCategorieChange = (text) => {
        serCategorie(text);
    }

    const handleValidation = () => {
        // Envoyer les données au backend ou effectuer des actions nécessaires
        console.log('Article Image:', articleImage);
        console.log('Description:', description);
        console.log('Price:', price);
    };


    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            Alert.alert('Permission to access camera roll is required!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setArticleImage(result.uri);
            setShowSelectButton(false); // Masquer le bouton après avoir sélectionné une image
        }
    };
    // const handleAdd = async () => {
    //     const response = await addProduits({ nomProduit:nomProduit, quantité:nomProduit, dateDePéremption:dateDePéremption, prix:prix, idCategorie:idCategorie  });
    //     console.log(response); 
    //     navigation.navigate("Menu");
    // };

    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
            <View style={styles.profileContainer}>
                    <View style={styles.profileImageContainer}>
                        {/* Photo de profil */}
                        <Image source={require('../assets/anas.jpg')} style={styles.image} />
                    </View>
                </View>
            <View style={styles.container}>
                {/* <View style={styles.form}>
                    {articleImage && (
                        <Image source={{ uri: articleImage }} style={styles.selectedImage} />
                    )}
                    <TouchableOpacity onPress={pickImage} style={styles.selectImageButton}>
                        <Text style={styles.buttonText}>Select an image</Text>
                    </TouchableOpacity>
                </View> */}
                <Text style={styles.textP}> Name Product</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Write Product Name"
                    onChangeText={handleNomChange}
                    value={nomProduit}
                />
                <Text style={styles.text}> Quantite</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Write Quantite"
                    onChangeText={handleQuantiteChange}
                    value={quantité}
                />
                <View style={styles.priceContainer}>
                    <TextInput
                        style={styles.priceInput}
                        placeholder="Price (DT)"
                        onChangeText={handlePriceChange}
                        value={prix}
                    />
                    <TouchableOpacity onPress={addProduct} style={styles.validateButton}>
                        <Text style={styles.buttonText}>Validate</Text>
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
    profileContainer: {
        alignItems: 'flex-end', 
        marginTop: 40, 
        marginRight: 20, 
    },
    profileImageContainer: {
        width: 60, 
        height: 60, 
        borderRadius: 30, 
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    form: {
        width: 300,
        height: 280,
        marginTop: 20,
        backgroundColor: 'white', 
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    selectImageButton: {
        backgroundColor: '#344E41',
        padding: 10,
        borderRadius: 5,
        marginTop:10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    selectedImage: {
        width: 200,
        height: 200,
        marginTop: 20,
        resizeMode: 'cover',
    },
    descriptionInput: {
        width: '80%',
        height: 40,
        marginTop: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    text: {
        fontSize: 18,
        marginTop: 20,
        right: 100,
        fontWeight:'bold',
    },
    textP: {
        fontSize: 18,
        marginTop: 20,
        right: 76,
        fontWeight:'bold',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    priceInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    validateButton: {
        backgroundColor: '#344E41',
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
});
