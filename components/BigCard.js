import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const BigCard = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={{ uri: props.image }} />
          <Text style={styles.name}>{props.name}</Text>
          <Image
            resizeMode="contain"
            style={styles.image1}
            source={require("../assets/stars_zomato.jpeg")}
          />
          <Text style={styles.type}>{props.type}</Text>
          <Text style={styles.type}>₹200 per Person. 30min</Text>
          <Image
            resizeMode="contain"
            style={styles.image2}
            source={require("../assets/safety_zomato.jpeg")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  card: {
    width: 340,
    height: 370,
    borderWidth: 1,
    borderColor: "#CECECE",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  name: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 17,
    fontWeight: "bold",
    color: "#4F4E4E",
  },
  image1: {
    marginTop: 6,
    width: 300,
    height: 30,
  },
  type: {
    marginTop: 4,
    fontSize: 15,
    paddingLeft: 5,
    color: "#7E7E7E",
  },
  image2: {
    width: "100%",
    height: 35,
    alignSelf: "center",
  },
});

export default BigCard;
