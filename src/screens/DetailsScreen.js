import React, { Component }from 'react';
import {   View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView, } from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class DetailsScreen extends Component {
 


  componentDidMount() {
    console.log(this.props.navigation.state);
  }



  render(){
  return(
    <View style={{ flex:1,  
     paddingTop: 30
}
    }>
      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Detalles de Consumo
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            {/* <Image
              source={require('../assets/banners/food-banner2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            /> */}
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Mensajes</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
              Consumo de mensajes
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            {/* <Image
              source={require('../assets/banners/food-banner3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            /> */}
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Llamadas</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
              Detalles de llamadas
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            {/* <Image
              source={require('../assets/banners/food-banner4.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            /> */}
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Internet</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
              Megas de navegación
            </Text>
          </View>
        </View>
      </View>
     
    
    </View>
  )
}
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#c9f2e2',
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});


export default DetailsScreen;
