import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSelector } from "react-redux";
const ProfileStatistic = () => {

    return (
        <View style={[styles.statistic, {
            borderColor: "#D1D1D1"
        }]}>
            <View style={styles.contantStaticstc}>
                <Text style={{
                    fontSize: hp("2.5%")
                }}>120</Text>
                <Text>posts</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    statisticsWrapper: {
        width: wp("85%"),
        paddingVertical: hp(0.6),
        alignSelf: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center"
    },
    statistic: {
        width: wp("40%"),
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    contantStaticstc: {
        flexDirection: "column",
        alignItems: "center",
    }
});

export default ProfileStatistic;