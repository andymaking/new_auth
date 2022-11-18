import React, {useContext, useState} from "react";
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Button, Text} from "@rneui/base";
import styles from "../Component/styles";
import {AuthContext} from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay/src";

const  RegisterScreen = ({navigation})=>{
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const  dataContext = useContext(AuthContext)

    const isLoading = dataContext.isLoading;
    console.log(isLoading)

    return(
        <View style={styles2.container}>
            <Spinner visible={isLoading}/>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Enter First Name'
                    onChangeText={(text)=>setFirstName(text)}
                    value={firstName}
                    keyboardType='name-phone-pad'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter Last Name'
                    onChangeText={(text)=>setLastName(text)}
                    value={lastName}
                    keyboardType='name-phone-pad'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter Phone Number'
                    onChangeText={(text)=>setPhoneNumber(text)}
                    value={phoneNumber}
                    keyboardType='phone-pad'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter Email'
                    onChangeText={(text)=>setEmail(text)}
                    value={email}
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Set Password'
                    onChangeText={(text)=>setPassword(text)}
                    value={password}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirm Password'
                    onChangeText={(text)=>setConfirmPassword(text)}
                    value={confirmPassword}
                />
                <Button title={'Sign Up'} buttonStyle={{borderRadius:20, height: 40}} onPress={()=>{
                    dataContext.register(firstName, lastName, email, phoneNumber, password, confirmPassword)
                }} />
                <View style={{marginTop:10, flexDirection: 'row', justifyContent: "flex-start" }}>
                    <Text>Already have an Account? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles2.link}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles2 = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: 16
    },
    link:{
        color: 'blue'
    }
})

export  default  RegisterScreen;