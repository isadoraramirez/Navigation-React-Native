import React from "react";
import { TouchableOpacity, StyleSheet,Button, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

export default function PaymentScreen({ navigation: { navigate } }) {
// const PaymentScreen =({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textSign}>Elige una forma de pago</Text> 
           <View style={{
            marginTop: 50,
            width:250,
            height: 40,
          }}>
                    <TouchableOpacity onPress={()=>navigate('CardScreen')}>
                   <LinearGradient
                   colors={['#c4a2fa', '#e1d2fa']}
                   style={styles.signIn}
                   >
                   <Text style={styles.textSign}>Pago con Tarjeta</Text> 
                   <Image source={require("../../assets/cards.jpeg")} style={styles.image} resizeMode="center"></Image>
                   </LinearGradient>
           </TouchableOpacity>
           </View>

           <View  style={{
            marginTop: 200,
            width:250,
            height: 40,
            borderRadius: 50,
          }}  >
                    <TouchableOpacity onPress={()=>navigate('DetailsScreen')}>
                   <LinearGradient
                   colors={['#c4a2fa', '#e1d2fa']}
                   style={styles.signIn}
                   >
                   <Text style={styles.textSign}>SPEI</Text> 
                   <Image source={require("../../assets/spei.png")} style={styles.image} resizeMode="center"></Image>
                   </LinearGradient>
           </TouchableOpacity>
           </View>

           <View  style={{
            marginTop: 200,
            width:250,
            height: 40,
            borderRadius: 20,
          }}>
                    <TouchableOpacity onPress={()=>navigate('DetailsScreen')}>
                   <LinearGradient
                   colors={['#c4a2fa', '#e1d2fa']}
                   style={styles.signIn}
                   >
                   <Text style={styles.textSign}>Pago en Tienda de Autoservicio</Text> 
                   <Image source={require("../../assets/paynet.png")} style={styles.image} resizeMode="center"></Image>
                   </LinearGradient>
           </TouchableOpacity>
           </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    button:{
        marginTop: 5,
        marginHorizontal: 16,
        borderRadius: 60,
    },
    image: {
        resizeMode: "stretch",
            height: 50,
            width: 100

    },
    signIn:{
        borderRadius: 20,
    }
});

//  export default PaymentScreen;