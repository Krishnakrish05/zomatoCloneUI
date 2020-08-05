import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const SmallCard = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{ uri: props.image }}
        />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    height: 90,
    width: 80,
    borderWidth: 0.5,
    marginHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  textcontainer: {
    marginTop: 3,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: "black",
  },
  img: {
    height: "100%",
    width: "100%",
  },
});

export default SmallCard;
