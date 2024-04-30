import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";


interface propsType {
    Lable: String,
    PlaceHolder: String,
    SetData: (val: String) => {}
}


const Input = ({ Lable, PlaceHolder, SetData }: propsType): React.ReactNode => {
    return (
        <View style={styles.textInputBox}>
            <Text style={styles.text}>{Lable}</Text>
            <TextInput style={styles.textInput} placeholder={`${PlaceHolder}`} onChangeText={(data: String) => {
                SetData(data);
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputBox: {
        alignSelf: "center",
        width: "80%",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative",
        marginBottom: 30
    }, textInput: {
        width: "99%",
        borderColor: "#263238",
        borderWidth: 0.5,
        zIndex: -1,
        borderRadius: 7,
        paddingHorizontal: 10,
        // backgroundColor: "green"
    },
    text: {
        position: "absolute",
        backgroundColor: "white",
        top: -10,
        zIndex: 1,
        left: 10,
        fontWeight: "bold"
    }
})

export default Input;