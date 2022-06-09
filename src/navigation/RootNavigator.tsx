import "react-native-gesture-handler";
import CollectionListScreen from "../../src/screens/Collection/CollectionListScreen";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import CollectionScreen from "../../src/screens/Collection/CollectionScreen";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import HomeScreen from "../screens/Home/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTab from "../components/BottomTab";
import CollectionNavigator from "./CollectionNavigator";

export type RootParamList = {
  HomeTab: undefined;
  CollectionTab: undefined;
};

const Tab = createBottomTabNavigator<RootParamList>();
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white"
  }
};

const RootNavigator = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        tabBar={props => <BottomTab {...props} />}
        initialRouteName="HomeTab"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          unmountOnBlur: true
        }}
      >
        <Tab.Screen name="HomeTab" component={HomeScreen} />
        <Tab.Screen name="CollectionTab" component={CollectionNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
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
export default RootNavigator;
