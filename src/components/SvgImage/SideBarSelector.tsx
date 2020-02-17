import React from "react"
import Svg, { Path } from "react-native-svg"

type Props = {
  color?: string;
};

export const SideBarSelector: React.FC<Props> = ({ color = '#000000' }) => {
  return (
    <Svg
      width={27}
      height={141}
      viewBox="0 0 27 141"
    >
      <Path
        d="M.002 0c0 26.056 27 48.028 27 71.5 0 21.598-23.284 46.397-27.002 69.33z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
};
