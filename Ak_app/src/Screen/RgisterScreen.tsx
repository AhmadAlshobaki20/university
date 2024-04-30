import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Text, View, ImageBackground, Dimensions, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import images from "../utils/images.tsx";
import Logo from "../Component/Logo.tsx";
import Input from "../Component/TextInput.tsx";
import RegisterBy from "../Component/registerBy.tsx";
import RegisterChoice from "../Component/registerChoice.tsx";
import { sginup, sginin } from "../api/auth.tsx";
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from "react-redux";
import { setuserInfo } from "../redux/redusers/userReducer.tsx";
import { useNavigation } from "@react-navigation/native";



const RegisterScreen = () => {
    const dispatch = useDispatch();
    const [screen, setScreen] = useState<String>("sginUp");
    const [first_name, setFirstName] = useState<String>();
    const [last_name, setLastName] = useState<String>();
    const [email, setEmail] = useState<String>();
    const [password, setPassword] = useState<String>();
    const [confirmPassword, setConfirmPassword] = useState<String>();

    const navigation = useNavigation();

    const userState: { email: String, first_name: String, last_name: String, token: String, username: String } = useSelector((state: { user: { email: String, first_name: String, last_name: String, token: String, username: String } }) => {
        return state.user;
    })

    useLayoutEffect(() => {
        if (userState?.email && userState.first_name && userState.last_name && userState.token) {
            navigation.navigate("HomeScreen");
        }
    }, [userState?.email, userState.first_name, userState.last_name, userState.token]);


    const handleSginUp = () => {
        sginup({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }).then((res) => {
            const {
                email,
                first_name,
                last_name,
            } = res?.data?.data?.newuser
            const { token } = res?.data;
            dispatch(setuserInfo({
                email: email,
                first_name: first_name,
                last_name: last_name,
                token: token
            }))
            if (token) {
                Toast.show({
                    type: "success",
                    text1: "success sgin up",
                    text2: "Congrdulations"
                })
                navigation.navigate("HomeScreen");
            }
        }).catch((err) => {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: err.message
            })
        })
    }

    const handleSginIn = () => {
        sginin({
            email: email,
            password: password
        }).then((res) => {
            const { token } = res?.data?.data;
            console.log(token);
            dispatch(setuserInfo({
                email: email,
                token: token
            }))
            if (token) {
                Toast.show({
                    type: "success",
                    text1: "success sgin up",
                    text2: "Congrdulations"
                })
                navigation.setOptions({
                    tabBarStyle: { display: 'none' }
                });
                navigation.navigate("HomeScreen");
            }
        }).catch((err) => {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: err.message
            })
        })
    }


    return (
        <ImageBackground style={Styles.RegisterContainer} source={images?.appBackground}>
            <View style={Styles.logoBox}>
                <Logo />
            </View>
            {
                screen == "sginUp" ? <View style={Styles.textInputBox}>
                    <View style={Styles.SginLine}>
                        <TouchableOpacity>
                            <Text style={[Styles.SginTextLine, { marginEnd: 20 }]}>Sgin up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setScreen("sginIn")
                        }}>
                            <Text style={Styles.SginTextLine}>Sgin in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        backgroundColor: "white"
                    }}>
                        <Input Lable="Your First Name" PlaceHolder="Type Your First Name" SetData={(val: String): void => {
                            setFirstName(val)
                        }} />
                        <Input Lable="Your Last Name" PlaceHolder="Type Your Last Name" SetData={(val: String): void => {
                            setLastName(val)
                        }} />
                        <Input Lable="Your Email" PlaceHolder="Type your email" SetData={(val): void => {
                            setEmail(val)
                        }} />
                        <Input Lable="Password" PlaceHolder="Type Your Password" SetData={(val): void => {
                            setPassword(val)
                        }} />
                        <Input Lable="ConfirrmPassword" PlaceHolder="Confirrm password" SetData={(val): void => {
                            setConfirmPassword(val)
                        }} />
                    </View>
                    <TouchableOpacity style={Styles.joinBtn} onPress={() => {
                        handleSginUp();
                    }}>
                        <Text style={Styles.textJoinBtn}>Join Now</Text>
                    </TouchableOpacity>
                    <View>
                        <RegisterChoice text="Or SignUp With" />
                        <View style={Styles.registerBy}>
                            <RegisterBy text="SignUp By" image="google" />
                            <RegisterBy text="SignUp By" image="microsoft" />
                        </View>
                    </View>
                </View> :
                    <View style={Styles.textInputBox}>
                        <View style={Styles.SginLine}>
                            <TouchableOpacity onPress={() => {
                                setScreen("sginUp")
                            }}>
                                <Text style={[Styles.SginTextLine, { marginEnd: 20 }]}>Sgin up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={Styles.SginTextLine}>Sgin in</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor: "white"
                        }}>
                            <Input Lable="Email" PlaceHolder="Type your email" SetData={(val): void => {
                                setEmail(val);
                            }} />
                            <Input Lable="Password" PlaceHolder="Type your password" SetData={(val): void => {
                                setPassword(val);
                            }} />
                        </View>
                        <TouchableOpacity style={Styles.joinBtn} onPress={handleSginIn}>
                            <Text style={Styles.textJoinBtn}>Login</Text>
                        </TouchableOpacity>
                        <View>
                            <RegisterChoice text="Or SignIn With" />
                            <View style={Styles.registerBy}>
                                <RegisterBy text="SginIn By" image="google" />
                                <RegisterBy text="SginIn By" image="microsoft" />
                            </View>
                        </View>
                    </View>
            }
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    RegisterContainer: {
        height: Dimensions.get("window").height,
    },
    logoBox: {
        flexDirection: "row",
        justifyContent: "center",
        // backgroundColor: "red",
        marginVertical: 30
    },
    SginLine: {
        flexDirection: "row",
        width: "80%",
        alignSelf: "center",
        marginVertical: 40,
    },
    SginTextLine: {
        fontSize: 18,
        fontWeight: "600"
    },
    textInputBox: {
        flex: 1,
    },
    bottomBorderLine: {
        borderBottomColor: "blue",
    },
    registerBy: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    joinBtn: {
        backgroundColor: "#007AFF",
        width: "80%",
        height: 42,
        alignSelf: "center",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 24
    },
    textJoinBtn: {
        color: "white",
        fontSize: 17
    }
})



export default RegisterScreen;