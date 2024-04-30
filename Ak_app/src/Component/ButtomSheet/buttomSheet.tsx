import React from "react";
import { StyleSheet, View } from "react-native";
import RBSheet from 'react-native-raw-bottom-sheet';



interface ButtomSheetProps {
    refRBSheet: {
        open: () => {},
        close: () => {},
    }
}


const ButtomSheet = ({ refRBSheet }: ButtomSheetProps): React.ReactNode => {
    return (
        <RBSheet
            ref={refRBSheet}
            height={900}
        >
            
        </RBSheet>
    )
}

const styles = StyleSheet.create({
    post: {
        backgroundColor: "red",
        width: "100%",
        height: "100%"
    }
});
export default ButtomSheet;