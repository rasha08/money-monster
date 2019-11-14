import { reduce } from "ramda";
import { StyleProp } from "react-native";

interface ConditionalStyle {
  [condition: string]: StyleProp<any>;
}

export const combineStyles = (
  defaultStyles: StyleProp<any>[],
  conditionalStyles: ConditionalStyle[] = []
): StyleProp<any> => {
  return mergeStyles([
    mergeStyles(defaultStyles),
    conditionallyMergeStyles(conditionalStyles)
  ]);
};

const mergeStyles = (
  styles: StyleProp<any> | StyleProp<any>[]
): StyleProp<any> =>
  Array.isArray(styles)
    ? reduce((acc, elm) => ({ ...acc, ...elm }), {} as StyleProp<any>, styles)
    : styles;

const conditionallyMergeStyles = (
  conditionalStyles: ConditionalStyle[]
): StyleProp<any> =>
  reduce(
    (acc, elm) => {
      if (elm.true) {
        return { ...acc, ...mergeStyles(elm.true) };
      }

      return acc;
    },
    {} as StyleProp<any>,
    conditionalStyles
  );
