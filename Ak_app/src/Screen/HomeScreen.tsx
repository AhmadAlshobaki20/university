import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../utils/images";
import { useSelector } from "react-redux";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import PostInput from "../Component/post/postInput";
import Header from "../Component/Header";


const HomeScreen = ({ route }) => {
    const navigation = useNavigation();

    // console.log(route.params.userInfo.user, "route.params");

    const state = useSelector((state: { user: {} }) => {
        return state.user;
    })


    return (
        <ImageBackground style={Styles.HomeContainer} source={images?.appBackground}>
            <PostInput />
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
    }
})


export default HomeScreen;