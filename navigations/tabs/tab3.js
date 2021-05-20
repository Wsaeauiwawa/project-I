import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class tab3 extends Component {
    onChangeText(text){
        console.log('texChanged', text)
        
    }
    render() {

        return (
            <View style={styles.container}>
            <View style={{backgroundColor:'#c0e7cd'}}>
              <TextInput
                placeholder="Search"
                style={styles.txtinput}
                onChangeText={text => this.onChangeText(text)}
              />
              <Icon style={styles.icon} name="search" size={20} color="#ddd" />
            </View>
          </View>
        )
    }
}

export default tab3;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#c0e7cd'
    },
  
    txt: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
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
      backgroundColor: '#00a352'
    },
  
    txtlist: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#fff',
      fontFamily: "K2D-Light"
    },
  });
  
