import React from 'react';
import { View, Text, StyleSheet, Platform, Pressable} from 'react-native';
 
  const Details = ({item, onPress}) => {

  return(
    <Pressable onPress={onPress} style={styles.container}>
    <View style={styles.row}>
    <Text style={styles.symbolText}>{item.symbol}</Text>
    <Text style={styles.nameText}>{item.name}</Text> 
     <Text style={styles.priceText}>{`$${item.price_usd}`}</Text> 
    </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
      flexDirection: "row",
      justifyContent:"space-between",
      padding:25,
      borderBottomWidth: 1,
      marginLeft: Platform.OS == 'ios'? 16:0,
      borderBottomColor:"#694fad",
      borderBottomWidth: 5
  },
  row:{
      flexDirection: "row"
  },
  symbolText:{
      color: "powderblue",
      fontWeight: "bold",
      fontSize: 16,
      marginRight:20
  },
  nameText: {
      color: "#000000",
      fontSize:14,
      marginRight:30
  },
  percentText:{
      color: "#000000",
      fontSize:12,
      marginRight:30
  }

})


export default Details;
