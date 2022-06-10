import "react-native-gesture-handler";
import CollectionListScreen from "../screens/Collection/CollectionListScreen";
import CollectionScreen from "../screens/Collection/CollectionScreen";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import CreateBottomDrawer from "./components/CreateBottomDrawer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import CreatePinScreen from "../screens/Create/CreatePinScreen";

export type RootNavigatorParamList = {
  Tab: undefined;
  Create: undefined;
  CreatePin: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();
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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: "modal",
          animationEnabled: false
        }}
        initialRouteName="Tab"
      >
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen
          name="Create"
          component={CreateBottomDrawer}
          options={{
            presentation: "transparentModal",
            cardOverlayEnabled: true
          }}
        />
        <Stack.Screen name="CreatePin" component={CreatePinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
