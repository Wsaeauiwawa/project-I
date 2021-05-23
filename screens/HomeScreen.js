import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const HomeScreen = ({navigation}) => {
  const [ImageSource,setImageSource] = useState({});
  
  selectPhoto = () => {
    let options = {
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = response;
        setImageSource(source);
      }
    });
  } 
  openCamera = () => {
    let options = {
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        console.log('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        console.log('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        console.log(response.errorMessage);
        return;
        setImageSource(response)

      }
    });
  } 
  return (
    <View style={styles.container}>
      <View style={{height: '35%'}}>
        <Image
          source={require('../assets/background.png')}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: '#eff2f5',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: 24,
        }}>
        <Text style={{paddingLeft: 150, color: '#000', fontSize: 25}}>
          Leaf Herb
        </Text>
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Icon
            name="camera"
            size={50}
            color="#fff"
            style={{marginVertical: 10, paddingLeft: 50}}
          />
          <Text style={styles.TextStyle}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bt} onPress={selectPhoto}>
          <Icon
            name="image"
            size={50}
            color="#fff"
            style={{marginVertical: 10, paddingLeft: 50}}
          />
          <Text style={styles.TextStyle}>Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row'
  },
  button: {
    // width: '80%',
    backgroundColor: '#00BCD4',
    borderRadius: 7,
    marginTop: 30,
    height: 100,
    width:150,
    marginLeft:125
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  bt: {
    // width: '80%',
    backgroundColor: '#00BCD4',
    borderRadius: 7,
    marginTop: 30,
    height: 100,
    width:150,
    marginLeft:125

  },
});
