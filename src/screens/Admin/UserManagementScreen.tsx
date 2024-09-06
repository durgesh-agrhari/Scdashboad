import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Searchbar, DataTable, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const UserManagementScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '2',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '3',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '4',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '5',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '6',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '7',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '8',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '9',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '10',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '11',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '12',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '13',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '14',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '15',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '16',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '17',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '18',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '19',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
    {
      id: '20',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+91 9876543210',
    },
  ]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const renderUser = ({item}: {item: User}) => (
    <DataTable.Row key={item.id}>
      <DataTable.Cell>{item.name}</DataTable.Cell>
      <DataTable.Cell>{item.email}</DataTable.Cell>
      <DataTable.Cell>{item.phone}</DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>User Management</Text>
      <Searchbar
        placeholder="Search in Users"
        onChangeText={handleSearchChange}
        value={searchQuery}
        style={styles.searchBar}
      />
      <View style={{marginHorizontal: 10}}>
        <DataTable>
          <DataTable.Header
            style={{backgroundColor: '#5F95FF', borderRadius: 10}}>
            <DataTable.Title>User Name</DataTable.Title>
            <DataTable.Title>Email ID</DataTable.Title>
            <DataTable.Title>Phone Number</DataTable.Title>
          </DataTable.Header>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredUsers}
            renderItem={renderUser}
            keyExtractor={item => item.id}
          />
        </DataTable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#5F95FF',
    padding: 20,
    color: 'white',
  },
  searchBar: {
    marginBottom: 18,
    marginHorizontal: 10,
    marginTop: 20,
  },
});

export default UserManagementScreen;
