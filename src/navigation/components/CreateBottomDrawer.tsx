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
  const { current } = useCardAnimation();
  const styles = makeStyles(current);
  const navigation = useNavigation<CreateFullScreenModalStackParamList>();

  return (
    <View style={styles.container}>
      <Pressable
        style={[StyleSheet.absoluteFill, styles.pressable]}
        onPress={navigation.goBack}
      />
      <Animated.View style={styles.animatedView}>
        <Text style={styles.subtitle}>Create</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CreatePin")}>
          <Text style={styles.actionButtonText}>Pin</Text>
        </TouchableOpacity>
        <Text style={styles.actionButtonText}>Collection</Text>
        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={navigation.goBack}
          >
            <Text style={styles.backButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const makeStyles = (current: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    pressable: {
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    animatedView: {
      padding: 20,
      width: "100%",
      maxWidth: 500,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: "#FFFFFF",
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
    },
    subtitle: { marginBottom: 12, fontSize: 16 },
    actionButtonText: {
      fontSize: 18,
      fontWeight: "500",
      marginBottom: 12
    },
    backButton: {
      backgroundColor: "#F4F4F4",
      alignSelf: "center",
      padding: 16,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 28
    },
    backButtonText: {
      fontWeight: "500"
    }
  });
export default CreateBottomDrawer;
