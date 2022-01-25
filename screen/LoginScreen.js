import React, {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import Strings from "../Theme/Strings";
import Fonts from "../Theme/Fonts";
import Color from "../Theme/Colors";
import Logo from '../assets/images/logo.png';
import Toast from 'react-native-simple-toast';
import {TouchableOpacity} from "react-native-gesture-handler";
import Lock from '../assets/icons/padlock.png'
import AppStatusBar from '../components/AppStatusBar';
import UserInput from "../components/UserInput";





import { Icon } from 'react-native-vector-icons';

const LoginScreen = () => {

    const [mobile, onChangeMobile] = useState();
    const [password, onChangePassword] = useState();
    const [numeric, setNumeric] = useState();

    

    const userLogin = () => {
        Alert.alert("Login Clicked");
    }

    return (
       <View style={styles.container}>
           <AppStatusBar />
           <ScrollView style={styles.scrollview}>
                <View style={{ marginTop:20, marginBottom:20 }}>
                    {/* <Logo /> */}
                    <Text style={styles.title}>Login into VeriSure</Text>
                    <Text style={styles.subTitle}>Enter your phone number to continue</Text>
                    <View style={{ position: 'relative' }}>
                        <UserInput
                            placeholder="Enter Mobile Number"
                            maxLength={10}
                            value={mobile}
                            onChangeText={onChangeMobile}
                            keyboardType={numeric} 
                            style={{ paddingLeft: 30 }}
                        />
                        {/* <Icon name='smartphone' size={24} color={Color.black} style={{position: 'absolute', top: 12}} /> */}
                        <UserInput
                            placeholder="Password"
                            maxLength={10}
                            value={password}
                            onChangeText={onChangePassword}
                            keyboardTyepe={numeric} 
                            style={{ paddingLeft: 30 }}
                        />
                        {/* <Icon name='lock' size={24} color={Color.black} style={{position: 'absolute', top: 12}} /> */}
                    </View>
                </View>
           </ScrollView>
       </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    logo: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    title: {
        fontFamily: Fonts.primaryBold,
        fontSize: 20,
        color: Color.titleColor,
        marginTop: 50,

    },
    subTitle: {
        fontFamily: Fonts.primaryRegular,
        fontSize: 16,
        color: Color.grayColor,
        marginTop: 10
    },
    space: {
        height: 50
    },
    smallButton: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Color.colorPrimary,
        borderRadius: 15,
        marginLeft: 50
    },
    newUser: {
        color: Color.gray,
        fontFamily: Fonts.primarySemiBold,
        alignSelf: 'center',
        fontSize: 16

    },
    inputIcon: {
        height: 18,
        width: 18,
        position: 'absolute',
        top: 14,
        left: 10,
        resizeMode:'contain'
    }

})

export default LoginScreen;


