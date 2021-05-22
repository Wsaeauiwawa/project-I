import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class tab2 extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      FindData:'',
      name:'',
      common_name:'',
      science_name:'',
      local_name:''

    };

  }

  SearchRecord=()=> {
    var FindData=this.state.FindData;

    if(FindData.length == 0) {
      alert("Please fill in...");
    }
    else{
      var SearchAPIURL="http://172.20.10.4:8080/herb/search.php";

      var header = {
        'Accept':'application/json',
        'Content-Type':'application/json'
      };
      var Data={
        FindData:FindData
      }
      fetch(
        SearchAPIURL,
        {
          method:'POST',
          header:header,
          body:JSON.stringify(Data)
        }
      )
      .then((response) => response.json())
      .then((response)=> {
        this.setState({name:response[0].name});
        this.setState({common_name:response[0].common_name});
        this.setState({science_name:response[0].science_name});
        this.setState({local_name:response[0].local_name});
      })
      .catch((error)=> {
        alert(error);
        console.log(error)
      })
    }
  }
    render() {
        return (
            <View style={styles.container}>
            <View style={{backgroundColor:'#c0e7cd'}}>
              <TextInput
                placeholder={"Search"}
                style={styles.txtinput}
                onChangeText={FindData=>this.setState({FindData})}
              />
              <Icon style={styles.icon} name="search" size={20} color="#ddd" />
            </View>
            <TouchableOpacity
              onPress={this.SearchRecord}
              style={styles.area}
            >
              <Text style={styles.paragraph}>Search</Text>

            </TouchableOpacity>

          </View>
        )
    }
}

export default tab2;

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
      borderColor: '#fff',
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
    paragraph: {
      margin: 5,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color:'#fff',
      fontFamily: "K2D-Light"
    },
    area:{
      backgroundColor: '#00a352',
      borderRadius:20,
      borderWidth:2,
      padding:2,
      borderColor:'#00a352',
      marginHorizontal:150
   },
  });
  
