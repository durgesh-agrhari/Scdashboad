import React, {useState, useRef} from 'react';
import {View, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import {Button, Title, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';

const OTPScreen: React.FC = () => {
  const [otp, setOtp] = useState<string>('');
  const navigation = useNavigation<NavigationProp<any>>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const otpInputRef = useRef<OTPTextView>(null);

  const handleOTPSubmit = () => {
    if (otp.length !== 6) {
      setErrorMessage('Please enter a 6-digit OTP.');
    } else {
      setErrorMessage(null);
      // Handle OTP verification logic here, e.g., API call
      console.log('OTP entered:', otp);

      navigation.navigate('OTPVerfiedScreen');
    }
  };

  const clearText = () => {
    otpInputRef.current?.clear();
  };

  const setText = (text: string) => {
    otpInputRef.current?.setValue(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{
          height: '100%',
          width: '100%',
        }}
        behavior="padding">
        <View style={styles.loginbox}>
          <View style={styles.imgbox}>
            <Image
              source={require('../../assets/logo.jpg')}
              style={styles.img}
            />
          </View>
          <Title style={styles.title}>OTP Verification</Title>
          <Title style={styles.txt}>
            Enter the verification code we just sent{' '}
          </Title>
          <Title style={styles.txt2}>on mobile number</Title>
          <Text style={{color: 'white', fontSize: 15}}>Enter OTP</Text>

          <View style={{marginVertical: 22, width: 300}}>
            <OTPTextView
              ref={otpInputRef}
              inputCount={6}
              handleTextChange={text => setOtp(text)}
            />
          </View>

          {errorMessage && (
            <Text style={{color: 'red', marginBottom: 10}}>{errorMessage}</Text>
          )}

          <Button
            mode="contained"
            onPress={handleOTPSubmit}
            style={styles.button}>
            <Text style={styles.btntext}>Verify</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    fontSize: 25,
  },
  txt: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  txt2: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    // height: 45,
    marginTop: 10,
    backgroundColor: '#FFD600',
    borderRadius: 5,
  },
  btntext: {
    fontSize: 18,
    color: 'black',
    padding: 5,
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

export default OTPScreen;

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   Image,
//   KeyboardAvoidingView,
//   TouchableOpacity,
// } from 'react-native';
// import {TextInput, Button, Title, Text} from 'react-native-paper';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {useNavigation, NavigationProp} from '@react-navigation/native';
// // import OtpInputs from 'react-native-otp-inputs';
// import OTPTextView from 'react-native-otp-textinput';

// const OTPScreen: React.FC = () => {
//   const [otp, setOtp] = useState<string>('');
//   const navigation = useNavigation<NavigationProp<any>>();
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const handleOTPSubmit = () => {
//     if (otp.length !== 6) {
//       setErrorMessage('Please enter a 6-digit OTP.');
//     } else {
//       setErrorMessage(null);
//       // Handle OTP verification logic here, e.g., API call
//       console.log('OTP entered:', otp);
//     }
//   };

//   clearText = () => {
//     this.otpInput.clear();
//   };

//   setText = () => {
//     this.otpInput.setValue('1234');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         style={{
//           height: '100%',
//           width: '100%',
//         }}>
//         <View style={styles.loginbox}>
//           <View style={styles.imgbox}>
//             <Image
//               source={require('../../assets/logo.jpg')}
//               style={styles.img}
//             />
//           </View>
//           <Title style={styles.title}>OTP Verification</Title>
//           <Title style={styles.txt}>
//             Enter the verification code we just sent{' '}
//           </Title>
//           <Title style={styles.txt2}>on mobile number </Title>
//           <Text style={{color: 'white', fontSize: 15}}>Enter OTP</Text>

//           {/* <TextInput
//             label=""
//             placeholder=""
//             placeholderTextColor="white"
//             value={otp}
//             onChangeText={text => setOtp(text)}
//             style={styles.input}
//             keyboardType="numeric"
//             maxLength={6}
//           /> */}

//           <View style={{marginVertical: 22, width: 300}}>
//             <OTPTextView ref={e => (this.otpInput = e)} />
//           </View>

//           <Button
//             mode="contained"
//             onPress={() => {
//               navigation.navigate('OTPVerfiedScreen');
//             }}
//             style={styles.button}>
//             <Text style={styles.btntext}>Send OTP</Text>
//           </Button>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#304f80',
//   },
//   loginbox: {
//     height: '85%',
//     paddingHorizontal: 30,
//     justifyContent: 'center',
//     backgroundColor: '#5F95FF',
//     borderBottomRightRadius: 70,
//     borderBottomLeftRadius: 70,
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: 20,
//     color: 'white',
//     fontSize: 25,
//   },
//   input: {
//     // marginLeft: 5,
//     width: '100%',
//     marginBottom: 20,
//     backgroundColor: '#5F95FF',
//     borderBlockColor: 'white',
//     borderBottomWidth: 2,
//   },
//   inputbox: {
//     flexDirection: 'row',
//   },
//   code: {
//     width: '10%',
//     marginTop: 18,
//     marginBottom: 20,
//     backgroundColor: '#5F95FF',
//     borderBlockColor: 'white',
//     borderBottomWidth: 2,
//   },
//   coden: {
//     fontSize: 20,
//     color: 'white',
//   },
//   txt: {
//     color: 'white',
//     fontSize: 15,
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   txt2: {
//     color: 'white',
//     fontSize: 15,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   button: {
//     height: 45,
//     marginTop: 10,
//     backgroundColor: '#FFD600',
//     borderRadius: 5,
//   },
//   btntext: {
//     fontSize: 20,
//     color: 'black',
//     padding: 5,
//   },
//   img: {
//     width: '45%',
//     height: 120,
//     backgroundColor: 'red',
//   },
//   imgbox: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   ViewButton: {
//     // flex: 1,
//     justifyContent: 'flex-end',
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   buttonbox: {
//     width: 280,
//     height: 40,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'gray',
//   },
// });

// export default OTPScreen;

// import React, { useRef } from 'react';
// import { StyleSheet, View, Image, StatusBar } from 'react-native';
// import { Text, Button } from 'react-native-paper';
// import OTPTextView from 'react-native-otp-textinput';
// import { useNavigation, NavigationProp } from '@react-navigation/native';

// type AuthStackParamList = {
//   OTPVerifiedScreen: undefined;
// };

// const InputOtp: React.FC = () => {
//   const otpInputRef = useRef<OTPTextView>(null); // Using useRef for OTP input
//   const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

//   const handleVerify = () => {
//     navigation.navigate('OTPVerifiedScreen');
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//       <View style={styles.otpbox}>
//         <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
//         <Text style={styles.title}>OTP Verification</Text>
//         <Text style={styles.subtitle}>Enter the verification code we just sent</Text>
//         <Text style={styles.subtitle}>on your mobile number</Text>

//         <View style={styles.otpInputContainer}>
//           <Text style={styles.label}>Enter OTP</Text>
//           <OTPTextView ref={otpInputRef} />
//         </View>

//         <Button mode="contained" style={styles.verifyButton} onPress={handleVerify}>
//           Verify
//         </Button>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#376dc4',
//   },
//   otpbox: {
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#5F95FF',
//     height: '100%',
//     borderBottomRightRadius: 70,
//     borderBottomLeftRadius: 70,
//   },
//   logo: {
//     height: 120,
//     width: 140,
//     marginTop: 50,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '700',
//     marginVertical: 20,
//     textAlign: 'center',
//     color: 'white',
//   },
//   subtitle: {
//     fontSize: 15,
//     textAlign: 'center',
//     color: 'white',
//   },
//   otpInputContainer: {
//     marginVertical: 22,
//     width: 300,
//   },
//   label: {
//     fontSize: 15,
//     textAlign: 'center',
//     color: 'white',
//     marginBottom: 10,
//   },
//   verifyButton: {
//     marginTop: 30,
//     width: 280,
//     height: 40,
//     justifyContent: 'center',
//     backgroundColor: '#FFD600',
//   },
// });

// export default InputOtp;
