import React from "react";
import { ActivityIndicator, View } from "react-native";
import LoaderStyles from "./LoaderStyles";

const Loader = (): JSX.Element => (
  <View style={LoaderStyles.container}>
    <ActivityIndicator
      size="large"
      color={LoaderStyles.indicator.color}
      testID="spinner"
    />
  </View>
);

export default Loader;
