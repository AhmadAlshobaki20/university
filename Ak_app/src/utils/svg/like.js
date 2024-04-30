import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Like(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_4_2384)" fill="#000">
                <Path d="M24 14.25c0-.601-.239-1.161-.651-1.574a2.483 2.483 0 00.64-1.909C23.872 9.496 22.727 8.5 21.381 8.5h-6.177c.306-.93.796-2.632.796-4 0-2.169-1.843-4-3-4-1.038 0-1.781.585-1.812.609A.5.5 0 0011 1.5v3.391L8.119 11.13 8 11.191V11a.5.5 0 00-.5-.5h-5A2.502 2.502 0 000 13v8c0 1.379 1.121 2.5 2.5 2.5h3c1.081 0 2.005-.69 2.353-1.653.832.428 1.952.653 2.647.653h9.179c1.089 0 2.042-.734 2.266-1.746a2.257 2.257 0 00-.18-1.503 2.24 2.24 0 001.001-3A2.24 2.24 0 0024 14.25zm-2.109 1.234a.5.5 0 00-.286.861c.254.239.395.561.395.905 0 .631-.477 1.161-1.108 1.234a.5.5 0 00-.286.861c.33.31.461.745.362 1.193-.123.558-.665.962-1.289.962H10.5c-.812 0-2.174-.381-2.646-.854A.5.5 0 007 21c0 .827-.673 1.5-1.5 1.5h-3c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5H7v.5c0 .173.09.334.238.426a.51.51 0 00.486.021l1-.5a.5.5 0 00.23-.237l3-6.5A.51.51 0 0012 5V1.771a2.108 2.108 0 011-.271c.548 0 2 1.362 2 3 0 1.76-.958 4.297-.967 4.322a.503.503 0 00.055.462.503.503 0 00.412.216h6.881c.834 0 1.542.597 1.612 1.359a1.494 1.494 0 01-.712 1.415.5.5 0 00.034.871c.423.215.685.639.685 1.105 0 .631-.477 1.161-1.109 1.234z" />
                <Path d="M7.5 11.5a.5.5 0 00-.5.5v9a.5.5 0 001 0v-9a.5.5 0 00-.5-.5z" />
            </G>
            <Defs>
                <ClipPath id="clip0_4_2384">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Like
