import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const BottomTab = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate("HomeTab")}
      >
        <MaterialCommunityIcons
          name={state.index === 0 ? "home-variant" : "home-variant-outline"}
          size={32}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() =>
          navigation.navigate("CollectionTab", { screen: "CollectionList" })
        }
      >
        <MaterialCommunityIcons
          name={
            state.index === 1
              ? "view-dashboard-variant"
              : "view-dashboard-variant-outline"
          }
          size={32}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIcons name="plus-circle" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIcons
          name={state.index === 3 ? "bell" : "bell-outline"}
          size={32}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        {state.index === 4 ? (
          <MaterialIcons name="settings" size={32} color="black" />
        ) : (
          <Octicons name="gear" size={28} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 40,
    alignSelf: "center",
    padding: 8,
    position: "absolute",
    bottom: 30,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: "row",
    alignItems: "center"
  },
  iconButton: {
    marginLeft: 16,
    marginRight: 16
  }
});
export default BottomTab;
