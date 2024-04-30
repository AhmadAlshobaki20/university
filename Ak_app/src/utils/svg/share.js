import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Share(props) {
    return (
        <Svg
            width={24}
            height={22}
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.167 5.762v.43l-.424.065C6.673 7.502 2.698 13.18 1.004 19.437c1.402-1.642 3.009-2.917 4.856-3.84 2.502-1.249 5.416-1.835 8.807-1.835h.5v5.13l8.152-8.808-8.152-8.808v4.486z"
                stroke="#000"
            />
        </Svg>
    )
}

export default Share
