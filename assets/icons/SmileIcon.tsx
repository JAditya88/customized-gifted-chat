import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIconProps } from "../../utils/ITypes";;

const SmileIcon = ({
  width = 20,
  height = 20,
  color = ["#BBB"],
}: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color[0]}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17A8 8 0 1 1 9 1a8 8 0 0 1 0 16Z"
    />
    <Path
      stroke={color[0]}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.6 11s-1.2 1.6-3.6 1.6c-2.4 0-3.6-1.6-3.6-1.6"
    />
    <Path
      fill={color[0]}
      stroke={color[0]}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.8 6.6a.4.4 0 1 1 0-.8.4.4 0 0 1 0 .8Zm-5.6 0a.4.4 0 1 1 0-.8.4.4 0 0 1 0 .8Z"
    />
  </Svg>
);

export default SmileIcon;
