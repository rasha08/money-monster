import { reduce, keys } from "ramda";

import { StyleSheet } from "react-native";
import { ColorName, transformColorToStyleProperty } from "./colors";

type Border = {
  [key in ColorName]: {
    borderColor: string;
    borderWidth: number;
    borderStyle: string;
  };
};

const defaultBorder = {
  borderWidth: 2,
  borderStyle: "solid"
};

export const borderStyle: Border = StyleSheet.create(
  transformColorToStyleProperty<Border>((currentColor, colors) => ({
    [currentColor]: { borderColor: colors[currentColor], ...defaultBorder }
  }))
);
