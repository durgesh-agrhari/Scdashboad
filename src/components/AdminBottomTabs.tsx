import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBarHeightContext} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon, MD3Colors} from 'react-native-paper';
// import HomeScreen from '../screens/Dashboad/HomeScreen';
import ProfileScreen from '../screens/Dashboad/ProfileScreen';
// import OrderScreen from '../screens/Order/OrderScreen';
// import OffersScreen from '../screens/Offers/OffersScreen';
import AdminDashboardScreen from '../screens/Admin/AdminDashboardScreen';
import AdminOrderScreen from '../screens/Admin/AdminOrderScreen';
import UserManagementScreen from '../screens/Admin/UserManagementScreen';


const AdminBottomTabs: React.FC = () => {
  return (
    <BottomTabBarHeightContext.Consumer>
      {tabBarHeight => (
        <Tab.Navigator
          initialRouteName="AdminDashboardScreen"
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
            name="AdminDashboardScreen"
            component={AdminDashboardScreen}
            options={{
              tabBarLabel: 'AdminDashboardScreen',
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
                      Destboard
                    </Text>
                  </View>
                );
              },
            }}
          />

          <Tab.Screen
            name="AdminOrderScreen"
            component={AdminOrderScreen}
            options={{
              tabBarLabel: 'AdminOrderScreen',
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
            name="UserManagementScreen"
            component={UserManagementScreen}
            options={{
              tabBarLabel: 'UserManagementScreen',
              tabBarIcon: ({size, focused}) => {
                return (
                  <View style={[styles.box, {paddingBottom: focused ? 10 : 5}]}>
                    <Icon
                      source="account"
                      size={size}
                      color={focused ? '#FFD600' : '#EAEAEA'}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: focused ? '#FFD600' : '#EAEAEA',
                        fontWeight: 'bold',
                      }}>
                      Users
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

export default AdminBottomTabs;
