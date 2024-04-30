import React from "react";
import AttachSvg from "../../utils/svg/Attach";
import ImageLogoSvg from "../../utils/svg/AddImage";
import { StyleSheet, View, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface PostTypeProps {
    type: String
}


const PostType = ({ type }: PostTypeProps) => {

    const handlePostType = () => {
        switch (type) {
            case "Image":
                return <ImageLogoSvg />
            case "Vedio":
                return <AttachSvg />
            case "Attach":
                return <AttachSvg />
            default:
                return
        }
    }

    return (
        <View style={[styles.postType, {
            borderLeftWidth: type == "Vedio" ? 2 : 0,
            borderRightWidth: type == "Vedio" ? 2 : 0,
            paddingHorizontal: wp("2%")
        }]}>
            {handlePostType()}
            <Text style={styles.textPostType}>{type}</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    postType: {
        flexDirection: "row",
        alignItems: "center",
    },
    textPostType: {
        marginHorizontal: wp(1),
        fontSize: hp("1.5%"),
        fontWeight: "bold"
    }
})

export default PostType;