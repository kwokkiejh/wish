import "react-native-gesture-handler";
import CollectionListScreen from "../../src/screens/Collection/CollectionListScreen";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import CollectionScreen from "../../src/screens/Collection/CollectionScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  CollectionList: undefined;
  Collection: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
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
          headerShown: false
        }}
        initialRouteName="CollectionList"
      >
        <Stack.Screen name="CollectionList" component={CollectionListScreen} />
        <Stack.Screen name="Collection" component={CollectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
