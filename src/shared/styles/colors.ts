import {StyleSheet} from "react-native";
import { reduce, keys } from 'ramda'
import {reduceCollectionToType} from "../utils";

export type ColorName = 'default' | 'primary' | 'success' | 'danger' | 'muted' | 'disabled' | 'primaryDarker'

type Color = {
    [key in ColorName]: string;
};

type TextColor = {
    [key in ColorName]: { color: string };
};

type BackgroundColor = {
    [key in ColorName]: { backgroundColor: string };
}

export const colors: Color = {
    default: 'snow',
    primary: '#668cc5',
    success: '#74934a',
    danger: '#934a4a',
    muted: 'gray',
    disabled: '#434345',
    primaryDarker: '#4a6793'
};

export const transformColorToStyleProperty = reduceCollectionToType(colors);

export const textColorStyle: TextColor = StyleSheet.create(
   transformColorToStyleProperty<TextColor>((currentColor, colors) => ({[currentColor]: { color: colors[currentColor] }}))
);

export const backgroundColorStyle: BackgroundColor = StyleSheet.create(
    transformColorToStyleProperty<BackgroundColor>((currentColor, colors) => ({[currentColor]: { backgroundColor: colors[currentColor] }}))
);
