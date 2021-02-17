import React from 'react';

import { StyleSheet, Text, View,Button, StatusBar, SafeAreaView, ScrollView } from 'react-native';
// import {Header, MoreLinks, Colors, Debug, Reload} from '';


const HomeScreen = ({navigation}) => {
  return (
    <View style= {styles.container}>
       <Text>Home Screen</Text>
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


export default HomeScreen;
