import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const FirstScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);

    // Clean up the timeout on unmount
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <SafeAreaView>
      <Image source={require('../../assets/abc.png')} style={styles.img} />
    </SafeAreaView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
});

// import { Image, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useNavigation } from '@react-navigation/native';

// const FirstScreen = () => {
//     const navigation = useNavigation();
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//           navigation.navigate('Login');
//         }, 1500);
//       }, []);

//   return (
//     <SafeAreaView>
//       <Image source={require('../../assets/abc.png')} style={styles.img} />
//     </SafeAreaView>
//   )
// }

// export default FirstScreen

// const styles = StyleSheet.create({
//     img: {
//       width: '100%',
//       height: '100%',
//       backgroundColor: 'red',
//     },
//   });
