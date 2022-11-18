import React, {useContext} from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from "@rneui/base";
import {AuthContext} from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay/src";

const  HomeScreen = ()=>{

    const dataContext = useContext(AuthContext)
    const logout = dataContext.logout
    const user = dataContext.userInfo
    const isLoading = dataContext.isLoading;

    return(
        <View style={styles2.container}>
            <Spinner visible={isLoading} />
            <Text style={{fontWeight:'bold', alignSelf: 'center'}}>{user.data.first_name} {user.data.last_name}</Text>
            <Button onPress={()=>{logout()}} buttonStyle={{borderRadius:20, height: 40, backgroundColor:'red'}} title="Log out"/>
        </View>
    )
};

const styles2 = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: 16,
        width: '100%'
    },
    link:{
        color: 'blue'
    }
})

export  default  HomeScreen;