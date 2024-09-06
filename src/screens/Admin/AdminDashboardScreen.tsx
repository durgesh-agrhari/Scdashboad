import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Button, Card, Title} from 'react-native-paper';
import {List, Divider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Notification {
  id: string;
  user: string;
  message: string;
  time: string;
  isNew: boolean;
}

const AdminDashboardScreen: React.FC = () => {
  const [loader, setloader] = useState(false);
  const postAction = () => {
    setloader(true);
  };
  function renderModel() {
    const [orderStatus, setOrderStatus] = React.useState<string>('All');
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [serviceType, setServiceType] =
      React.useState<string>('Shoe Polishing');
    const [isDatePickerVisible, setDatePickerVisibility] =
      React.useState(false);
    const [showDropDown, setShowDropDown] = React.useState(false);

    const serviceTypes = [
      {label: 'Shoe Polishing', value: 'Shoe Polishing'},
      // Add more options if needed
    ];

    const handleConfirm = (selectedDate: Date) => {
      setDate(selectedDate);
      setDatePickerVisibility(false);
    };
    const [checked, setChecked] = React.useState('first');
    return (
      <Modal transparent={true} visible={loader}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.8)',
          }}>
          <View
            style={{
              width: '100%',
              height: 600,
              backgroundColor: 'white',
              bottom: 0,
              position: 'absolute',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              // marginHorizontal:20,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.left1}>Notifications</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.right1}
                  onPress={() => setloader(false)}>
                  <Text style={{color: 'red', fontWeight: 'bold'}}>Cancil</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container2}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Text style={styles.orderstatus}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.orderstatus}>Read</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.orderstatus}>Unread</Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 20, marginHorizontal: 10}}>
                <FlatList
                  data={notifications}
                  renderItem={renderNotification}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  const notifications: Notification[] = [
    {
      id: '1',
      user: 'Rishi',
      message: 'made a new order, order Id #0987',
      time: '9:42 AM',
      isNew: true,
    },
    {
      id: '2',
      user: 'Rishi',
      message: 'made a new order, order Id #0987',
      time: '9:42 AM',
      isNew: false,
    },
    {
      id: '3',
      user: 'Rishi',
      message: 'made a new order, order Id #0987',
      time: '9:42 AM',
      isNew: false,
    },
  ];

  const renderNotification = ({item}: {item: Notification}) => (
    <View>
      <List.Item
        title={`${item.user} ${item.message}`}
        description={item.time}
        titleStyle={
          item.isNew ? styles.newNotification : styles.oldNotification
        }
        descriptionStyle={styles.time}
        style={item.isNew ? styles.newContainer : styles.oldContainer}
      />
      <Divider />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.jpg')}
          style={styles.img}
          //   style={styles.headerText}
        />
        {/* // <Text style={styles.headerText}>Mr. Shoe Cleaner</Text> */}
        <TouchableOpacity
          onPress={() => {
            postAction();
          }}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Statistics Cards */}
      <View style={styles.cardsContainer}>
        <Card style={styles.card}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2X3sEgdTho8s-wNip2lf7Dq0c58VVwjQMA&s',
            }}
            style={{width: 40, height: 40, borderRadius: 50}}
          />
          <Title style={{color: '#FFD600', fontWeight: 'bold'}}>
            Total Orders
          </Title>
          <Text style={styles.cardValue}>21</Text>
        </Card>
        <Card style={styles.card}>
          <Image
            source={{
              uri: 'https://p.turbosquid.com/ts-thumb/UJ/YjQxfg/tMgWNtul/victoryhandsignemoji3dsmodel000/jpg/1588230361/300x300/sharp_fit_q85/c3c617595caea45fe4344f855f5249c679d37042/victoryhandsignemoji3dsmodel000.jpg',
            }}
            style={{width: 40, height: 40, borderRadius: 50}}
          />
          <Title style={{color: '#FFD600', fontWeight: 'bold'}}>
            New Orders
          </Title>
          <Text style={styles.cardValue}>8</Text>
        </Card>
        <Card style={styles.card}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/496603666/vector/flat-icon-check.jpg?s=612x612&w=0&k=20&c=BMYf-7moOtevP8t46IjHHbxJ4x4I0ZoFReIp9ApXBqU=',
            }}
            style={{width: 40, height: 40, borderRadius: 50}}
          />
          <Title style={{color: '#FFD600', fontWeight: 'bold'}}>
            Total Customers
          </Title>
          <Text style={styles.cardValue}>18</Text>
        </Card>
        <Card style={styles.card}>
          <Image
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/2395/PNG/512/dollar_money_logo_icon_145690.png',
            }}
            style={{width: 40, height: 40, borderRadius: 50}}
          />
          <Title style={{color: '#FFD600', fontWeight: 'bold'}}>
            Total Revenue
          </Title>
          <Text style={styles.cardValue}>₹5,500</Text>
        </Card>
      </View>

      {/* Orders Status */}
      <View style={styles.ordersContainer}>
        <Title style={styles.ordersTitle}>Orders</Title>
        <View style={styles.orderStatus}>
          <View style={styles.orderItem}>
            <Text style={styles.orderCount}>15</Text>
            <Text style={styles.orderLabel}>Completed</Text>
          </View>
          <View style={styles.orderItem}>
            <Text style={styles.orderCount}>12</Text>
            <Text style={styles.orderLabel}>In Process</Text>
          </View>
          <View style={styles.orderItem}>
            <Text style={styles.orderCount}>5</Text>
            <Text style={styles.orderLabel}>On Delivery</Text>
          </View>
          <View style={styles.orderItem}>
            <Text style={styles.orderCount}>7</Text>
            <Text style={styles.orderLabel}>New</Text>
          </View>
        </View>
      </View>
      {renderModel()}
    </ScrollView>
  );
};

export default AdminDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    // marginTop: 15,
  },
  container2: {
    flex: 2,
    backgroundColor: '#F7F9FC',
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#5F95FF',
    padding: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  img: {
    width: 80,
    height: 60,
  },
  notificationIcon: {
    fontSize: 25,
    color: 'gold',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    marginHorizontal: 20,
  },
  card: {
    width: '48%',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#4069B2',
    borderRadius: 10,
  },
  cardValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  ordersContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  ordersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderItem: {
    alignItems: 'center',
    backgroundColor: '#FFFBEA',
    padding: 10,
    borderRadius: 10,
    width: '22%',
  },
  orderCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  orderLabel: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
  },
  left1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  right1: {
    marginTop: 20,
    marginRight: 20,
    // backgroundColor: 'gray',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'red',
    borderWidth: 1,
  },
  left: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  right: {
    marginTop: 20,
    marginRight: 20,
    borderRadius: 50,
    padding: 1,
  },

  label: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  applyButton: {
    marginTop: 16,
  },
  orderstatus: {
    marginLeft: 10,
    borderColor: '#FF8C00',
    borderWidth: 2,
    borderRadius: 5,
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#FF8C00',
    fontWeight: 'bold',
    fontSize: 16,
  },

  newNotification: {
    fontWeight: 'bold',
    color: '#000',
  },
  oldNotification: {
    color: '#6c757d',
  },
  time: {
    fontSize: 12,
    color: '#6c757d',
  },
  newContainer: {
    backgroundColor: '#fff8e1', // Light yellow background for new notifications
  },
  oldContainer: {
    backgroundColor: 'white', // White background for old notifications
  },
});
