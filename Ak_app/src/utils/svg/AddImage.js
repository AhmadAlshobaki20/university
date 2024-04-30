import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ImageLogoSvg(props) {
    return (
        <Svg
            width={13}
            height={13}
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10.667 3.667V5.66s-1.327.007-1.334 0V3.667h-2s.007-1.327 0-1.334h2v-2h1.334v2h2v1.334h-2zm-2 2.666v-2h-2v-2H1.333C.6 2.333 0 2.933 0 3.667v8C0 12.4.6 13 1.333 13h8c.734 0 1.334-.6 1.334-1.333V6.333h-2zm-7.334 5.334l2-2.667 1.334 2 2-2.667 2.666 3.334h-8z"
                fill="#0779B8"
            />
        </Svg>
    )
}

export default ImageLogoSvg
