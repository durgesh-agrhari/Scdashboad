// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../screens/Auth/FirstScreen';
import Login from '../screens/Auth/Login';
import OTPScreen from '../screens/Auth/OTPScreen';
import OTPVerfiedScreen from '../screens/Auth/OTPVerfiedScreen';
import OnboardingScreen1 from '../screens/OnboardingScreen.tsx/OnboardingScreen1';
import OnboardingScreen2 from '../screens/OnboardingScreen.tsx/OnboardingScreen2';
import OnboardingScreen3 from '../screens/OnboardingScreen.tsx/OnboardingScreen3';
import BottomTabs from '../components/BottomTabs';
// import LaundaryServiceScreen from '../screens/Dashboad/LaundaryServiceScreen';
// import OrderPlacedScreen from '../screens/Order/OrderPlacedScreen';
// import OrderPlacedSucessfully from '../screens/Order/OrderPlacedSucessfully';
// import OrderTracking from '../screens/Order/OrderTracking';
import AdminBottomTabs from '../components/AdminBottomTabs';
import OrderDetailsScreen from '../screens/Admin/OrderDetailsScreen';
import UpdateOrder from '../screens/Admin/UpdateOrder';
import UpdateProfileScreen from '../screens/Admin/UpdateProfileScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="OTPVerfiedScreen" component={OTPVerfiedScreen} />
        <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
        <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
        <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
        {/* <Stack.Screen
          name="LaundaryServiceScreen"
          component={LaundaryServiceScreen}
        /> */}
        {/* <Stack.Screen name="OrderTracking" component={OrderTracking} /> */}
        {/* <Stack.Screen name="OrderPlacedScreen" component={OrderPlacedScreen} /> */}
        <Stack.Screen name="AdminBottomTabs" component={AdminBottomTabs} />
        <Stack.Screen name="UpdateOrder" component={UpdateOrder} />
        <Stack.Screen
          name="UpdateProfileScreen"
          component={UpdateProfileScreen}
        />
        <Stack.Screen
          name="OrderDetailsScreen"
          component={OrderDetailsScreen}
        />
        {/* <Stack.Screen
          name="OrderPlacedSucessfully"
          component={OrderPlacedSucessfully}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
