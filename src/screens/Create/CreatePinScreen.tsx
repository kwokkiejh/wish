import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../../navigation/RootNavigator";
import Screen from "../../components/Screen/Screen";
import CreateHeader from "./components/CreateHeader";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import OutlinedTextInput from "../../components/OutlinedTextInput/OutlinedTextInput";

type CreatePinScreenStackParamList = StackNavigationProp<
  RootNavigatorParamList,
  "CreatePin"
>;
const CreatePinScreen = () => {
  const navigation = useNavigation<CreatePinScreenStackParamList>();

  const [pickedImagePath, setPickedImagePath] = React.useState("");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [website, setWebsite] = React.useState("");

  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  };
  return (
    <Screen>
      <CreateHeader
        handleClosePress={() => navigation.navigate("Tab")}
        handleCompleteStepPress={() => navigation.navigate("Tab")}
        title={`Create Pin`}
      />

      <TouchableOpacity onPress={showImagePicker} style={styles.imageContainer}>
        <View style={styles.placeholderContainer}>
          {pickedImagePath !== "" ? (
            <>
              <Image source={{ uri: pickedImagePath }} style={styles.image} />
              <View style={styles.changeImageButton}>
                <Text>Change Picture</Text>
              </View>
            </>
          ) : (
            <>
              <Ionicons name="image" size={108} color="#A56093" />
              <Text style={styles.placeholderText}>
                Tap here to upload image
              </Text>
            </>
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
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
        <Text style={styles.inputLabel}>Destination Website</Text>
        <OutlinedTextInput
          placeholder="Enter website link"
          value={website}
          style={styles.input}
          onChangeText={setWebsite}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: "cover",
    position: "relative",
  },
  placeholderContainer: {
    borderWidth: 2,
    borderRadius: 6,
    borderStyle: "dashed",
    width: 404,
    height: 304,
    borderColor: "#A56093",
    backgroundColor: "#FFF6F5",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  placeholderText: {
    marginTop: 10,
    color: "#A56093",
    fontWeight: "500",
  },
  inputContainer: {
    alignSelf: "center",
    width: "60%",
  },
  input: { marginTop: 8, marginBottom: 16 },
  radioButton: { marginTop: 4, marginBottom: 4 },
  inputLabel: { marginTop: 8 },
  changeImageButton: {
    padding: 6,
    position: "absolute",
    zIndex: 1,
    bottom: 8,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 16,
  },
});

export default CreatePinScreen;
