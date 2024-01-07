import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { getClientCommande, getProduct } from '../endpoint';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PanierScreen({ navigation }) {
  
  const [articles, setArticles] = useState([
    { id: 1, name: 'Article 1' },
    { id: 2, name: 'Article 2' },
    { id: 3, name: 'Article 3' },
    // ... Ajoutez ici vos articles provenant de votre backend ou de votre source de données
  ]);
  useEffect(() => {
    const fetchData = async ()=>{
      const idClient = await AsyncStorage.getItem("clientId");
      console.log("idClient", idClient);
      const formedResponse = await getClientCommande(idClient);
      // const formedResponse= await response.map(async (item) => item.idProduit = await getProduct(item.idProduit))
      // setArticles(formedResponse);
      setArticles(formedResponse.data.data);
    }
    fetchData()
  }, [])
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {articles.map((article) => (
          <View key={article.id} style={styles.articleBox}>
            <Text>{article.idProduit}</Text>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  articleBox: {
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
