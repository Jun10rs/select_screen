import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "@expo/vector-icons/MaterialIcons";

export default function Pizza() {
  return (
    <View style={styles.container}>
      <View style={styles.containerPizza}>
        <Image
          style={styles.pizza}
          source={{
            uri: "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Foto-Pizza-PNG.png",
          }}
        />
      </View>

      <View style={styles.containerCard}>
        <Text style={styles.title}>Margherita</Text>

        <Text style={styles.description}>540gr - 3300 Kcal</Text>

        <View style={styles.buttonAdd}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.numberText}>1</Text>

          <TouchableOpacity>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{ alignSelf: "flex-end", marginVertical: -40, fontSize: 30 }}
        >
          R$ 34,99
        </Text>
        <View style={styles.containerItem}>
          <TouchableOpacity style={styles.selectItem}>
            <Image
              style={{
                width: 70,
                height: 60,
                marginTop: 20,
                alignSelf: "center",
              }}
              source={{
                uri: "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/05/Imagem-Queijo-PNG.png",
              }}
            />
            <Text
              style={{ alignSelf: "center", marginTop: 10, fontWeight: "bold" }}
            >
              Cheese
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.selectItem}>
            <Image
              style={{
                width: 70,
                height: 50,
                marginTop: 30,
                alignSelf: "center",
              }}
              source={{
                uri: "https://imagensemoldes.com.br/wp-content/uploads/2020/06/Foto-Carne-PNG-1280x720.png",
              }}
            />
            <Text
              style={{ alignSelf: "center", marginTop: 10, fontWeight: "bold" }}
            >
              Meat
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.selectItem}>
            <Image
              style={{
                width: 70,
                height: 50,
                marginTop: 30,
                alignSelf: "center",
              }}
              source={{
                uri: "https://i.pinimg.com/originals/99/52/01/995201e1c92ca9eced42364ed8a1892c.png",
              }}
            />
            <Text
              style={{ alignSelf: "center", marginTop: 10, fontWeight: "bold" }}
            >
              Bacon
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonAddCart}>
          <Text style={styles.cartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#D8D8D8",
  },

  containerPizza: {
    // backgroundColor: "red",
    width: "90%",
    height: "45%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  pizza: {
    width: "100%",
    height: "80%",
  },

  containerCard: {
    backgroundColor: "#FFF",
    width: "90%",
    height: "50%",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },

  buttonText: {
    fontSize: 25,
  },

  numberText: {
    fontSize: 20,
    alignSelf: "center",
    padding: 5,
    backgroundColor: "#D8D8D8",
    width: 20,
    height: 40,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  buttonAdd: {
    //backgroundColor: 'grey',
    flexDirection: "row",
    width: 95,
    height: 40,
    borderRadius: 5,
    alignSelf: "flex-start",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 20,
  },

  buttonAddCart: {
    backgroundColor: "tomato",
    width: "100%",
    height: "20%",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  selectItem: {
    backgroundColor: "#D8D8D8",
    width: "30%",
    height: "100%",
    borderRadius: 10,
  },

  cartText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  containerItem: {
    //backgroundColor: 'yellow',
    flexDirection: "row",
    height: "35%",
    marginTop: 60,
    justifyContent: "space-between",
  },
});
