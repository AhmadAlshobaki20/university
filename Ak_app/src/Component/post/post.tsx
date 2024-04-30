import React from "react";
import { Image, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import images from "../../utils/images";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Like from "../../utils/svg/like";
import Comment from "../../utils/svg/comment";
import Share from "../../utils/svg/share";
import PostAction from "./postAction";
interface editButtonType {
    title: String,
    content: String
}

let date = new Date()

const Post = ({ title, content }: editButtonType): React.ReactNode => {
    return (
        <View style={styles.postWrap}>
            <View style={styles.header}>
                <View style={styles.imageWrap}>
                    <Image source={images.testuser} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.userText}>ahmad alshobaki</Text>
                    <Text>{date.getHours()}:{date.getMinutes()} am</Text>
                </View>
            </View>
            <View>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </Text>
            </View>
            <View>
                <Image style={styles.imagePost} source={images.testuser} />
            </View>
            <View style={styles.postFeatuers}>
                <View style={styles.firstPart}>
                    <PostAction title="Like" content="1,200" />
                    <PostAction title="Comment" content="1,200" />
                    <PostAction title="Share" content="" />
                </View>
                <View>
                    <PostAction title="Save" content="" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postWrap: {
        width: "90%",
        alignSelf: "center",
        borderRadius: 12,
        marginVertical: hp("1%"),
        backgroundColor: "white",
        paddingTop: hp("3.7%"),
        paddingBottom: hp("1.7%"),
        paddingHorizontal: hp("3.7%"),
        shadowColor: "#3A485B",
        shadowOpacity: 0.4,
        elevation: 10
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: hp("1%")
    },
    imageWrap: {
        width: wp("11%"),
        height: hp("5%"),
        marginEnd: hp("1.5%")
    },
    image: {
        borderRadius: 100,
        width: wp("11%"),
        height: hp("5%"),
    },
    userText: {
        fontWeight: "bold",
        fontSize: hp("1.8%")
    },
    imagePost: {
        alignSelf: "center",
        height: 177,
        width: 295,
        borderRadius: 10,
        marginVertical: 10,
    },
    postFeatuers: {
        width: "100%",
        height: hp("5%"),
        flexDirection: "row",
        justifyContent: "space-between",
    },
    firstPart: {
        height: "100%",
        flexDirection: "row"
    }
});
export default Post;