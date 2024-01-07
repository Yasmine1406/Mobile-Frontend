import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,ImageBackground } from 'react-native';

export default function HomeVendor({navigation}) {
    return (
    <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
    <View style={styles.container}>
            <StatusBar style="auto" />
            
      <View style={styles.images}>
            <Image
              source={require('../assets/vendor..png')}
              style={styles.icon1}
             />
      </View> 
      <View style={styles.buttonWithIcon}>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate("add")}>
          <Text style={styles.buttonText}  >Add an item</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.buttonWithIcon}>
      {/* <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate("vendor")}>
          <Text style={styles.buttonText}>View Article</Text>
      </TouchableOpacity> */}
      </View>
            </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon1: {
    width: 150,
    height: 150,
    },
  images: {
        marginTop: 120,
        marginBottom: 50,
    },
 buttonContainer: {
    marginTop: 20,
    backgroundColor: '#344E41',
    borderRadius: 10,
    width: 250,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  buttonWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: 30,
    marginTop: 20,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    width: '100%', 
    height: '100%', 
    },
  
});
