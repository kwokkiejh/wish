import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../../navigation/RootNavigator";
import Screen from "../../components/Screen/Screen";
import CreateHeader from "./components/CreateHeader";
import React from "react";
import OutlinedTextInput from "../../components/OutlinedTextInput/OutlinedTextInput";

type CreatePinScreenStackParamList = StackNavigationProp<
  RootNavigatorParamList,
  "CreateCollection"
>;
const CreateCollectionScreen = () => {
  const navigation = useNavigation<CreatePinScreenStackParamList>();
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <Screen>
      <CreateHeader
        handleClosePress={() => navigation.navigate("Tab")}
        handleCompleteStepPress={() => navigation.navigate("Tab")}
        title={`Create Collection`}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.inputLabel}>Name</Text>
        <OutlinedTextInput
          placeholder="Enter name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Text style={styles.inputLabel}>Description</Text>
        <OutlinedTextInput
          placeholder="Enter description"
          value={description}
          style={styles.input}
          onChangeText={setDescription}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: "center",
    width: "60%"
  },
  input: { marginTop: 8, marginBottom: 16 },
  inputLabel: { marginTop: 8 }
});
export default CreateCollectionScreen;
