import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../../navigation/RootNavigator";
import Screen from "../../components/Screen";

type CreatePinScreenStackParamList = StackNavigationProp<
  RootNavigatorParamList,
  "CreatePin"
>;
const CreatePinScreen = () => {
  const navigation = useNavigation<CreatePinScreenStackParamList>();

  return (
    <Screen>
      <TouchableOpacity onPress={() => navigation.navigate("Tab")}>
        <MaterialCommunityIcons
          name="close"
          size={32}
          color="black"
          style={{ padding: 10 }}
        />
      </TouchableOpacity>
    </Screen>
  );
};
export default CreatePinScreen;
