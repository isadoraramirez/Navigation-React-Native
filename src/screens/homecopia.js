import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  SectionList,
  FlatList,
  StyleSheet,
  Alert
} from 'react-native';
import {  MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


class CoinDetailScreen extends Component {

  state = {
    coin: {}
  }

  componentDidMount() {
    const { coin } = this.props.route.params;

    this.props.navigation.setOptions({ coin });

    this.setState({ coin});
  }
  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {

    const { coin } = this.state;

    return (
      <View style={styles.container}>
        <Text>holo</Text>
        <View style={styles.subHeader}>
          <View style={styles.row}>
            <Text style={styles.titleText}>{coin.name}</Text>
			<Text style={styles.titleText}>{coin.price_usd}</Text>
			<Text style={styles.titleText}>{coin.symbol}</Text>
          </View>
        </View>


        <View style={{ width: 300 }}>
          <View style={styles.buttonGreen}>
            <TouchableOpacity onPress={this.goBack}>
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <MaterialIcons name="navigate-before" color="#fff" size={20} />
                <Text style={styles.textSign}>Regresar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: Colors.charade
  },
  row: {
    flexDirection: "row"
  },
  subHeader: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 8
  },
  iconImg: {
    width: 25,
    height: 25
  },
  section: {
    maxHeight: 220
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16
  },
  sectionHeader: {
    backgroundColor: "rgba(0,0,0, 0.2)",
    padding: 8
  },
  sectionItem: {
    padding: 8
  },
  itemText: {
    // color: Colors.white,
    fontSize: 14
  },
  sectionText: {
    //color: Colors.white,
    fontSize: 14,
    fontWeight: "bold"
  },
  marketsTitle: {
    //color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 16
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8
  },
  btnFavoriteText: {
    //color: Colors.white
  },
  btnFavoriteAdd: {
    //backgroundColor: Colors.picton
  },
  btnFavoriteRemove: {
    //backgroundColor: Colors.carmine
  }
});

export default CoinDetailScreen;
