import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, ImageBackground,TouchableOpacity } from 'react-native';
import { addProduitToCommande } from '../endpoint';
import { TextInput } from 'react-native-paper';



export default function ViewScreen({ navigation }) {
  const product = {
    image: require('../assets/produit1.jpeg'), // Replace with your image path
    description: 'This is a description of the product. Add more details here.',
    price: '15DT', // Replace with your product price
  };

  const [idClient,setClient]=useState('');
  const [idProduit,setProduit]=useState('');
  const [quantité,setQuantite]=useState('');
   const handleAddToCart = async() => {
    const response = await addProduitToCommande({ idProduit: idProduit, idClient: idClient, quantité: quantité });
    navigation.navigate("Menu");
  };

  
  return (
      <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
              <View style={styles.imageContainer}>
                  <Image source={product.image} style={styles.image} resizeMode="cover" />
              </View>
              <View style={styles.infoContainer}>
                   <Text style={styles.price}>{product.price}</Text>
                   <Text style={styles.description}>{product.description}</Text>
                   <TextInput
                      placeholder="Enter Quantity"
                      value={quantité}
                      onChangeText={(text) => setQuantite(text)}
                      style={styles.input}
                    />
              </View>
                
              <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
         </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Your existing styles here...
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 2,
    padding: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  addToCartButton: {
  backgroundColor: '#344E41',
  width: 200,
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  alignSelf: 'center', // Center the button horizontally
  marginBottom: 30,
},

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

