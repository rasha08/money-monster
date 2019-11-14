import React from "react";
import { View, Text } from "@shoutem/ui";

import { usePopupContext } from "../../../context/popup";
import { style } from "./styled";
import { combineStyles } from "../../utils";
import { PopupTypes } from "../../constants";
import { backgroundColorStyle } from "../../styles";

export const PopUpBanner = () => {
  const {
    state: { message, type }
  } = usePopupContext();

  if (!message) {
    return null;
  }

  
  return (
    <View
      style={combineStyles(
        [style.view],
        [
          { [type === PopupTypes.Error]: backgroundColorStyle.danger },
          { [type === PopupTypes.Info]: backgroundColorStyle.primary },
          { [type === PopupTypes.Success]: backgroundColorStyle.success }
        ]
      )}
    >
      <Text style={style.text}>{message}</Text>
    </View>
  );
};
