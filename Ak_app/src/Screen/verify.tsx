import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const VerifyScreen = () => {

    const [onFocus, setOnFocus] = useState<Boolean>(false);

    const handleFoucs = () => {
        setOnFocus(true)
    }
    const handleBlur = () => {
        setOnFocus(false)
    }

    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={styles.headerTxt}>Enter Your Security Code</Text>
            <Text numberOfLines={1} style={styles.digitTxt}>Enter the 6-digit we sent to the email</Text>
            <Text numberOfLines={1} style={[styles.digitTxt, { marginBottom: 40 }]}>a****@g****.com</Text>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput style={onFocus == true ? styles.input2 : styles.input} maxLength={1} onFocus={handleFoucs} onBlur={handleBlur} />
                    <TextInput style={onFocus == true ? styles.input2 : styles.input} maxLength={1} onFocus={handleFoucs} onBlur={handleBlur} />
                    <TextInput style={onFocus == true ? styles.input2 : styles.input} maxLength={1} onFocus={handleFoucs} onBlur={handleBlur} />
                    <TextInput style={onFocus == true ? styles.input2 : styles.input} maxLength={1} onFocus={handleFoucs} onBlur={handleBlur} />
                    <TextInput style={onFocus == true ? styles.input2 : styles.input} maxLength={1} onFocus={handleFoucs} onBlur={handleBlur} />
                    <TextInput style={onFocus == true ? styles.input2 : styles.input} maxLength={1} onFocus={handleFoucs} onBlur={handleBlur} />
                </View>
                <Text style={styles.wornTxt}>incorrect security code. Check your code and try again</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Submit</Text>
                </TouchableOpacity>
                <View style={styles.getNewCodeContainer}>
                    <Text>Didn't receive your code?</Text>
                    <TouchableOpacity>
                        <Text style={styles.getNewCodeTxt}> Get a new one.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    },
    headerTxt: {
        fontSize: 24,
        fontWeight: "400",
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 10
    },
    digitTxt: {
        fontWeight: "500",
        alignSelf: "center",
        fontSize: 15
    },
    wornTxt: {
        color: "red",
        width: "80%",
        alignSelf: "center",
        marginVertical: 15,
        fontSize: 15,
        fontWeight: "500"
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "80%",
        alignSelf: "center"
    },
    input: {
        backgroundColor: "#E2E2E2",
        alignSelf: "center",
        fontSize: 24,
        marginEnd: 20,
        width: 40,
        borderRadius: 8,
        textAlign: "center"
    },
    input2: {
        backgroundColor: "#F6F6F6",
        alignSelf: "center",
        fontSize: 24,
        marginEnd: 20,
        width: 40,
        borderRadius: 8,
        textAlign: "center"
    },
    btn: {
        backgroundColor: "#0CAFFF",
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        borderRadius: 6,
        marginTop: 40,
        marginBottom: 20
    },
    btnTxt: {
        color: "white",
        fontSize: 15,
        fontWeight: "600"
    },
    getNewCodeContainer: {
        flexDirection: "row",
        alignSelf: "center"
    },
    getNewCodeTxt: {
        fontWeight: "800"
    }
})


export default VerifyScreen;