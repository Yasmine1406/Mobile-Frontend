import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, ImageBackground, FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useState ,useEffect } from 'react';
import { getAllProduits } from '../endpoint';

// const data = [
//   {
//     id: '1',
//     subject: 'Pizza',
//     price: '10DT',
//     image: require('../assets/produit1.jpeg'), // Replace with your image path
//   },
//   {
//     id: '2',
//     subject: 'Salade',
//     price: '5.5DT',
//     image: require('../assets/salade.jpg'), // Replace with your image path
//     },
//   {
//     id: '3',
//     subject: 'Sandwich',
//     price: '5DT',
//     image: require('../assets/sandwich.jpg'), // Replace with your image path
//     },
//   {
//     id: '4',
//     subject: 'yaghourt',
//     price: '3DT',
//     image: require('../assets/yaourt-à-boire.jpg'), // Replace with your image path
//     },
//   {
//     id: '5',
//     subject: 'Gateau',
//     price: '8DT',
//     image: require('../assets/recette-gateau-chocolat-tomate.jpg.webp'), // Replace with your image path
//     },
//   {
//     id: '6',
//     subject: 'Pizza',
//     price: '12DT',
//     image: require('../assets/produit1.jpeg'), // Replace with your image path
//     },
//    {
//     id: '7',
//     subject: 'salade',
//     price: '20DT',
//     image: require('../assets/salade.jpg'), // Replace with your image path
//     },
//   {
//     id: '8',
//     subject: 'Product 6',
//     price: '20DT',
//     image: require('../assets/yaourt-à-boire.jpg'), // Replace with your image path
//     },
//   {
//     id: '9',
//     subject: 'Product 9',
//     price: '20DT',
//     image: require('../assets/produit1.jpeg'), // Replace with your image path
//     },
//   {
//     id: '10',
//     subject: 'Product 10',
//     price: '20DT',
//     image: require('../assets/produit1.jpeg'), // Replace with your image path
//   },
//   // Add more data objects as needed for additional products
// ];

export default function ProductScreen({ navigation, route }) {
  const [data, setData] = useState([]);
    useEffect(() => {
    getAllProduits()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // dynamique 

  
  console.log(data);
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardText} onPress={() => navigation.navigate("view")}>{item.nomProduit}</Text>
        <Text style={styles.cardText}>{item.prix}</Text>
      </View>
    );
  };
  
  
  //static
  // const renderItem = ({ item }) => {
  //   return (
  //     <View style={styles.card}   >
  //       <Image source={item.image} style={styles.cardImage} />
  //           <Text style={styles.cardText} onPress={()=> navigation.navigate("view")}>{item.subject} </Text>
  //       <Text style={styles.cardText}>{item.price}</Text>
  //     </View>
  //   );
  // };
  

  return (
    <ScrollView style={styles.scrollView }>
      <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.topSection}>
            <View style={styles.logoContainer}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("panier")}>
                              <Image source={require('../assets/panier.png')}  style={styles.logo} />
                          </TouchableWithoutFeedback>
            </View>
          </View>
          {/* <View style={styles.imageSection}>
            <Image source={require('../assets/discover.png')} style={styles.image} />
          </View> */}
          <View style={styles.cardContainer}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2} // Display two cards per row
              contentContainerStyle={styles.flatListContent}
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#D8D6CB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: "100%",
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  cardText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topSection: {
    height: '8%',
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  imageSection: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'cover',
    },
  scrollView: {
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 20, // Espacement en bas du FlatList pour éviter que le dernier élément soit caché
  },
  
});
