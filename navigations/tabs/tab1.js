import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Tab1 extends Component {

    state = {
      herb: []
    }

    fetchData= async()=>{
      const response = await fetch('http://192.168.100.27:8080/connect.php');
      const detail = await response.json();
      this.setState({herb: detail, filterHerb: detail});
    }
    componentDidMount(){
      this.fetchData();
    }

    onChangeText(text){
        // console.log('texChanged', text)
        let filterArray = this.state.filterHerb
        let searchResult = filterArray.filter(leaf => 
          leaf.name.includes(text)
        )
        this.setState({herb: searchResult})

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
        {/* <TabScreen/> */}
        <FlatList
         style={{backgroundColor:'#c0e7cd'}}
         data={this.state.herb}
         renderItem={({item}) => (
           <View style={styles.list}>
             <Text style={styles.txtlist}>{item.name}</Text>
             <Text style={{color:'#fff'}}>ชื่อสามัญ: {item.common_name}</Text>
             <Text style={{color:'#fbfbfb'}}>ชื่อวิทยาศาสตร์: {item.science_name}</Text>

           </View>
         )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#00a352'
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
