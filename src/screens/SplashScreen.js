import React from 'react';
import { 
    View, 
    Text, 
    Button,
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';
const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
       <View style={styles.container}>
           <View style={styles.header}>
               <Animatable.Image
                animation="bounceIn"
                duraton= '3000'
               source={require('../../assets/logo.png')}
               style={styles.logo}
               resizeMode="stretch"
               />
               <Text style={styles.header_title}>Red Potencia</Text>
           </View>
           <Animatable.View 
             style={styles.footer}
             animation="fadeInUpBig"
             >
               <Text style={styles.title}>Siempre Conectados!</Text>
               {/* <Text style={styles.text}>Inicia Sesión</Text> */}
               <View style={styles.button}>
               <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                   <LinearGradient
                   colors={['#08d4c4', '#01ab9d']}
                   style={styles.signIn}
                   >
                   <Text style={styles.textSign}>Entrar</Text> 
                   <MaterialIcons
                    name="navigate-next"
                    color="#fff"
                    size={20}
                   />       
                   </LinearGradient>
           </TouchableOpacity>
           </View>
           </Animatable.View>
       </View>
    );
};

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header_title:{
    paddingTop: 35,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});


export default SplashScreen;