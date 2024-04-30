import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GoogleSvg from "../utils/svg/google";
import MicroSoftSvg from "../utils/svg/microsoft";

interface propsType {
    text: String,
    image: String
}

import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { setuserInfo } from "../redux/redusers/userReducer";
import { useDispatch, useSelector } from "react-redux";

const RegisterBy = ({ text, image }: propsType) => {

    const navigation = useNavigation();
    const dispatch = useDispatch()


    const userState: { email: String, first_name: String, last_name: String, token: String, username: String, userId: number } = useSelector((state: { user: { email: String, first_name: String, last_name: String, token: String, username: String, userId: number } }) => {
        return state.user;
    })

    useLayoutEffect(() => {
        if (userState?.email && userState.first_name && userState.last_name && userState?.userId) {
            navigation.navigate("HomeScreen");
        }
    }, [userState?.email, userState.first_name, userState.last_name, userState?.userId]);


    return (
        <View>
            <TouchableOpacity style={styles.registerBtContainer} onPress={() => {
                if (image == "google") {
                    GoogleSignin.configure({
                        androidClientId: '481911275831-8s8qosutt454i38jrp4kfr4m2nmc1nht.apps.googleusercontent.com',
                    });
                    GoogleSignin.hasPlayServices().then((hasPlayService) => {
                        if (hasPlayService) {
                            GoogleSignin.signIn().then((userInfo) => {
                                Toast.show({
                                    type: "success",
                                    text1: "success",
                                    text2: "Login by google",
                                })
                                const { givenName, familyName, email, name, id } = userInfo.user;
                                dispatch(setuserInfo({
                                    first_name: givenName,
                                    last_name: familyName,
                                    email: email,
                                    username: name,
                                    userId: id
                                }))
                                navigation.navigate("HomeScreen");
                            }).catch((e) => {
                                console.log("ERROR IS: " + JSON.stringify(e));
                                Toast.show({
                                    type: "success",
                                    text1: "success",
                                    text2: e.message,
                                })
                            })
                        }
                    }).catch((e) => {
                        console.log("ERROR IS: " + JSON.stringify(e));
                    })
                } else {
                    console.log("by Apple");
                }
            }}
            >
                {image == "google" ? <GoogleSvg /> : <MicroSoftSvg />}
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    registerBtContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#656F78",
        borderRadius: 6,
        padding: 5,
        marginHorizontal: 10
    },
    text: {
        marginHorizontal: 5,
        fontWeight: "700"
    }, line: {
        borderWidth: 1,
        borderColor: "black"
    }
})

export default RegisterBy;