import React, {useContext, useState} from "react";
import {TextInput, TouchableOpacity, View, StyleSheet, Alert} from "react-native";
import {Button, Text} from "@rneui/base";
import styles from "../Component/styles";
import {AuthContext} from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay/src";


const  LoginScreen = ({navigation})=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const  dataContext = useContext(AuthContext)
    const isLoading = dataContext.isLoading;

    const onPress= ()=>{
        if(email.length===0){
            Alert.alert("","Enter email address to continue")
        }else if(password.length===0){
            Alert.alert("","Enter your password to continue")
        }else {
            dataContext.login(email, password)
        }
    }

    return(
        <View style={styles2.container}>
            <Spinner visible={isLoading} />
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Email'
                    onChangeText={(text)=>setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Set Password'
                    onChangeText={(text)=>setPassword(text)}
                    value={password}
                />
                <Button title={'Login'} buttonStyle={{borderRadius:20, height: 40}} onPress={onPress}/>
                <View style={{marginTop:10, flexDirection: 'row', justifyContent: "flex-start" }}>
                    <Text>You don't have an account? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                        <Text style={styles2.link}>Register</Text>
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

export  default  LoginScreen;