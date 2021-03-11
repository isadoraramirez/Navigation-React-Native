import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

class CardScreen extends React.Component {
    render(){
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>Nombres</Text>
      <View style={styles.loremIpsum1Stack}>
        <Text style={styles.loremIpsum1}>Apellidos</Text>
        <MaterialFixedLabelTextbox
          style={styles.materialFixedLabelTextbox1}
        ></MaterialFixedLabelTextbox>
      </View>
      <Text style={styles.loremIpsum2}>Numero</Text>
      <Text style={styles.loremIpsum3}>Codigo de Seguridad</Text>
      <Text style={styles.loremIpsum4}>Fecha de expiración</Text>
      <Text style={styles.loremIpsum6}>Agregar Tarjeta</Text>
      <MaterialButtonPrimary
        style={styles.materialButtonPrimary}
      ></MaterialButtonPrimary>
      <MaterialFixedLabelTextbox
        style={styles.materialFixedLabelTextbox}
      ></MaterialFixedLabelTextbox>
      <MaterialFixedLabelTextbox
        style={styles.materialFixedLabelTextbox2}
      ></MaterialFixedLabelTextbox>
      <MaterialFixedLabelTextbox
        style={styles.materialFixedLabelTextbox3}
      ></MaterialFixedLabelTextbox>
      <MaterialFixedLabelTextbox
        style={styles.materialFixedLabelTextbox4}
      ></MaterialFixedLabelTextbox>
    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 188,
    marginTop: 119,
    marginLeft: 54
  },
  loremIpsum1: {
    top: 0,
    left: 0,
    position: "absolute",
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 188
  },
  materialFixedLabelTextbox1: {
    height: 31,
    width: 293,
    position: "absolute",
    left: 0,
    top: 17
  },
  loremIpsum1Stack: {
    width: 293,
    height: 48,
    marginTop: 68,
    marginLeft: 46
  },
  loremIpsum2: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 188,
    marginTop: 18,
    marginLeft: 46
  },
  loremIpsum3: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 188,
    marginTop: 54,
    marginLeft: 46
  },
  loremIpsum4: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 188,
    marginTop: 50,
    marginLeft: 43
  },
  loremIpsum6: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 28,
    width: 174,
    marginTop: -418,
    marginLeft: 105
  },
  materialButtonPrimary: {
    height: 36,
    width: 100,
    marginTop: 467,
    marginLeft: 118
  },
  materialFixedLabelTextbox: {
    height: 31,
    width: 293,
    marginTop: -450,
    marginLeft: 46
  },
  materialFixedLabelTextbox2: {
    height: 31,
    width: 293,
    marginTop: 136,
    marginLeft: 54
  },
  materialFixedLabelTextbox3: {
    height: 31,
    width: 293,
    marginTop: 56,
    marginLeft: 46
  },
  materialFixedLabelTextbox4: {
    height: 31,
    width: 293,
    marginTop: 52,
    marginLeft: 46
  }
});

export default CardScreen;
