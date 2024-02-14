import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIconProps } from "../../utils/ITypes";

const Cross = ({
  width = 18,
  height = 18,
  color = ["white"],
}: SvgIconProps) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 18 18">
      <Path d="M1 17L17 1" stroke={color[0]} stroke-width="2" />
      <Path d="M1 1L17 17" stroke={color[0]} stroke-width="2" />
    </Svg>
  );
};

export default Cross;
