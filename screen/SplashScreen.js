import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../Theme/Colors';
import AppStatusBar from '../components/AppStatusBar';
import Fonts from '../Theme/Fonts';
import Logo from '../assets/images/VLogo.png';



const SplashScreen = ({navigation}) => {
  
  
    useEffect(() => {
        const timer = setTimeout(()=>{
          navigation.replace('Welcome');
        }, 3000);
      }, []);
  
    return (
        <View style={styles.container}>
            <AppStatusBar />
            <Image source={Logo} />        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorPrimary       
    },
    textStyle: {
        color: Colors.white,
        fontSize: 50,
        fontWeight: "900",
        fontFamily: Fonts.primaryExtraBold
    }
})


export default SplashScreen;
