import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";


export default function PaymentScreen({ navigation: { navigate } }) {
  const [checked, setChecked] = React.useState("first");
 

  return (
    <SafeAreaView>
        <View style={{ paddingTop: 20 }}>
        <View style={styles.card} >
        <View style={styles.container}>
        <View style={styles.itemOne}>
  <Text>Resumen del Plan</Text>
  </View>
  <View style={styles.itemTwo}>
  <Text style={{ fontWeight: "bold", fontSize: 13, marginTop: -20 }}>
                    40 GB{"\n"}
                    {"\n"}
                    1500 minutos{"\n"}
                    {"\n"}
                    1000 SMS
                  </Text>
  </View>
</View>
</View>
</View>


<View style={{ paddingTop: 20 }}>
        <View style={styles.card}>
        <View style={styles.container}>
  <View style={styles.itemOne}>
  <Image
            style={styles.profileImg}
            source={require("../../assets/cards.jpeg")}
          />
  </View>
  <View style={styles.itemTwo}>
    <Text>Pago con tarjeta</Text>
  </View>
<View style={styles.itemThree}>
<RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            /> 
  </View>
</View>
</View>
</View>
 {/*  */}
<View style={{ paddingTop: 20 }}>
        <View style={styles.card}>
        <View style={styles.container}>
  <View style={styles.itemOne}>
  <Image
            style={styles.profileImg}
            source={require("../../assets/spei.png")}
          />
  
  </View>
  <View style={styles.itemTwo}>
    <Text>Pago con SPEI</Text>
  </View>
<View style={styles.itemThree}>
<RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /> 
  </View>
</View>
</View>
</View>

<View style={{ paddingTop: 20 }}>
        <View style={styles.card}>
        <View style={styles.container}>
  <View style={styles.itemOne}>
  <Image
            style={styles.profileImg}
            source={require("../../assets/paynet.png")}
          />
  </View>
  <View style={styles.itemTwo}>
    <Text>Pago en Tienda de Autoservicio</Text>
  </View>
<View style={styles.itemThree}>
<RadioButton
              value="third"
              status={checked === "third" ? "checked" : "unchecked"}
              onPress={() => setChecked("third")}
            ></RadioButton>
  </View>
</View>
</View>
</View>

<View style={{ width: 300 }}>
<View style={styles.buttonGreen}>
                    <TouchableOpacity onPress={()=>navigate('DetailsScreen')}>
                   <LinearGradient
                   colors={['#08d4c4', '#01ab9d']}
                   style={styles.signIn}
                   >
                   <Text style={styles.textSign}>Pagar</Text> 
                   <MaterialIcons
                    name="navigate-next"
                    color="#fff"
                    size={20}
                   />       
                   </LinearGradient>
           </TouchableOpacity>
           </View>
           </View>


</SafeAreaView>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 20,
    paddingLeft:15
  },
  button: {
    marginTop: 5,
    borderRadius: 60,
  },
  card: {
    height: 120,
    width: "93%",
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    paddingTop: 20,
    
  },
  profileImg: {
    width: 50,
    height: 30,
    borderRadius: 20,
  },
  itemOne: {
    width: "30%",
    alignItems: "center",
  },
  itemTwo: {
    width: "40%",
    alignItems: "center",
  },
  itemThree: {
    width: "30%",
    alignItems: "center",
  },
  buttonGreen: {
    alignItems: 'flex-end',
    marginTop: 30
},
signIn: {
    width: 200,
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

//  export default PaymentScreen;