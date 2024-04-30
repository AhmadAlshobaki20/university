import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Save(props) {
    return (
        <Svg
            width={17}
            height={24}
            viewBox="0 0 17 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M2.808 0h11.231c1.548 0 2.808 1.121 2.808 2.5v21a.501.501 0 01-.347.461.61.61 0 01-.612-.108l-7.464-6.646-7.465 6.647a.614.614 0 01-.612.108A.503.503 0 010 23.5v-21C0 1.122 1.26 0 2.808 0zM1.123 22.292l6.903-6.146A.602.602 0 018.424 16c.143 0 .287.049.397.147l6.903 6.146V2.5c0-.827-.756-1.5-1.685-1.5H2.808c-.929 0-1.685.673-1.685 1.5v19.792z"
                fill="#000"
            />
        </Svg>
    )
}

export default Save
