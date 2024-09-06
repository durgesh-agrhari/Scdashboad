import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {TextInput, Button, Title, Text} from 'react-native-paper';
import {useNavigation, NavigationProp} from '@react-navigation/native';
//const navigation = useNavigation<NavigationProp<any>>();
// import type { HomeScreenProps } from "../types";

const Login: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [mobileNumber, setMobileNumber] = useState<string>('');

  const handleLogin = () => {
    console.log('Navigating to OTP Screen...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginbox}>
        <View style={styles.imgbox}>
          <Image source={require('../../assets/logo.jpg')} style={styles.img} />
        </View>
        <Title style={styles.title}>Login</Title>
        <Title style={styles.txt}>Welcome back! Glad to see you, Again!</Title>
        <Text style={{color: 'white', fontSize: 15}}>
          Enter your mobile number
        </Text>
        <View style={styles.inputbox}>
          <View style={styles.code}>
            <Text style={styles.coden}>+91</Text>
          </View>
          <TextInput
            value={mobileNumber}
            onChangeText={(text: string) => setMobileNumber(text)}
            style={styles.input}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
        <Button
          onPress={() => {
            navigation.navigate('OTPScreen');
          }}
          style={styles.button}>
          <Text style={styles.btntext}>Send OTP</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#304f80',
  },
  loginbox: {
    height: '85%',
    paddingHorizontal: 30,
    justifyContent: 'center',
    backgroundColor: '#5F95FF',
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    fontSize: 30,
  },
  input: {
    marginLeft: 5,
    width: '88%',
    marginBottom: 20,
    backgroundColor: '#5F95FF',
    borderBlockColor: 'white',
    borderBottomWidth: 2,
  },
  inputbox: {
    flexDirection: 'row',
  },
  code: {
    width: '10%',
    marginTop: 18,
    marginBottom: 20,
    backgroundColor: '#5F95FF',
    borderBlockColor: 'white',
    borderBottomWidth: 2,
  },
  coden: {
    fontSize: 20,
    color: 'white',
  },
  txt: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    height: 45,
    marginTop: 10,
    backgroundColor: '#FFD600',
    borderRadius: 5,
  },
  btntext: {
    fontSize: 20,
    color: 'black',
    padding: 5,
    textAlign: 'center',
  },
  img: {
    width: '45%',
    height: 120,
    backgroundColor: 'red',
  },
  imgbox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;

// import React, { useState } from 'react';
// import { View, StyleSheet, Image } from 'react-native';
// import { TextInput, Button, Title, Text } from 'react-native-paper';
// import { useNavigation, NavigationProp } from '@react-navigation/native';

// const Login: React.FC = () => {
//   const navigation = useNavigation<NavigationProp<any>>();
//   const [mobileNumber, setMobileNumber] = useState<string>('');

//   const handleLogin = () => {
//     // Handle login logic here
//     console.log('Mobile Number:', mobileNumber);
//   };

//   return (
//     <View style={styles.container}>
//         <View style={styles.loginbox}>
//         <View style={styles.imgbox}>
//         <Image source={require('../../assets/logo.jpg')} style={styles.img} />
//         </View>
//       <Title style={styles.title}>Login</Title>
//       <Title style={styles.txt}>Welcome back! Glad to see you, Again!</Title>
//       <Text style={{color:'white', fontSize:15}}>Enter your mobile number </Text>
//       <View style={styles.inputbox}>
//         <View style={styles.code}>
//         <Text style={styles.coden}>+91</Text>
//         </View>
//       <TextInput
//         // label="Mobile Number"
//         value={mobileNumber}
//         onChangeText={(text: string) => setMobileNumber(text)}
//         style={styles.input}
//         keyboardType="phone-pad"
//         maxLength={10}
//       />
//       </View>

//       <Button mode="contained" onPress={() => navigation.navigate('OTPScreen')} style={styles.button}>
//         <Text style={styles.btntext}>Send OTP</Text>
//       </Button>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'#304f80',
//   },
//   loginbox:{
//     height:'85%',
//     paddingHorizontal: 30,
//     justifyContent: 'center',
//     backgroundColor: '#5F95FF',
//     borderBottomRightRadius: 70,
//     borderBottomLeftRadius: 70,
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: 20,
//     color:'white',
//     fontSize:30,
//   },
//   input: {
//     marginLeft:5,
//     width:'88%',
//     marginBottom: 20,
//     backgroundColor: '#5F95FF',
//     borderBlockColor:'white',
//     borderBottomWidth:2,
//   },
//   inputbox:{
//     flexDirection:'row',
//   },
//   code:{
//     width:'10%',
//     marginTop:18,
//     marginBottom: 20,
//     backgroundColor: '#5F95FF',
//     borderBlockColor:'white',
//     borderBottomWidth:2,
//   },
//   coden:{
//     fontSize:20,
//     color:'white'
//   },
//   txt:{
//     color:'white',
//     fontSize:15,
//     textAlign:'center',
//     marginBottom:30,
//   },
//   button: {
//     height:45,
//     marginTop: 10,
//     backgroundColor:'#FFD600',
//     borderRadius:5,
//   },
//   btntext:{
//     fontSize:20,
//     color:'black',
//     padding:5,
//   },
//   img: {
//     width: "45%",
//     height:120,
//     backgroundColor: 'red',
//   },
//   imgbox:{
//     justifyContent:'center',
//     alignItems:'center',
//   }
// });

// export default Login;
