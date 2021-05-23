import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tab1 from '../navigations/tabs/tab1';
import Tab2 from '../navigations/tabs/tab2';
import Tab3 from '../navigations/tabs/tab3';

const Tab = createMaterialTopTabNavigator();

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txt}>LEAF HERB</Text>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="ชื่อ" component={Tab1} />
        <Tab.Screen name="ค้นหา" component={Tab2} />
        {/* <Tab.Screen name="ประเภท" component={Tab3} /> */}
      </Tab.Navigator>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a352',
  },

  txt: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  txtinput: {
    padding: 7,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
    margin: 15,
    paddingLeft: 30,
    backgroundColor: '#fff',
  },

  icon: {
    position: 'absolute',
    left: 22,
    top: 22,
  },

  list: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#00a352',
  },

  txtlist: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
    fontFamily: 'K2D-Light',
  },
});
