// src/components/ScreenContainer.js
import React from "react";
import { View, ImageBackground } from "react-native";
import globalStyles from "../styles/globalStyles";

const ScreenContainer = ({ children, background, backgroundColor }) => {
  if (background) {
    return (
      <ImageBackground source={background} style={globalStyles.backgroundImage}>
        <View style={globalStyles.container}>{children}</View>
      </ImageBackground>
    );
  }
  return <View style={[globalStyles.container, { backgroundColor }]}>{children}</View>;
};

export default ScreenContainer;
