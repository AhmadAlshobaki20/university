import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MicroSoftSvg() {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path d="M7.604 7.983H0V.17h7.604v7.814z" fill="#F1511B" />
            <Path d="M16 7.983H8.396V.17H16v7.814z" fill="#80CC28" />
            <Path d="M7.604 16.614H0V8.8h7.604v7.814z" fill="#00ADEF" />
            <Path d="M16 16.614H8.396V8.8H16v7.814z" fill="#FBBC09" />
        </Svg>
    )
}

export default MicroSoftSvg;
