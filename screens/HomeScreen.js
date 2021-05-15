import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';

const HomeScreen =({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{height: '35%'}}>
                <Image
                    source={require('../assets/background.png')}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>

            <View style={{
                flex:1,
                marginTop: -40,
                backgroundColor: '#eff2f5',
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                paddingVertical: 24
            }}>
                <Text style={{ paddingLeft: 150, color:'#000', fontSize:25}}>Leaf Herb</Text>
            </View>
           
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#8fcbbc'
    },
    // header: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // footer: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     borderTopLeftRadius: 30,
    //     borderTopRightRadius: 30,
    //     paddingVertical: 50,
    //     paddingHorizontal: 30
    // },
   
});