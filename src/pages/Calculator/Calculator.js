import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

export default function Calculator() {
  const [theme, setTheme] = useState(false);

  const buttons = [
    "AC",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ",",
    "=",
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF",
      alignItems: "center",
      justifyContent: "center",
    },

    result: {
      backgroundColor: theme ? "#282f3b" : "#f5f5f5",
      width: "100%",
      minHeight: 300,
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },

    resultText: {
      margin: 10,
      fontSize: 25,
      color: theme ? 'white' : 'black'
    },

    buttonTheme: {
      alignItems: "center",
      alignSelf: "flex-start",
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      backgroundColor: theme ? "#7b8084" : "#e5e5e5",
      bottom: 130,
      margin: 15,
    },

    buttons: {
      flexDirection: "row",
      flexWrap: "wrap",
    },

    button: {
      borderColor: theme ? "#3f4d5b" : "#e5e5e5",
      minHeight: 80,
      minWidth: 80,
      flex: 2,
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
   
      justifyContent: 'center'
    },
  });

  return (
    <View>
      <View style={styles.result}>
        <TouchableOpacity style={styles.buttonTheme}>
          <Entypo
            name={theme ? "light-up" : "moon"}
            size={24}
            color={theme ? "white" : "black"}
            onPress={() => (theme ? setTheme(false) : setTheme(true))}
          />
        </TouchableOpacity>

        <Text style={styles.resultText}> 2 + 2= 5</Text>
      </View>

      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === "=" ? (
            <TouchableOpacity style={styles.button}>
              <Text>{button}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button}>
              <Text>{button}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}
