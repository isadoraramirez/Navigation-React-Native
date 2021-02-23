import React, { Component}from 'react';
import Http from '../libs/http';
import Details from '../components/Details';
import {  Image, StatusBar,
  TouchableOpacity,
  ScrollView,StyleSheet, Text, View,Button, FlatList, ActivityIndicator, onPress } from 'react-native';
  import {useTheme} from '@react-navigation/native';

  import Swiper from 'react-native-swiper';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  
class HomeScreen extends Component{

  state ={
      coins: [],
      loading: false
  }

  componentDidMount = async() => {
    this.setState({ loading :true })
     
      const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
      
      this.setState({ coins: res.data, loading:false});

  }

  handlePress= (coin) =>{
      this.props.navigation.navigate('Details', { coin });
      //console.log(coin)
  }
  //////////////////////////////////////




///////////////////////////////////////////////
  render(){
      const { coins, loading } = this.state;

      return(
            <View style= {styles.container}>
              {loading ?
                <ActivityIndicator
                style={styles.loader} 
                color= "pink" 
                size="large"/>
              :null
              }
       <Text>Saldos</Text>
       <FlatList
          data={coins}
          renderItem={({ item }) => 
           <Details
            item={item}
            onPress={() => {this.handlePress (item)}}
            />
        }
       />
           </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center"
} ,
btn: {
    padding: 8,
    backgroundColor: "pink",
    margin:16,
    borderRadius:8
},
btnText:{
    color: "black",
    textAlign: "center"
},
loader:{
    marginTop: 220,
}
  })



export default HomeScreen;
