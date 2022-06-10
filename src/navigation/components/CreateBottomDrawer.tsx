import {
  Animated,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { StackNavigationProp, useCardAnimation } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../RootNavigator";

type CreateFullScreenModalStackParamList = StackNavigationProp<
  RootNavigatorParamList,
  "Create"
>;

const CreateBottomDrawer = () => {
  const { colors } = useTheme();
  const { current } = useCardAnimation();
  const navigation = useNavigation<CreateFullScreenModalStackParamList>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0, 0, 0, 0.5)" }
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          padding: 20,
          width: "100%",
          maxWidth: 500,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: colors.card,
          position: "absolute",
          bottom: 0,
          transform: [
            {
              scale: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
                extrapolate: "clamp"
              })
            }
          ]
        }}
      >
        <Text style={{ marginBottom: 12, fontSize: 16 }}>Create</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CreatePin")}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginBottom: 12
            }}
          >
            Pin
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginBottom: 12
          }}
        >
          Collection
        </Text>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#F4F4F4",
              alignSelf: "center",
              padding: 16,
              paddingLeft: 20,
              paddingRight: 20,
              borderRadius: 28
            }}
            onPress={navigation.goBack}
          >
            <Text style={{ fontWeight: "500", fontSize: 14 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};
export default CreateBottomDrawer;
