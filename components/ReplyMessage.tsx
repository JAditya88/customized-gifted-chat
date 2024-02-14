import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import React, { ReactElement } from "react";
import { IMessage } from "react-native-gifted-chat";
import Cross from "../assets/icons/Cross";

interface EditReplyMessageProps {
  title: string;
  chat: IMessage;
  icon: ReactElement;
  setFunc: (value: string) => void;
}

export default function EditReplyMessage({
  title,
  chat,
  icon,
  setFunc,
}: EditReplyMessageProps) {
  return (
    <View style={styles.box}>
      <View style={styles.edit}>{icon}</View>
      <View style={styles.message}>
        <Text style={styles.title}>{title}</Text>
        <Text>{chat?.text}</Text>
      </View>
      <View style={styles.cross}>
        <TouchableHighlight
          onPress={() => setFunc("")}
          underlayColor={"rgba(0,0,0,0.32)"}
        >
          <Cross color={["#2E88FC"]} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: Dimensions.get("window").width,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "gainsboro",
    backgroundColor: "white",
  },
  edit: {
    width: "13%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 2,
    borderRightColor: "#2E88FC",
  },
  message: {
    paddingHorizontal: 10,
    width: "70%",
    gap: 5,
  },
  cross: {
    width: "13%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#2E88FC",
  },
});
