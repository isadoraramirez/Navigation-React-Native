import React, { Component}from 'react';
import Http from '../libs/http';
import Details from '../components/Details';
import { TouchableOpacity,StyleSheet, Text, View,Button, FlatList, ActivityIndicator, SafeAreaView, Image, ScrollView} from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
 
// function SupportScreen({navigation}){
class SupportScreen extends Component{
  constructor(props){
    super(props);
    this.state={checked: ""
    
    }
  }
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
      this.props.navigation.navigate('homecopia', { coin });
      //console.log(coin)
  }


goBack=()=>{
    this.props.navigation.goBack();
  }
   render(){
      const { coins, loading } = this.state;
      const {price}= this.props.route.params;
      return(
            <SafeAreaView style= {styles.container}>
                
<View style={{ width: 300 }}>
<View style={styles.buttonGreen}>
                    <TouchableOpacity onPress={this.goBack}>
                   <LinearGradient
                   colors={['#08d4c4', '#01ab9d']}
                   style={styles.signIn}
                   >
                        <MaterialIcons
                    name="navigate-before"
                    color="#fff"
                    size={20}
                   />
                   <Text style={styles.textSign}>Regresar</Text> 
                         
                   </LinearGradient>
           </TouchableOpacity>
           </View>
           </View>


              {loading ?
                <ActivityIndicator
                style={styles.loader} 
                color= "pink" 
                size="large"/>
              :null
              }
       <Text>Saldos {price}</Text>
       <FlatList
          data={coins}
          renderItem={({ item }) => 
           <Details
            item={item}
            onPress={() => {this.handlePress (item)}}
            />
        }
       />
           </SafeAreaView>

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



export default SupportScreen;
