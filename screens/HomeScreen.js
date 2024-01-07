import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,ImageBackground } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
    <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
    <View style={styles.container}>
            <StatusBar style="auto" />
            
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logoo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonWithIcon}>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate("client")}>
          <Text style={styles.buttonText}  >Client</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.buttonWithIcon}>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate("vendor")}>
          <Text style={styles.buttonText}>Vendor</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.textWithIcon}>
        <Image
           source={require('../assets/account.png')} 
           style={styles.icon}
           />
        <Text style={styles.text}>
        Don't Have an account?
        </Text>
      </View>

      <Text style={{textAlign: 'center', color: 'black' ,fontSize:30 ,marginTop:5,fontWeight: 'bold' }} onPress={()=> navigation.navigate("Signup")}>Sign Up </Text>
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
  logoContainer: {
    width: 230,
    height: 230,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    marginBottom :40,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
 buttonContainer: {
    marginTop: 20,
    backgroundColor: '#344E41',
    borderRadius: 10,
    width: 200,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
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
  textWithIcon: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 50,
  justifyContent: 'center',
},
icon: {
  width: 25, 
  height: 25, 
    marginRight: 10,
    marginTop: 30,
},
text: {
  color: 'black',
  fontSize: 16,
  marginTop:30,
},

});
