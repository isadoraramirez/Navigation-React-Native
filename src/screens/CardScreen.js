import * as React from "react";
import {
    KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
  Platform
} from "react-native";
import {  MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";


class CardScreen extends React.Component {
    render(){
        return(
            <KeyboardAvoidingView behavior={Platform.OS==='ios'?position:undefined}enabled>

            </KeyboardAvoidingView>

        )
    }
    

}
export default CardScreen;
