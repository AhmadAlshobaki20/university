import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Comment(props) {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M4.8 18.948h-.209l-.147.149-3.943 3.994.011-20.66v0C.512 1.361 1.365.5 2.4.5h19.2c1.038 0 1.9.864 1.9 1.931v14.586c0 1.067-.862 1.931-1.9 1.931H4.8z"
                stroke="#000"
            />
        </Svg>
    )
}

export default Comment
