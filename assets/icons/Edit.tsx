import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIconProps } from "../../utils/ITypes";

const Edit = ({ width = 24, height = 24, color = ["#000"] }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color[0]}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15 6 3 3m-5 11h8M5 16l-1 4 4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0L5 16Z"
    />
  </Svg>
);
export default Edit;
