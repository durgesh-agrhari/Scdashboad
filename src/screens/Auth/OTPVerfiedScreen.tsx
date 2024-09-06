import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const OTPVerifiedScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOTPSubmit();
    }, 2000); // 3-second delay

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleOTPSubmit = () => {
    navigation.navigate('OnboardingScreen1');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/done.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>
        OTP verified successfully
      </Text>
    </View>
  );
};

export default OTPVerifiedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F95FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 140,
  },
  text: {
    color: 'white',
    fontSize: 25,
    marginTop: 20,
  },
});


// import React, { useEffect } from 'react';
// import {StyleSheet, View, Image, Text} from 'react-native';
// import { useNavigation, NavigationProp } from '@react-navigation/native';


// const OTPVerfiedScreen: React.FC = () => {
//   const navigation = useNavigation<NavigationProp<any>>();
//   useEffect(() => {
//     handleOTPSubmit();
//   }, [3000]);

//   const handleOTPSubmit = () => {
//     navigation.navigate('OnboardingScreen1');
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/done.jpg')}
//         style={styles.image}
//       />
//       <Text style={styles.text}>
//         OTP verified successfully
//       </Text>
//     </View>
//   );
// };

// export default OTPVerfiedScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#5F95FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     height: 140,
//     width: 140,
//   },
//   text: {
//     color: 'white',
//     fontSize: 25,
//     marginTop: 20,
//   },
// });
