import { StyleSheet } from "react-native";
import {textColorStyle} from "../../styles";

export const style = StyleSheet.create({
  view: {
    position: "absolute",
    top: "1%",
    padding: "5%"
  },
  text: {
    textAlign: "center",
    ...textColorStyle.default
  }
});
