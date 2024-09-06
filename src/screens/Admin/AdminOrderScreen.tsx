import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';

// import {View, StyleSheet} from 'react-native';
import {
  Button,
  RadioButton,
  Text,
  TextInput,
  IconButton,
  Card,
} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDown from 'react-native-paper-dropdown';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation, NavigationProp} from '@react-navigation/native';

interface Order {
  id: string;
  service: string;
  status: string;
}

const orders: Order[] = [
  {id: '00001', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00002', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00003', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00004', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00005', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00006', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00007', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00008', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00009', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00010', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00011', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00012', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00013', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00014', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00015', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00016', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00017', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00018', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00019', service: 'Shoe Polishing', status: 'In Process'},
  {id: '00020', service: 'Shoe Polishing', status: 'In Process'},

  // Add more orders as needed
];

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const AdminOrderScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const renderItem = ({item}: {item: Order}) => (
    <Card style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.cell}>{item.id}</Text>
        <Text style={styles.cell}>{item.service}</Text>
        <Text style={[styles.cell, styles.status]}>{item.status}</Text>
        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OrderDetailsScreen');
            }}>
            <IconButton icon="eye" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UpdateOrder');
            }}>
            <IconButton icon="pencil" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );

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
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              height: 350,
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
                <Text style={styles.left1}>Edit Location Address</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.right1}
                  onPress={() => setloader(false)}>
                  <Text
                    style={{color: 'red', fontWeight: 'bold', fontSize: 16}}>
                    Cancil
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{justifyContent: 'space-between'}}>
              {/* <View style={styles.edittextbox}>
                <TextInput
                  placeholder="Edit T itle"
                  placeholderTextColor="green"
                />
              </View> */}
              {/* <View style={styles.edittextbox}>
                <TextInput
                  placeholder="Edit your Location "
                  placeholderTextColor="green"
                  numberOfLines={5}
                  multiline={true}
                />
              </View> */}
              <TouchableOpacity
              // style={styles.btn}
              >
                {/* <Text
                  style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
                  Update
                </Text> */}
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>Order Status</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity>
                  <Text style={styles.orderstatus}>In Progress</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.orderstatus}>New Order</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.orderstatus}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.orderstatus}>Shiped</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.orderstatus}>Delivered</Text>
                </TouchableOpacity>
              </ScrollView>

              <Text style={styles.label}>Order Date</Text>
              <Button onPress={() => setDatePickerVisibility(true)}>
                {date ? date.toDateString() : 'Select Date'}
              </Button>
              {/* <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={() => setDatePickerVisibility(false)}
              /> */}

              <Text style={styles.label}>Service Type</Text>

              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => console.log('Apply filter')}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Apply filter
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All Orders</Text>
        <IconButton
          icon="filter"
          size={25}
          iconColor="white"
          onPress={() => {
            postAction();
          }}
        />
      </View>

      <TextInput style={styles.searchInput} placeholder="Search in orders" />
      <View style={{marginHorizontal: 20}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={orders}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View style={styles.listHeader}>
              <Text style={[styles.headerCell, styles.idColumn]}>Order Id</Text>
              <Text style={styles.headerCell}>Service</Text>
              <Text style={styles.headerCell}>Status</Text>
              <Text style={[styles.headerCell, styles.actionColumn]}>
                Action
              </Text>
            </View>
          }
        />
      </View>
      {renderModel()}
    </View>
  );
};

export default AdminOrderScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F7F9FC',
    // paddingHorizontal: 10,
    // paddingTop: 20,
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
    color: 'white',
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginHorizontal: 20,
  },
  listHeader: {
    flexDirection: 'row',
    backgroundColor: '#4069B2',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  idColumn: {
    flex: 0.8,
  },
  actionColumn: {
    flex: 0.6,
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  status: {
    color: 'orange', // or any color that represents "In Process"
  },
  actions: {
    flexDirection: 'row',
    flex: 0.9,
    justifyContent: 'space-around',
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
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'red',
    borderWidth: 2,
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

  // container: {
  //   flex: 1,
  //   padding: 16,
  //   backgroundColor: 'white',
  // },
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
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
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
});
