import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import LoaderStyles from "./LoaderStyles";

const Loader = (): JSX.Element => (
  <View style={LoaderStyles.container}>
    <ActivityIndicator size="large" color={LoaderStyles.indicator.color} />
  </View>
);

export default Loader;
