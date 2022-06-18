import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

const OutlinedTextInput = (props: TextInputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <TextInput
      {...props}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={[props.style, isFocused ? styles.inputOnFocus : styles.input]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C6C6C6",
    backgroundColor: "#F4F4F4"
  },
  inputOnFocus: {
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#FD5872",
    backgroundColor: "#F4F4F4"
  }
});
export default OutlinedTextInput;
