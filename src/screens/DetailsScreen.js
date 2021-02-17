import React from 'react';
import { StyleSheet, Text, View,Button, StatusBar, SafeAreaView, ScrollView } from 'react-native';

const DetailsScreen = ({navigation}) => {
  return(
    <View style={{ flex:1, 
    // alignContent: 'center', 
     paddingTop: 30
}
    }>
      <Text>Detail Screen</Text>
      <Button
        title="Go to detail screen..again"
        onPress={() => navigation.push("Details")}
      />
       <Button
        title="Go to detail home"
        onPress={() => navigation.navigate("Home")}
      />
       <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
       <Button
        title="Go to teh first screen"
        onPress={() => navigation.popToTop()}
      />
    
    </View>
  )
}


export default DetailsScreen;
