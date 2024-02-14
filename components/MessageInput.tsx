import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
} from "react-native";
import { IMessage } from "react-native-gifted-chat";
import SmileIcon from "../assets/icons/SmileIcon";
import MessageSend from "../assets/icons/MessageSend";
import Reply from "../assets/icons/Reply";
import Edit from "../assets/icons/Edit";
import EditReplyMessage from "./ReplyMessage";
// import { makeStyles } from "@rneui/base";
// import { SIZES } from "../../../constants";
// import MessageSend from "../../../assets/icons/MessageSend";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { IChat, IMessageRequest } from "../../api-client/messaging/modals";
// import { generateUniqueId } from "../../utils/generateUniqueId";
// import { addChat } from "../../store/slices/chatSlice";
// import { dummyMessage } from "../../../constants/dummyMessage";
// import ReplyMessage from "../../../src/views/message/ReplyMessage";
// import VeelText from "../../components/text/VeelText";

const MessageInput = ({
  messages,
  chatMessage,
  setChatMessage,
  selectedMessage,
  func,
  setFunc,
  inputStyles,
}: {
  messages: IMessage[];
  chatMessage: string;
  setChatMessage: React.Dispatch<React.SetStateAction<string>>;
  selectedMessage: IMessage;
  func: "Reply" | "Edit" | "Send";
  setFunc: (func: "Reply" | "Edit" | "Send") => void;
  inputStyles: StyleProp<TextStyle>;
}) => {
  const InputIcons = [
    <SmileIcon color={["#BBB"]} />,
    <MessageSend
      color={
        messages.length <= 0
          ? ["rgba(0,0,0,0.52)", "rgba(0,0,0,0.52)"]
          : ["#2F88FF", "#fff"]
      }
    />,
  ];

  return (
    <>
      {(func === "Reply" || func === "Edit") && (
        <EditReplyMessage
          title={func === "Reply" ? "Reply Message" : "Edit Message"}
          chat={selectedMessage}
          icon={
            func === "Reply" ? (
              <Reply color={["#2E88FC"]} />
            ) : (
              <Edit color={["#2E88FC"]} />
            )
          }
          setFunc={setFunc}
        />
      )}
      <View
        style={{
          position: "relative",
          // maxHeight: 100,
          paddingHorizontal: 15,
        }}
      >
        <View style={styles.textBox}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
          >
            <TextInput
              // ref={ref}
              value={chatMessage}
              onChangeText={(value) => {
                setChatMessage(value);
              }}
              lineBreakStrategyIOS="hangul-word"
              textBreakStrategy="highQuality"
              maxLength={4096}
              enterKeyHint="send"
              blurOnSubmit
              enablesReturnKeyAutomatically
              onFocus={() => {
                //   setFocus(true);
              }}
              onBlur={() => {
                //   setFocus(false);
              }}
              // onSubmitEditing={onSubmit}
              placeholder="Write a message..."
              placeholderTextColor={"#979797"}
              style={[styles.textInput, inputStyles]}
              multiline={true}
              // editable={!visible}
            />
          </ScrollView>
          <View style={styles.iconView}>
            {InputIcons.map((icon, i) => (
              <Pressable
                key={i}
                onPress={() => {
                  // i === 0 ? setEmojiPickerOpen(!emojiPickerOpen) : onSubmit();
                }}
                style={[
                  {
                    alignSelf: "flex-end",
                  },
                  i === 0 && { marginRight: 10, marginBottom: 1 },
                ]}
                //   disabled={visible || (i === 1 && chatMessage.length <= 0)}
              >
                {icon}
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textBox: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "rgba(217, 217, 217, 0.33)",
    zIndex: 1,
  },
  outerlayer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  textInput: {
    paddingRight: 5,
    paddingVertical: 5,
    width: "85%",
    fontFamily: "System",
    fontSize: 16,
    textAlignVertical: "center",
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingVertical: 5,
  },
  jumpBox: {
    backgroundColor: "#2E88FC",
    flexDirection: "row",
    width: 140,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    gap: 5,
    position: "absolute",
    top: -30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    shadowColor: Platform.select({
      ios: "rgba(0, 0, 0, 0.8)",
      android: "rgba(0, 0, 0, 0.98)",
    }),
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 8,
  },
});

export default MessageInput;
