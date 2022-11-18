import React, {useContext} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import {AuthContext} from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

const  Navigation = ()=>{
    const  dataContext = useContext(AuthContext)
    const splashLoading = dataContext.splashLoading
    const userInfo = dataContext.userInfo;

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {splashLoading? (
                    <Stack.Screen name='Splash' component={SplashScreen}/>
                ): userInfo.token ? (
                    <Stack.Screen name='Home' component={HomeScreen}/>
                ) : (
                    <>
                        <Stack.Screen name='Login' component={LoginScreen}/>
                        <Stack.Screen name='Register' component={RegisterScreen}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export  default  Navigation;