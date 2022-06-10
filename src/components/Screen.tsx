import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
type Props = {
  children?: React.ReactNode;
};
const Screen = ({ children }: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flex: 1
  }
});

export default Screen;
