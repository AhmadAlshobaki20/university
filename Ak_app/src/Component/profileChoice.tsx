import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ProfileChoicePropType {
    title: String,
    handelToggle: (value: {
        detiles: Boolean,
        posts: Boolean
    }) => {}
}

const ProfileChoice = ({ title, handelToggle }: ProfileChoicePropType): React.ReactNode => {

    const [choice, setChoice] = useState<string>();

    return (
        <TouchableOpacity style={[styles.btnProfileChoice, {
            borderBottomColor: choice == title ? "#222628" : "white",
            borderBottomWidth: 1.5,
        }]} onPress={() => {
            if (title == "Ditales") {
                // setChoice("Ditales")
                handelToggle({
                    detiles: true,
                    posts: false
                })
            } else {
                // setChoice("Posts")
                handelToggle({
                    detiles: false,
                    posts: true
                })
            }
        }}>
            <Text style={styles.textProfileChoice}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnProfileChoice: {
        width: "40%",
        alignItems: "center",
        paddingVertical: 10
    },
    textProfileChoice: {
        fontSize: hp("1.5%"),
    }
})

export default ProfileChoice