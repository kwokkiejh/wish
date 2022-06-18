import { Image, TouchableOpacity, StyleSheet, View } from "react-native";

const PinCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri:
            "https://i.pinimg.com/564x/2e/a9/bc/2ea9bcbcf5bd659b68e1cdf3a70751a6.jpg"
        }}
        style={{ width: 100, height: 100 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { margin: 12 },
  images: {
    flexDirection: "row"
  },
  name: {
    fontWeight: "500",
    fontSize: 16
  }
});
export default PinCard;
