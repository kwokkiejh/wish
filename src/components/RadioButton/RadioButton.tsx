import {
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TouchableOpacityProps
} from "react-native";

type RadioButtonProps = {
  style?: ViewStyle;
  selected?: boolean;
  color?: string;
  label: string;
} & TouchableOpacityProps;
const RadioButton = ({
  style,
  selected = true,
  color = "#000",
  label,
  onPress = undefined
}: RadioButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View
        style={{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: color,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 8
        }}
      >
        {selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: color
            }}
          />
        ) : null}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  name: {
    fontWeight: "500",
    fontSize: 16
  }
});
export default RadioButton;
