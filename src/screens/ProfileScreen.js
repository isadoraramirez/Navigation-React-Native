import React, { useState } from 'react';
import { TouchableOpacity ,StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ProfileScreen({ navigation: { navigate } }) {
	const [count, setCount] = useState(0);

	return (
		<View style={styles.container}>
			<Text>You clicked {count} times.</Text>
			<Button
				onPress={() => setCount(count + 1)}
				title="Click me"
				color="red"
				accessibilityLabel="Click this button to increase count"
			/>

<TouchableOpacity onPress={()=>navigate('PaymentScreen')}>
                   <LinearGradient
                   colors={['#08d4c4', '#01ab9d']}
                   style={styles.signIn}
                   >
                   <Text style={styles.textSign}>Metodo de pago</Text> 
                  
                   </LinearGradient>
           </TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});