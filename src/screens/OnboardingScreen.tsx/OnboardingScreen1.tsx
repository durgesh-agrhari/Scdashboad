import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const OnboardingScreen1: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.skip}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BottomTabs');
            }}>
            <Text style={{fontSize: 20, fontWeight:'bold', color:'black'}}>Skip</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../assets/a1.jpg')} style={styles.image} />
        <Text style={{fontSize: 17, textAlign: 'center', fontWeight: '900', color:'black', marginTop:20}}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
        <Text style={{fontSize: 17, textAlign: 'center', fontWeight: '900', color:'black'}}>
          {' '}
          Odio mauris amet vel tellus turpis.
        </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('OnboardingScreen2');
          }}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen1;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 90,
    height: 400,
    width: 400,
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    padding: 8,
  },
  skip: {
    marginTop: 60,
    marginLeft: 320,
  },
  btn: {
    backgroundColor: '#5F95FF',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 60,
  },
});
