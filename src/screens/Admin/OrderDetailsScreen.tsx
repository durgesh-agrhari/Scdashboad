import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Text,
  TextInput,
  Button,
  Card,
  Title,
  Menu,
  Divider,
  Icon,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const OrderDetailsScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [status, setStatus] = useState<string>('In Magic Process');
  const [expectedDate, setExpectedDate] = useState<Date | null>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>('');

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setExpectedDate(selectedDate);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: '#5F95FF',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          marginBottom: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AdminOrderScreen');
            }}>
            <Icon source="arrow-left" size={30} color={'#EAEAEA'} />
          </TouchableOpacity>

          <Title style={styles.title1}>Order Details</Title>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UpdateOrder');
          }}>
          <Icon source="pencil" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{marginHorizontal: 15}}
        showsVerticalScrollIndicator={false}>
        <Title style={styles.title}>Order Information</Title>
        <View style={styles.section}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Order ID: #0001
              </Text>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Customer Name: #0001
              </Text>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Service: Shoe Polishing
              </Text>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Order Date: 24/08/2024
              </Text>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Order Total: ₹100
              </Text>
            </Card.Content>
          </Card>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Delivery Address</Title>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Number 12, AB Tower, opposite 5th cross street, Anna Nagar,
                Bangalore, Karnataka
              </Text>
            </Card.Content>
          </Card>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Images from Customer</Title>
          <View style={styles.imageContainer}>
            <View style={styles.imageBox}>
              <Image
                source={{uri: 'https://via.placeholder.com/100'}}
                style={styles.image}
              />
            </View>
            <View style={styles.imageBox}>
              <Image
                source={{uri: 'https://via.placeholder.com/100'}}
                style={styles.image}
              />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Status</Text>
          <Menu
            visible={false}
            onDismiss={() => {}}
            anchor={
              <TextInput
                mode="outlined"
                label="Status"
                value={status}
                onChangeText={text => setStatus(text)}
              />
            }>
            <Menu.Item
              onPress={() => setStatus('In Magic Process')}
              title="In Magic Process"
            />
            <Menu.Item
              onPress={() => setStatus('Delivered')}
              title="Delivered"
            />
          </Menu>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Expected Delivery Date</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              mode="outlined"
              label="Expected Delivery Date"
              value={expectedDate?.toLocaleDateString() || ''}
              editable={false}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={expectedDate || new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        <View style={styles.section}>
          <TextInput
            mode="outlined"
            label="Add Notes"
            value={notes}
            onChangeText={text => setNotes(text)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Upload Images</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <TouchableOpacity style={styles.imgbtn} onPress={() => {}}>
              <Text>Choose Images</Text>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <Text>No images selected</Text>
            </View>
          </View>
        </View>

        <Button mode="contained" style={styles.submitButton} onPress={() => {}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            Save Order Details
          </Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#ffffff',
  },
  section: {
    marginBottom: 20,
  },
  title1: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  card: {
    backgroundColor: '#4069B2',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    // color:'white'
  },
  imgbtn: {
    borderBlockColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    width: 120,
    padding: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBox: {
    width: 180,
    height: 180,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#FFD600',
    marginBottom: 50,
    borderRadius: 10,
  },
});

export default OrderDetailsScreen;
