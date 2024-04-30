import React from "react";
import { Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import images from "../utils/images";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface editButtonType {
    title: String
}

const Button = ({ title }: editButtonType): React.ReactNode => {
    return (
        <TouchableOpacity style={[styles.editButton, {
            width: wp("35%"),
            height: hp("3.4%"),
            alignItems: "center",
            justifyContent: "center",
            marginEnd: wp(4)
        }]}>
            <Text style={{
                fontSize: hp("2%")
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    editWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: hp(2)
    },
    editButton: {
        borderColor: "#D1D1D1",
        borderWidth: 1,
        borderRadius: 5
    }
});
export default Button;