import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIconProps } from "../../utils/ITypes";

const DownArrow = ({ width = 12, height = 7, color }: SvgIconProps) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M11.3125 0.875L6.06251 6.125L0.812505 0.875"
        stroke={color != null ? color[0] : "white"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default DownArrow;
