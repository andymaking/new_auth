import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../config";
import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";
// import {AsyncStorage} from "react-native";


export const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{

    const [userInfo, setUserInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [splashLoading, setSplashLoading] = useState(false)

    const register = (firstname, lastname, email, phone, password, confirmPassword) =>{
        setIsLoading(true)
        const data = {
            'first_name': firstname, 'last_name': lastname, 'email': email, 'phone_number': phone, 'amount': '1000', 'reference':'109874654', 'password': password, 'password_confirmation' : confirmPassword
        }
        axios.post(BASE_URL+'api/card', data).then(res =>{
            let userInfo = res.data;
            console.log(userInfo)
            setIsLoading(false)
        }).catch(e=>{
            console.log(`registration error `+e)
            setIsLoading(false)
        })
    }

    const login = (email, password) =>{
        setIsLoading(true)
        const data = {
            'email': email, 'password': password,
        }
        axios.post(BASE_URL+'api/login', data).then(res =>{
            let userInfo = res.data;
            setUserInfo(userInfo)
            AsyncStorageNative.setItem('userInfo', JSON.stringify(userInfo))
            console.log(userInfo)
            setIsLoading(false)
        }).catch(e=>{
            console.log(`registration error `+e)
            setIsLoading(false)
        })
    }

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true)
            let userInfo = await AsyncStorageNative.getItem('userInfo')
            userInfo=JSON.parse(userInfo);
            if(userInfo){
                setUserInfo(userInfo)
            }
            setSplashLoading(false)
        } catch (e) {
            setSplashLoading(false)
            console.log(`is logged in error ${e}`)
        }
    }

    const logout = () =>{
        setIsLoading(true)
        const data = {}
        axios.post(BASE_URL+'api/logout', data, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
                }
            }
            ).then(res =>{
            AsyncStorageNative.removeItem('userInfo')
            setUserInfo({})
            setIsLoading(false)
        }).catch(e=>{
            console.log(`registration error `+e)
            AsyncStorageNative.removeItem('userInfo')
            setUserInfo({})
            setIsLoading(false)
        })
    }

    useEffect(()=> {
        isLoggedIn();
    }, [])

    return(
        <AuthContext.Provider value={{register, login, isLoading, userInfo, logout, isLoggedIn, splashLoading }}>
            {children}
        </AuthContext.Provider>
    )
}