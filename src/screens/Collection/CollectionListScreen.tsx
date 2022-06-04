import { SafeAreaView, Text, TextInput, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CollectionCard from "./components/CollectionCard";
const CollectionListScreen = () => {
  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.topContainer}>
        <Text style={styles.header}>Collections</Text>
      </View>
      <View style={styles.searchBar}>
        <MaterialIcons name="search" size={24} color="black" />
        <TextInput
          style={styles.searchBarPlaceholder}
          placeholder="Search your Collections"
          placeholderTextColor="#404040"
        />
      </View>
      <View>
        <CollectionCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 8
  },

  topContainer: { alignItems: "center", marginTop: 48, marginBottom: 24 },
  backButton: {
    padding: 10
  },
  header: {
    fontSize: 32,
    fontWeight: "bold"
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#F4F4F4",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  },
  searchBarPlaceholder: { marginLeft: 12 }
});

export default CollectionListScreen;
