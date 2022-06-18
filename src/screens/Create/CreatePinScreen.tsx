import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../../navigation/RootNavigator";
import Screen from "../../components/Screen/Screen";
import CreateHeader from "./components/CreateHeader";

type CreatePinScreenStackParamList = StackNavigationProp<
  RootNavigatorParamList,
  "CreatePin"
>;
const CreatePinScreen = () => {
  const navigation = useNavigation<CreatePinScreenStackParamList>();

  return (
    <Screen>
      <CreateHeader
        handleClosePress={() => navigation.navigate("Tab")}
        handleCompleteStepPress={() => navigation.navigate("Tab")}
        title={`Create Pin`}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default CreatePinScreen;
