import React from "react";
import { Image } from "react-native";
import images from "../utils/images";


const Logo = (): React.ReactNode => {
    return (
        <Image source={images.socialMediaImg} />
    )
}

export default Logo