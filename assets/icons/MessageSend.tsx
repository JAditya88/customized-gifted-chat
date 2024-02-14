import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { SvgIconProps } from "../../contracts/elements";

const MessageSend = ({
  width = 24,
  height = 25,
  color = ["#2F88FF", "#fff"],
}: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Circle cx={12} cy={12} r={11.5} fill={color[0]} stroke={color[0]} />
    <Path
      fill={color[1]}
      d="M5.128 10.673c-.622.243-.74 1.085-.187 1.337l3.583 1.638a.6.6 0 0 0 .335.045.733.733 0 0 0 .333-.14l4.406-3.284c.232-.173.487.082.314.314l-3.284 4.405a.732.732 0 0 0-.14.334.6.6 0 0 0 .046.334l1.638 3.586c.253.553 1.094.435 1.338-.188l2.42-6.184 2.421-6.185c.226-.578-.276-1.08-.854-.854L5.128 10.673Z"
    />
  </Svg>
);

export default MessageSend;
