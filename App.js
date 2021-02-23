import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View,StatusBar,Button, Platform, Dimensions, Touchable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './src/screens/MainTabScreen';
import SupportScreen from './src/screens/SupportScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import BookmarkScreen from './src/screens/BookmarkScreen';
import RootStackScreen from './src/screens/RootStackScreen';
import {DrawerContent} from './src/screens/DrawerContent';
import { AuthContext } from './src/components/Context';

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken]= React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('123456');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('123456');
      setIsLoading(false);
    },
  }))
    
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },1000);
  },[])  ;
  
  if( isLoading ){
      return(
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
  return (
     <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { userToken != null ? (
        <Drawer.Navigator drawerContent={ props => <DrawerContent{...props}/> }>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />       
      </Drawer.Navigator> 
      )
      :<RootStackScreen/>
    }

    </NavigationContainer>
     </AuthContext.Provider>
  )
}



export default App;
