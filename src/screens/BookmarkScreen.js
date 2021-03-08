import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookmarkScreen = ({navigation, onPress}) => {
    return (
      <View style={styles.container}>
        <Text>Referencia de Pago</Text>
           
    
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
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
