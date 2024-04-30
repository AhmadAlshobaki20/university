import React, { useEffect } from "react";
import { Text, View, ImageBackground, Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";
import images from "../utils/images";
import { useNavigation } from "@react-navigation/native";
import GoogleSvg from "../utils/svg/google";
const SplashScreen = () => {

    const navigation = useNavigation();


    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("RegisterScreen");
        }, 2000)
    }, [])

    return (
        <ImageBackground style={Styles.SplashContainer} source={images?.appBackground}>
            <View style={[Styles.imageBox]}>
                <Image source={images.SplashImg} />
            </View>
            <View style={[Styles.imageBox]}>
                <Image source={images.socialMediaImg} />
            </View>
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    SplashContainer: {
        height: Dimensions.get("window").height,
    },
    imageBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})



export default SplashScreen;