import React from 'react';

import { StyleSheet, Text, View,Button, StatusBar, SafeAreaView, ScrollView } from 'react-native';



const ExploreScreen = ({navigation}) => {
  return (
    <View style= {styles.container}>
       <Text>Explore Screen</Text>
       <Button
        title="Go to detail screen"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

const styles = StyleSheet.create(
    {flex:1,
     paddingTop: 60
    }
)


export default ExploreScreen;
