import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBarHeightContext} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import {Icon} from 'react-native-paper';
import HomeScreen from '../screens/Dashboad/HomeScreen';
import ProfileScreen from '../screens/Dashboad/ProfileScreen';
import OrderScreen from '../screens/Order/OrderScreen';
import OffersScreen from '../screens/Offers/OffersScreen';

const BottomTabs: React.FC = () => {
  return (
    <BottomTabBarHeightContext.Consumer>
      {tabBarHeight => (
        <Tab.Navigator
          initialRouteName="HomeScreen"
          screenOptions={({route}) => ({
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              elevation: 0,
              backgroundColor: '#5F95FF',
              size: 40,
              paddingBottom: 2,
              height: 70,
            },
          })}>
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarLabel: 'HomeScreen',
              tabBarIcon: ({size, focused}) => {
                return (
                  <View style={[styles.box, {paddingBottom: focused ? 10 : 5}]}>
                    <Icon
                      source="view-grid"
                      size={size}
                      color={focused ? '#FFD600' : '#EAEAEA'}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: focused ? '#FFD600' : '#EAEAEA',
                        fontWeight: 'bold',
                      }}>
                      Home
                    </Text>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="OffersScreen"
            component={OffersScreen}
            options={{
              tabBarLabel: 'OffersScreen',
              tabBarIcon: ({size, focused}) => {
                return (
                  <View style={[styles.box, {paddingBottom: focused ? 10 : 5}]}>
                    <Icon
                      source="sale"
                      size={size}
                      color={focused ? '#FFD600' : '#EAEAEA'}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: focused ? '#FFD600' : '#EAEAEA',
                        fontWeight: 'bold',
                      }}>
                      Offers
                    </Text>
                  </View>
                );
              },
            }}
          />

          <Tab.Screen
            name="OrderScreen"
            component={OrderScreen}
            options={{
              tabBarLabel: 'OrderScreen',
              tabBarIcon: ({size, focused}) => {
                return (
                  <View style={[styles.box, {paddingBottom: focused ? 10 : 5}]}>
                    <Icon
                      source="shopping"
                      size={size}
                      color={focused ? '#FFD600' : '#EAEAEA'}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: focused ? '#FFD600' : '#EAEAEA',
                        fontWeight: 'bold',
                      }}>
                      Orders
                    </Text>
                  </View>
                );
              },
            }}
          />

          <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'ProfileScreen',
              tabBarIcon: ({size, focused}) => {
                return (
                  <View style={[styles.box, {paddingBottom: focused ? 10 : 5}]}>
                    <Icon
                      source="account-circle"
                      size={size}
                      color={focused ? '#FFD600' : '#EAEAEA'}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: focused ? '#FFD600' : '#EAEAEA',
                        fontWeight: 'bold',
                      }}>
                      Profile
                    </Text>
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
      )}
    </BottomTabBarHeightContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
    paddingTop: 10,
  },
});

export default BottomTabs;

// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {BottomTabBarHeightContext} from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Icon, MD3Colors } from 'react-native-paper';
// import HomeScreen from '../screens/Dashboad/HomeScreen';
// import ProfileScreen from '../screens/Dashboad/ProfileScreen';

// // function HomeScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Home Screen</Text>
// //     </View>
// //   );
// // }

// // function SettingsScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Settings Screen</Text>
// //     </View>
// //   );
// // }

// // function ProfileScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Profile Screen</Text>
// //     </View>
// //   );
// // }

// const BottomTabs: React.FC = () => {
//   return (
// <BottomTabBarHeightContext.Consumer>
// {tabBarHeight => (
//     <Tab.Navigator
//     initialRouteName="HomeScreen"
//           screenOptions={({route}) => ({
//             tabBarShowLabel: false,
//             headerShown: false,
//             tabBarStyle: {
//               position: 'absolute',
//               bottom: 0,
//               left: 0,
//               right: 0,
//               elevation: 0,
//               // hight: 50,
//               backgroundColor: '#5F95FF',
//               size: 40,
//               paddingBottom: 2,
//               height:70,
//             },
//           })}
//     >
//     <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
//           tabBarLabel: 'HomeScreen',
//           tabBarIcon: ({  size, focused }) => {
//             return(
//               <View
//               style={[styles.box,{paddingBottom: focused ? 10 : 5}]}>
//               <Icon source="view-grid"
//                 size={size}
//                 color={focused ? '#FFD600' : '#EAEAEA'}
//               />
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: focused ? '#FFD600' : '#EAEAEA',
//                   fontWeight: 'bold',
//                 }}>
//                 Home
//               </Text>
//             </View>
//             )
//           },
//         }} />

// <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
//           tabBarLabel: 'ProfileScreen',
//           tabBarIcon: ({  size, focused }) => {
//             return(
//               <View
//               style={[styles.box,{paddingBottom: focused ? 10 : 5}]}>
//               <Icon source="view-grid"
//                 size={size}
//                 color={focused ? '#FFD600' : '#EAEAEA'}
//               />
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: focused ? '#FFD600' : '#EAEAEA',
//                   fontWeight: 'bold',
//                 }}>
//                 Home
//               </Text>
//             </View>
//             )
//           },
//         }} />
//     {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//     {/* <Tab.Screen name="ProfileScreen" component={ProfileScreen} /> */}
//   </Tab.Navigator>
// )}
//   </BottomTabBarHeightContext.Consumer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box:{
//     alignItems: 'center',
//     justifyContent: 'center',

//     borderRadius: 10,
//     paddingTop: 10,
//   }
// });

// export default BottomTabs;
