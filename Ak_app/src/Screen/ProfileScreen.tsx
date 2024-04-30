import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import images from "../utils/images";
import ProfileStatistic from "../Component/profileStatistic";
import { useSelector } from "react-redux";
import Button from "../Component/button";
import ProfileChoice from "../Component/profileChoice";
import Info from "../Component/detailes/info";
import Post from "../Component/post/post";
const ProfileScreen = () => {

    const state = useSelector((state: { user: {} }) => {
        return state.user;
    })

    console.log(state, "state");


    const [toggle, setToggle] = useState<{
        detiles: Boolean,
        posts: Boolean
    }>({
        posts: true,
        detiles: false
    })


    const handelToggle = (value: {
        detiles: Boolean,
        posts: Boolean
    }) => {
        setToggle(value);
    }

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={images.appBackground}>

                <View style={styles.coverWrapper}>
                    <ImageBackground style={styles.coverImageProfile} source={images?.testuser}>
                        <View style={styles.imageWrapper}>
                            <Image source={images?.testuser} style={styles.userImg} />
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.usernameWrapper}>
                    <Text style={styles.username}>ahmad alshobaki</Text>
                    <Text>ahmad@gmail.com</Text>
                </View>
                <View style={styles.editWrapper}>
                    <Button title="Edit Profile" />
                    <Button title="Edit Profile" />
                </View>
                <View style={styles.statisticsWrapper}>
                    <ProfileStatistic />
                    <View style={{
                        borderColor: "#D1D1D1",
                        borderWidth: 0.5,
                    }}>
                    </View>
                    <ProfileStatistic />
                </View>
                <View style={styles.detiles}>
                    <ProfileChoice title="Posts" handelToggle={handelToggle} />
                    <ProfileChoice title="Ditales" handelToggle={handelToggle} />
                </View>
                {toggle?.detiles == true &&
                    <View>
                        <Info title="About me" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " />
                        <Info title="major" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " />
                        <Info title="work experince" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " />
                    </View>
                }
                {
                    toggle.posts == true &&
                    <View>
                        <Post title="Post1" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " />
                        <Post title="Post2" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " />
                        <Post title="Post3" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " />
                    </View>
                }
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    coverImageProfile: {
        width: wp("100%"),
        height: hp("30%"),
        flexDirection: "row",
        justifyContent: "center",
        position: "relative"
    },
    coverWrapper: {
        width: wp("100%"),
        height: hp("38%"),
    },
    imageWrapper: {
        width: wp(30),
        height: hp(15),
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: hp(-7),
        borderColor: "#5096F1",
        borderWidth: 3
    },
    userImg: {
        width: wp(29),
        height: hp(14),
        borderRadius: 100,
    },
    usernameWrapper: {
        alignItems: "center"
    },
    username: {
        fontSize: hp('2.5%') // End result looks like the provided UI mockup
    },
    editWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: hp(2)
    },
    statisticsWrapper: {
        width: wp("85%"),
        paddingVertical: hp(0.6),
        alignSelf: "center",
        borderColor: "#D1D1D1",
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center"
    },
    detiles: {
        width: wp("70%"),
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-around",
        alignItems: "center"
    }
});

export default ProfileScreen;