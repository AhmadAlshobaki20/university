import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AttachSvg(props) {
    return (
        <Svg
            width={14}
            height={12}
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10.897.667l1.334 2.666h-2L8.897.667H7.564l1.333 2.666h-2L5.564.667H4.231l1.333 2.666h-2L2.231.667h-.667C.831.667.237 1.267.237 2l-.006 8c0 .733.6 1.333 1.333 1.333h10.667c.733 0 1.333-.6 1.333-1.333V.667h-2.667z"
                fill="#0779B8"
            />
        </Svg>
    )
}

export default AttachSvg
