import React from "react";
import { Image, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import images from "../../utils/images";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface editButtonType {
    title: String,
    content: String
}

const Info = ({ title, content }: editButtonType): React.ReactNode => {
    return (
        <View style={styles.infoWrap}>
            <View style={styles.header}>
                <Text style={styles.logo}>logo</Text>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View>
                <Text style={styles.contentText}>{content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoWrap: {
        width: "92%",
        alignSelf: "center",
        borderRadius: 12,
        marginVertical: hp("1%"),
        backgroundColor: "white",
        padding: hp("2%"),
        shadowColor: "#3A485B",
        shadowOpacity: 0.4,
        elevation: 10
    },
    header: {
        flexDirection: "row",
    },
    logo: {
        marginEnd: hp("0.5%")
    },
    headerText: {
        fontSize: hp("1.9%"),
        paddingBottom: hp("1%"),
        fontWeight: "bold",
    },
    contentText: {
        fontSize: hp("1.5%"),
        paddingHorizontal: wp("8%")
    }
});
export default Info;