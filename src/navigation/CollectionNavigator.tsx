import "react-native-gesture-handler";
import CollectionListScreen from "../../src/screens/Collection/CollectionListScreen";
import CollectionScreen from "../../src/screens/Collection/CollectionScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type CollectionStackParamList = {
  CollectionList: undefined;
  Collection: undefined;
};

const Stack = createStackNavigator<CollectionStackParamList>();

const CollectionNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="CollectionList"
    >
      <Stack.Screen name="CollectionList" component={CollectionListScreen} />
      <Stack.Screen name="Collection" component={CollectionScreen} />
    </Stack.Navigator>
  );
};

export default CollectionNavigator;
