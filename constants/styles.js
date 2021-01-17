import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
export const units = {
  width,
  height,
};

export const sizes = {
  font_sm: 12,
  font_md: 16,
  font_lg: 20,

  font_h1: 28,
  font_h2: 24,

  padding_sm: 10,
  padding_md: 15,
};
