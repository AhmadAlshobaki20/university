import React from "react";
import { Text, View } from "react-native";

interface propsType {
    text: String
}

const RegisterChoice = ({ text }: propsType): React.ReactNode => {
    return (
        <View style={{
            width: "80%",
            height: 20,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 20
        }}>
            <View style={{
                borderTopWidth: 1,
                borderTopColor: "black",
                width: "29%",
                marginHorizontal: 12
            }}></View>
            <Text style={{
                fontSize: 16,
                fontWeight: "700"
            }}>{text}</Text>
            <View style={{
                borderTopWidth: 1,
                borderTopColor: "black",
                width: "29%",
                marginHorizontal: 12
            }}></View>
        </View>
    )
}

export default RegisterChoice;