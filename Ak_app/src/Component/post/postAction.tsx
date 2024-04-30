import React from "react";
import { Image, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import images from "../../utils/images";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Like from "../../utils/svg/like";
import Comment from "../../utils/svg/comment";
import Share from "../../utils/svg/share";
import Save from "../../utils/svg/save";
interface editButtonType {
    title: String,
    content: String
}

const PostAction = ({ title, content }: editButtonType): React.ReactNode => {
    return (
        <View style={styles.actionPart}>
            {title == "Like" && <TouchableOpacity style={styles.likePart}>
                <Like />
                <Text style={styles.textContent}>{content}</Text>
            </TouchableOpacity>}
            {title == "Comment" && <TouchableOpacity style={styles.likePart}>
                <Comment />
                <Text style={styles.textContent}>{content}</Text>
            </TouchableOpacity>}
            {title == "Share" &&
                <TouchableOpacity>
                    <Share />
                </TouchableOpacity>}
            {title == "Save" &&
                <TouchableOpacity>
                    <Save />
                </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    actionPart: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    likePart: {
        flexDirection: "row",
        marginHorizontal: 5,
        alignItems: "center"
    },
    textContent: {
        marginHorizontal: 5
    }
});
export default PostAction;