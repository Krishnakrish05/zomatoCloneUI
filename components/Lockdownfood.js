import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import SmallCard from "./SmallCard";

const Food = [
  {
    id: 1,
    img:
      "https://media.istockphoto.com/photos/masala-dosa-picture-id481750586?b=1&k=6&m=481750586&s=170x170&h=k_r8RrtUYkJy2gR3VTWcPd0K1av3x-kJAVVIzlgHa1A=",
    name: "Dosa",
  },
  {
    id: 2,
    img:
      "https://images.freeimages.com/images/small-previews/392/milk-shake-1326835.jpg",
    name: "Shakes",
  },
  {
    id: 3,
    img:
      "https://media.gettyimages.com/photos/mutter-paneer-in-india-picture-id484591838?b=1&k=6&m=484591838&s=612x612&w=0&h=lKEu_Sx0BzY7UP7TSUqqt4nxUfHtPXEajzT-32vz3qw=",
    name: "Thali",
  },
  {
    id: 4,
    img:
      "https://media.istockphoto.com/photos/spicy-indian-chicken-biriyani-rice-with-sliced-eggs-and-garnished-picture-id941715954?b=1&k=6&m=941715954&s=170x170&h=L4H9onPgYj87nfI0rkYuEXzxVuKl9clB_NjRaMyDj64=",
    name: "Biriyani",
  },
  {
    id: 5,
    img:
      "https://media.gettyimages.com/photos/paneer-butter-masala-or-cheese-cottage-curry-popular-indian-menu-in-picture-id669312136?b=1&k=6&m=669312136&s=612x612&w=0&h=o5Gb4ZcK2NzchxBIg3AD4E_EY697FIW4cDCLBhSTF9Y=",
    name: "Paneer",
  },
  {
    id: 6,
    img:
      "https://media.gettyimages.com/photos/idili-picture-id1129440333?b=1&k=6&m=1129440333&s=170x170&h=EGjhIG3MIDL2NnH_Mpai_PJBY6owqWEZvVitStxYweM=",
    name: "Idli",
  },
  {
    id: 7,
    img:
      "https://media.istockphoto.com/photos/vada-a-south-indian-snack-picture-id469920431?b=1&k=6&m=469920431&s=170x170&h=LDZQ82668cYUa77fTp-lchDScWJINasc1BSAIo__33Q=",
    name: "Vada",
  },
  {
    id: 8,
    img:
      "https://media.gettyimages.com/photos/caramel-cappuccino-frappe-coffee-picture-id513590204?b=1&k=6&m=513590204&s=612x612&w=0&h=kJLhEm-M6dfxfUefbM1n2ZAEKm8CZ8owBdYGogSgyvk=",
    name: "Cold Coffee",
  },
  {
    id: 9,
    img:
      "https://images.freeimages.com/images/small-previews/acf/icecream-goodness-no1-1531356.jpg",
    name: "Ice cream",
  },
  {
    id: 10,
    img:
      "https://media.gettyimages.com/photos/traditional-indian-bread-aloo-paratha-or-aalu-parotha-potato-stuffed-picture-id694739192?b=1&k=6&m=694739192&s=170x170&h=IGhUZltmhuo1Wxn5spQvEoTcbk3Zi9ksdiELNLvzXIk=",
    name: "paranthas",
  },
  {
    id: 11,
    img:
      "https://media.istockphoto.com/photos/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-picture-id979916088?b=1&k=6&m=979916088&s=170x170&h=-qizQy0VBh4qhhxlVGJkpnut7WjPA0nG29Z-6Sd1-_Y=",
    name: "Chole Bhature",
  },
  {
    id: 12,
    img:
      "https://media.gettyimages.com/photos/mouthwatering-delicious-homemade-burger-used-to-chop-beef-on-the-picture-id907077304?b=1&k=6&m=907077304&s=612x612&w=0&h=-6mvQkaRN8F9bHkvwi8-sC3O6M7Uc5_dQoZhKkgL1NY=",
    name: "burger",
  },
];

const Lockdownfood = ({ numColumns = 3 }) => {
  return (
    <View>
      <Text style={styles.text}>Lockdown cravings</Text>
      <FlatList
        data={Food}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <SmallCard image={item.img} name={item.name} />;
        }}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 10,
  },
  text1: {
    textAlign: "center",
    fontWeight: "bold",
  },
  icon: {
    padding: 5,
  },
});

export default Lockdownfood;
