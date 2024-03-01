import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  useWindowDimensions,
} from "react-native";
const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

const PokemonCard = ({ name, image, type, hp, moves, weaknesses }) => {
  const { borderColor, emoji } = getTypeDetails(type);
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  // console.log(width, height);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={[styles.name, width > 500 ? 80 : 32]}>{name}</Text>
        <Text style={[styles.hp, width > 500 ? 62 : 22]}>❤️{hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} pokemon`}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.headings}>
          Moves : <Text style={styles.movesText}>{moves.join(", ")}</Text>
        </Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.headings}>
          Weakness :
          <Text style={styles.weaknessText}> {weaknesses.join(", ")}</Text>
        </Text>
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
  },
  typeContainer: {
    marginTop: 15,
    marginBottom: 30,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 25,
    marginRight: 12,
  },
  typeText: {
    fontSize: 25,
    fontWeight: "normal",
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 25,
    fontWeight: "normal",
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 25,
    fontWeight: "normal",
  },
  headings: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
