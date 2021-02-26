import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Touchable,
} from "react-native";
//import { CreditCardInput } from "react-native-credit-card-input";

class CardScreen extends Component {
  _onFocus = (field) => console.log("focusing", field);

  _onChange = (formData) => console.log(JSON.stringify(formData, null, ""));

  render() {
    return (
      <View style={styles.container}>
        <Text> Ingresa tu tarjeta</Text>
        <View
          style={{
            //widt: 280,
            marginTop: 20,
            backgroundColor: "#c74a73",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
          // onPress={()=> this.addCard()}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                color: "white",
                paddingVertical: 15,
              }}
            >
              Asociar Tarjeta
            </Text>
          </TouchableOpacity>
        </View>
        <CreditCardInput
          autoFocus
          requireName
          requireCVC
          requirePostalCode
          validColor="black"
          invalidColor="red"
          placeholderColor="darkgray"
          placeholders={{}}
          labelStyle={{ color: "black", fontSize: 12 }}
          inputStyle={{ color: "black", fontSize: 16 }}
          onFocus={this._onFocus}
          onChange={this._onChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
    paddingTop: 60,
    paddingRight: 10,
  },
  button: {
    color: "black",
    alignItems: "center",
    marginTop: 10,
  },
});

export default CardScreen;
