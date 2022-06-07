import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CollectionStackParamList } from "../../navigation/CollectionNavigator";

type CollectionScreenNavigationProps = StackNavigationProp<
  CollectionStackParamList,
  "Collection"
>;

const CollectionScreen = () => {
  const navigation = useNavigation<CollectionScreenNavigationProps>();

  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={[styles.backButton]}
          onPress={() => navigation.navigate("CollectionList")}
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={32}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.collectionName}>Vintage Clothes</Text>
        <View style={styles.buttonRow}>
          <View style={styles.buttonItem}>
            <TouchableOpacity style={[styles.button, styles.planner]}>
              <MaterialCommunityIcons
                name="calendar-blank"
                size={28}
                color="white"
              />
            </TouchableOpacity>
            <Text style={styles.subtext}>Planner</Text>
          </View>
          <View style={styles.buttonItem}>
            <TouchableOpacity style={[styles.button, styles.organize]}>
              <MaterialCommunityIcons
                name="select-group"
                size={28}
                color="black"
              ></MaterialCommunityIcons>
            </TouchableOpacity>
            <Text style={styles.subtext}>Organize</Text>
          </View>
          <View style={styles.buttonItem}>
            <TouchableOpacity style={[styles.button, styles.more]}>
              <MaterialIcons name="more-horiz" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.subtext}>More</Text>
          </View>
        </View>
      </View>
      <View style={styles.collectionItemsContainer}>
        <View style={styles.collectionItemsHeader}>
          <Text style={styles.itemsHeaderText}>5 Items</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 8
  },
  topContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 24
  },
  navContainer: { marginBottom: 24 },
  collectionItemsContainer: { marginBottom: 24 },
  collectionItemsHeader: { justifyContent: "space-between" },
  itemsHeaderText: { fontSize: 18, fontWeight: "500" },
  collectionName: {
    fontSize: 32,
    fontWeight: "bold"
  },
  buttonRow: {
    flexDirection: "row",
    margin: 12
  },
  buttonItem: {
    alignItems: "center",
    marginLeft: 12,
    marginRight: 12
  },
  button: {
    alignItems: "center",
    padding: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#FFFFFF"
  },
  planner: {
    backgroundColor: "#000000"
  },
  organize: {
    backgroundColor: "#FACDD5"
  },
  more: {
    backgroundColor: "#FFFFFF",
    borderColor: "#404040"
  },
  subtext: { fontSize: 12 },
  backButton: {
    padding: 10
  }
});

export default CollectionScreen;
