import React from "react";
import { Image, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import images from "../utils/images";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface HeaderProps {
    title: String
}




const Header = ({ title }: HeaderProps): React.ReactNode => {


    function hederButtons() {
        switch (title) {
            case "Home":
                return <>
                    <TouchableOpacity><Text>{title}</Text></TouchableOpacity>
                    <TouchableOpacity><Text>{title}</Text></TouchableOpacity>
                    <TouchableOpacity><Text>{title}</Text></TouchableOpacity>
                </>
        }
    }

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.headerIconsWrap}>
                {hederButtons()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        marginBottom: hp(3),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: wp(2.5)
    },
    headerText: {
        fontSize: hp("2%"),
        fontWeight: "bold"
    },
    headerIconsWrap: {
        flexDirection: "row"
    }
});
export default Header;