import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIconProps } from "../../utils/ITypes";

const Reply = ({ width = 24, height = 24, color = ["#000"] }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color[0]}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12 5-5m-5 5 5 5m-5-5h10c1.667 0 5 1 5 5"
    />
  </Svg>
);

export default Reply;
