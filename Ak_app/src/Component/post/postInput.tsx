import React, { useRef, useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import images from "../../utils/images";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PostType from "./postType";
import RBSheet from 'react-native-raw-bottom-sheet';
import { createPost } from "../../api/post";
import { useSelector } from "react-redux";
const PostInput = () => {

    const [post, setPost] = useState<{
        title: string
    }>({
        title: ""
    })

    const userState: { email: String, first_name: String, last_name: String, token: String, username: String, userId: number } = useSelector((state: { user: { email: String, first_name: String, last_name: String, token: String, username: String, userId: number } }) => {
        return state.user;
    })

    console.log(post.title);

    const refRBSheet = useRef();
    return (
        <>
            <RBSheet
                ref={refRBSheet}
                height={1000}
            >
                <ScrollView>
                    <View style={Styles.postbtn}>
                        <TouchableOpacity onPress={() => refRBSheet?.current?.close()}>
                            <Text style={Styles.close}>x</Text>
                        </TouchableOpacity>
                        <Text style={Styles.postbtntxt}>Create Post</Text>
                        <TouchableOpacity onPress={() => {
                            createPost(post, userState?.token.toString());
                            setPost({ ...post, title: '' })
                        }}>
                            <Text style={Styles.postbtntxt}>Post</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.textInputWrap}>
                        <Image source={images.testuser} style={Styles.userImg} />
                        <TextInput multiline={true} style={Styles.textInput} value={post?.title} placeholder="what's on your hrad" onChangeText={(val: string) => {
                            setPost({ ...post, title: val });
                        }} />
                    </View>
                </ScrollView>
            </RBSheet>
            <TouchableOpacity onPress={() => refRBSheet?.current?.open()} style={Styles.textPostBox}>
                <View style={Styles.textInputWrap}>
                    <Image source={images.testuser} style={Styles.userImg} />
                    {/* <TextInput multiline={true} style={Styles.textInput} placeholder="what's on your hrad" /> */}
                    <Text style={Styles.textInput}>what's on your hrad</Text>
                </View>
                <View style={Styles.postTypeWrap}>
                    <PostType type="Image" />
                    <PostType type="Vedio" />
                    <PostType type="Attach" />
                </View>
            </TouchableOpacity>
        </>
    )
}

const Styles = StyleSheet.create({
    textPostBox: {
        width: "85%",
        height: hp("20%"),
        alignSelf: "center",
        borderRadius: 8,
        backgroundColor: "#F0F7FB",
        shadowColor: "black",
        shadowOpacity: 1.5,
        elevation: 10,
        paddingVertical: hp(2)
    },
    textInputWrap: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: wp(4.5),
        marginVertical: hp(2.5)
    },
    userImg: {
        width: wp(10),
        height: hp(5),
        borderRadius: 50,
        marginEnd: wp(1.5)
    },
    textInput: {
        fontSize: hp("2%"),
        color: "#72797D",
        width: "90%",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    postTypeWrap: {
        width: "60%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    postbtn: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: wp(5),
        paddingTop: hp(2),
        fontWeight: "700"
    },
    postbtntxt: {
        fontSize: hp("2%"),
        color: "#7F7F80",
        fontWeight: "700"
    },
    close: {
        fontSize: hp("3%"),
        color: "#7F7F80",
        fontWeight: "700"
    }
})


export default PostInput;