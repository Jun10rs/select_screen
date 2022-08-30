import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

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

  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  function calculator() {
    const splitNumber = currentNumber.split(' ');
    const firstNumber = parseFloat(splitNumber[0]);
    const lastNumber = parseFloat(splitNumber[2]);
    const operator = splitNumber[1];

    switch (operator) {
      case "+":
        setCurrentNumber((firstNumber + lastNumber).toString());
        return;
      case "-":
        setCurrentNumber((firstNumber - lastNumber).toString());
        return;
      case "*":
        setCurrentNumber((firstNumber * lastNumber).toString());
        return;
      case "/":
        setCurrentNumber((firstNumber / lastNumber).toString());
        return;
    }
  }

  function handleInput(buttonPressed) {
    if (
      (buttonPressed === "+") |
      (buttonPressed === "-") |
      (buttonPressed === "*") |
      (buttonPressed === "/")
    ) {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ");
      return;
    }
    switch (buttonPressed) {
      case "DEL":
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)));
        return;
      case "AC":
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "=":
        setLastNumber(currentNumber + " = ");
        calculator();
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF",
      alignItems: "center",
      justifyContent: "space-between",
    },

    result: {
      backgroundColor: theme ? "#282f3b" : "#f5f5f5",
      width: "100%",
      minHeight: 350,
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },

    resultText: {
      margin: 10,
      fontSize: 40,
      color: theme ? "white" : "black",
    },

    historyText: {
      fontSize: 20,
      color: theme ? "white" : "black"
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

    containerButtons: {
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: theme ? "#282f3b" : "#e5e5e5"
    },

    button: {
      width: '20%',
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      elevation: 10,
      margin: 5,
      backgroundColor: theme ? "#282f3b" : "#e5e5e5"
    },

    buttonText: {
      color: theme ? "white" : "black",
      fontSize: 18
    },
    buttonOperator: {
      color: 'orange',
      fontSize: 18,
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

        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

      <View style={styles.containerButtons}>
        {buttons.map((button) =>
            button === "=" ? (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              key={button}
              style={styles.button}
            >
              <Text style={styles.buttonOperator}>{button}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
           
          )
        )}
      </View>
    </View>
  );
}
