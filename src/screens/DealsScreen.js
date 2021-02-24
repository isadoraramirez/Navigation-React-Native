import React, { useState } from 'react';
import { TouchableOpacity ,StyleSheet, Text, View,SafeAreaView, Button,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function DealsScreen({ navigation: { navigate } }) {
	// const PaymentScreen =({navigation}) => {
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.textSign}>Elige un Plan</Text> 
			   <View style={{
				marginTop: 10,
				width:250,
				height: 40,
			  }}>
						<TouchableOpacity onPress={()=>navigate('CardScreen')}>
					   <LinearGradient
					   colors={['#c4a2fa', '#e1d2fa']}
					   style={styles.signIn}
					   >
					   <Text style={styles.textSign}>$ 300</Text> 
					   
					   </LinearGradient>
			   </TouchableOpacity>
			   </View>
	
			   <View  style={{
				marginTop:10,
				width:250,
				height: 40,
				borderRadius: 50,
			  }}  >
						<TouchableOpacity onPress={()=>navigate('DetailsScreen')}>
					   <LinearGradient
					   colors={['#c4a2fa', '#e1d2fa']}
					   style={styles.signIn}
					   >
					   <Text style={styles.textSign}>$200</Text> 
					   
					   </LinearGradient>
			   </TouchableOpacity>
			   </View>
	
			   <View  style={{
				marginTop: 10,
				width:250,
				height: 40,
				borderRadius: 20,
			  }}>
						<TouchableOpacity onPress={()=>navigate('DetailsScreen')}>
					   <LinearGradient
					   colors={['#c4a2fa', '#e1d2fa']}
					   style={styles.signIn}
					   >
					   <Text style={styles.textSign}>$150</Text> 
					   
					   </LinearGradient>
			   </TouchableOpacity>

			   <View  style={{
				marginTop:10,
				width:250,
				height: 40,
				borderRadius: 50,
			  }}  >
						<TouchableOpacity onPress={()=>navigate('DetailsScreen')}>
					   <LinearGradient
					   colors={['#c4a2fa', '#e1d2fa']}
					   style={styles.signIn}
					   >
					   <Text style={styles.textSign}>$100</Text> 
					   
					   </LinearGradient>
			   </TouchableOpacity>
			   </View>
			   
			   <TouchableOpacity  style={{
				marginTop: 10,
			  }} onPress={()=>navigate('PaymentScreen')}>
					   <LinearGradient
					   colors={['#c4a2fa', '#e1d2fa']}
					   style={styles.signIn}
					   >
					   <Text style={styles.textSign}>Elegir forma de pago</Text> 
		
					   </LinearGradient>
			   </TouchableOpacity>
			   </View>
			</SafeAreaView>
		);
	}
	
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#FFF"
		},
		button:{
			marginTop: 5,
			marginHorizontal: 16,
			borderRadius: 60,
		},
		image: {
			resizeMode: "stretch",
				height: 50,
				width: 100
	
		},
		signIn:{
			borderRadius: 20,
		}
	});
	
	//  export default PaymentScreen;