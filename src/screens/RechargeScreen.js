import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function RechargeScreen({ navigation: { navigate } }) {
  // const PaymentScreen =({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subHeader}>
      <Text style={[styles.text, { color: "#41444B", fontWeight: "bold" }]}>
        Elige un Plan Para Recargar
      </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigate("PaymentScreen")}>
          <LinearGradient colors={["#eb4992", "#eb4992"]} style={styles.signIn}>
            <View style={styles.container}>
              <View style={styles.itemOne}>
                <Text
                  style={[styles.text, { color: "#fff", fontWeight: "300" }]}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    $ 300{"\n"}
                  </Text>
                  <Text style={{ fontWeight: "900", fontSize: 7 }}>
                    costo mensual{"\n"}
                    IVA icluido
                  </Text>
                </Text>
              </View>
              <View style={styles.itemTwo}>
                <Text style={[styles.text, { color: "#fff" }]}>
                  <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                    40 GB{"\n"}
                    {"\n"}
                    1500 minutos{"\n"}
                    {"\n"}
                    1000 SMS
                  </Text>
                </Text>
              </View>
              <View style={styles.itemThree}>
                <Text style={[styles.text, { color: "#fff" }]}>
                  <Text style={{ fontWeight: "900", fontSize: 10 }}>
                    Datos 20 GB best effort 20 GB a 512 kbps{"\n"}
                    {"\n"}
                    en México Estados Unidos y Canada{"\n"}
                    {"\n"}
                    SMS en México Estados Unidos y Canada. Folio IFT 353305
                    {"\n"}
                    Los datos pueden Compartirse desde hotspot o tethering
                  </Text>
                </Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigate("PaymentScreen")}>
          <LinearGradient colors={["#f26316", "#f07330"]} style={styles.signIn}>
            <View style={styles.container}>
              <View style={styles.itemOne}>
                <Text
                  style={[styles.text, { color: "#fff", fontWeight: "300" }]}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    $ 200{"\n"}
                  </Text>
                  <Text style={{ fontWeight: "900", fontSize: 7 }}>
                    costo mensual{"\n"}
                    IVA icluido
                  </Text>
                </Text>
              </View>
              <View style={styles.itemTwo}>
                <Text style={[styles.text, { color: "#fff" }]}>
                  <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                    40 GB{"\n"}
                    {"\n"}
                    1500 minutos{"\n"}
                    {"\n"}
                    1000 SMS
                  </Text>
                </Text>
              </View>
              <View style={styles.itemThree}>
                <Text style={[styles.text, { color: "#fff" }]}>
                  <Text style={{ fontWeight: "900", fontSize: 10 }}>
                    Datos 20 GB best effort 20 GB a 512 kbps{"\n"}
                    {"\n"}
                    en México Estados Unidos y Canada{"\n"}
                    {"\n"}
                    SMS en México Estados Unidos y Canada. Folio IFT 328246
                    {"\n"}
                    Los datos No pueden Compartirse desde hotspot o tethering
                  </Text>
                </Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigate("PaymentScreen")}>
          <LinearGradient colors={["#e08351", "#e08351"]} style={styles.signIn}>
            <View style={styles.container}>
              <View style={styles.itemOne}>
                <Text
                  style={[styles.text, { color: "#fff", fontWeight: "300" }]}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    $ 150{"\n"}
                  </Text>
                  <Text style={{ fontWeight: "900", fontSize: 7 }}>
                    costo mensual{"\n"}
                    IVA icluido
                  </Text>
                </Text>
              </View>
              <View style={styles.itemTwo}>
                <Text style={[styles.text, { color: "#fff" }]}>
                  <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                    8 GB{"\n"}
                    {"\n"}
                    1500 minutos{"\n"}
                    {"\n"}
                    500 SMS
                  </Text>
                </Text>
              </View>
              <View style={styles.itemThree}>
                <Text style={[styles.text, { color: "#fff" }]}>
                  <Text style={{ fontWeight: "900", fontSize: 10 }}>
				  Datos en México Estados Unidos y Canada{"\n"}
                    {"\n"}
                    en México Estados Unidos y Canada{"\n"}
                    {"\n"}
                    SMS en México Estados Unidos y Canada. Folio IFT 328269
                    {"\n"}
                    Los datos pueden Compartirse desde hotspot o tethering
                  </Text>
                </Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigate("PaymentScreen")}>
          <LinearGradient colors={["#edb600", "#edb600"]} style={styles.signIn}>
            <View style={styles.container}>
              <View style={styles.itemOne}>
                <Text
                  style={[styles.text, { color: "#fff", fontWeight: "300" }]}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    $ 100{"\n"}
                  </Text>
                  <Text style={{ fontWeight: "900", fontSize: 7 }}>
                    costo mensual{"\n"}
                    IVA icluido
                  </Text>
                </Text>
              </View>
              <View style={styles.itemTwo}>
                <Text style={[styles.text, { color: "#fff" }]}>
                  <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                    5 GB{"\n"}
                    {"\n"}
                    1500 minutos{"\n"}
                    {"\n"}
                    500 SMS
                  </Text>
                </Text>
              </View>
              <View style={styles.itemThree}>
                <Text style={[styles.text, { color: "#fff" }]}>
                  <Text style={{ fontWeight: "900", fontSize: 10 }}>
                    Datos en México Estados Unidos y Canada{"\n"}
                    {"\n"}
                    en México Estados Unidos y Canada{"\n"}
                    {"\n"}
                    SMS en México Estados Unidos y Canada. Folio IFT 326007
                    {"\n"}
                    Los datos pueden Compartirse desde hotspot o tethering
                  </Text>
                </Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  subHeader: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  signIn: {
    borderRadius: 20,
    height: 150,
    width: 390,
  },
  itemOne: {
    width: "25%",
    alignItems: "center",
    paddingTop: 40,
  },
  itemTwo: {
    width: "20%",
    alignItems: "center",
    paddingTop: 30,
  },
  itemThree: {
    width: "55%",
    alignItems: "center",
    paddingTop: 40,
  },
  box: {
    paddingTop: 10,
  },
});

//  export default PaymentScreen;
