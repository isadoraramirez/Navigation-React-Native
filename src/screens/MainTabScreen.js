import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import CardScreen from './CardScreen ';
import DealsScreen from './DealsScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#fff",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ tabBarLabel: 'Inicio',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size= {26}/>
        ) }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{ tabBarLabel: 'Detalles',
        tabBarColor:'#1f65ff',
        tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size= {26}/>
        ) }}
      />
      <Tab.Screen
        name="DealsScreen"
        component={DealsScreen}
        options={{ tabBarLabel: 'Recarga',
        tabBarColor:'#694fad',
        tabBarIcon: ({ color }) => (
            <Icon name="pricetag" color={color} size= {26}/>
        ) }}
      />
      {/* <Tab.Screen
        name="Explore"
        component={CardScreen}
        options={{ 
            tabBarLabel: 'Recarga',
            tabBarColor:'#d02860',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size= {26}/>
            )
         }}
      /> */}
    </Tab.Navigator>
  );


const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions= {{
      headerStyle:{
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home"
      component={HomeScreen}
      options={{title:'Inicio',
      headerLeft: ()=> (
        <Icon.Button name= "ios-menu" size={25}
        backgroundColor="#009387" onPress={()=> {navigation.openDrawer()
        }}>
        </Icon.Button>
      )
    
    }}
      />
     
    </HomeStack.Navigator>
    );
    
    const DetailsStackScreen = ({navigation}) => (
      <DetailsStack.Navigator screenOptions= {{
        headerStyle:{
          backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold'
        }
      }}>
        <DetailsStack.Screen name="Details"
        component={DetailsScreen}
        options={{
          headerLeft: ()=> (
            <Icon.Button name= "ios-menu" size={25}
            backgroundColor="#1f65ff" onPress={()=> {navigation.openDrawer()
            }}>
            </Icon.Button>
          )
        }}
        />
       
      </DetailsStack.Navigator>
    );

    export default MainTabScreen;
    