import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type CreateHeaderProps = {
  handleClosePress: () => void;
  title: string;
  handleCompleteStepPress: () => void;
  isStepComplete?: boolean;
  finalStep?: boolean;
};
const CreateHeader = ({
  handleClosePress,
  title,
  handleCompleteStepPress,
  isStepComplete = false,
  finalStep = true
}: CreateHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClosePress}>
          <MaterialCommunityIcons name="close" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            isStepComplete
              ? styles.enableButtonColor
              : styles.disableButtonColor
          ]}
          onPress={handleCompleteStepPress}
        >
          <Text
            style={
              isStepComplete
                ? styles.enableButtonText
                : styles.disableButtonText
            }
          >
            {finalStep ? `Done` : `Next`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  closeButton: { padding: 10 },
  title: { fontWeight: "bold", fontSize: 18, textAlign: "center" },
  nextButton: {
    padding: 10,
    borderRadius: 28,
    alignSelf: "flex-end"
  },
  enableButtonColor: {
    backgroundColor: "#FFBCC2"
  },
  enableButtonText: {
    fontWeight: "500",
    color: "#000000"
  },
  disableButtonColor: {
    backgroundColor: "#F4F4F4"
  },
  disableButtonText: { fontWeight: "500", color: "#C6C6C6" }
});

export default CreateHeader;
