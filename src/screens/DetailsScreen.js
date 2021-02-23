import React, { Component }from 'react';
import {  Text, View,Button } from 'react-native';


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
      <Text>Detalles</Text>
     
    
    </View>
  )
}
};


export default DetailsScreen;
