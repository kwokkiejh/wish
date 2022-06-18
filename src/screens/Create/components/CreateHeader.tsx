import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type CreateHeaderProps = {
  handleClosePress: () => void;
  title: string;
  handleCompleteStepPress: () => void;
  finalStep?: boolean;
};
const CreateHeader = ({
  handleClosePress,
  title,
  handleCompleteStepPress,
  finalStep = true
}: CreateHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClosePress}>
        <MaterialCommunityIcons name="close" size={32} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleCompleteStepPress}
      >
        <Text style={styles.buttonText}>{finalStep ? `Done` : `Next`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  closeButton: { padding: 10 },
  title: { fontWeight: "bold", fontSize: 18 },
  buttonText: { fontWeight: "500", color: "#C6C6C6" },
  nextButton: {
    backgroundColor: "#F4F4F4",
    padding: 12,
    borderRadius: 28
  }
});

export default CreateHeader;
