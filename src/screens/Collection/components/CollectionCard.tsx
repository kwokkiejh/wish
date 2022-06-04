import { Image, Text, TextInput, StyleSheet, View } from "react-native";

const CollectionCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Image
          source={{
            uri:
              "https://i.pinimg.com/564x/95/83/c4/9583c483ab44688e4b5b8e1f4b880db9.jpg"
          }}
          style={{ width: 200, height: 200 }}
        />
        <View>
          <Image
            source={{
              uri:
                "https://i.pinimg.com/564x/53/80/c0/5380c0b4542d300eef8ad53d38e61b3a.jpg"
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{
              uri:
                "https://i.pinimg.com/564x/2e/a9/bc/2ea9bcbcf5bd659b68e1cdf3a70751a6.jpg"
            }}
            style={{ width: 100, height: 100 }}
          />
        </View>
      </View>
      <Text style={styles.name}>Vintage Clothes</Text>
      <Text>5 Items</Text>
    </View>
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
export default CollectionCard;
