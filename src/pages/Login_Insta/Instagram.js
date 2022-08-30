import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#c0392b", "#f1c40f", "#8e44ad"]}
      start={{
        x: 0.5,
        y: 0.2,
      }}
      end={{
        x: 1,
        y: 0.7,
      }}
      style={styles.box}
    >
      <View style={styles.container}>
        <Text style={styles.titleText}>Instagram</Text>

        <TextInput
          style={styles.inputText}
          placeholder="digite seu email"
        ></TextInput>

        <TextInput
          style={styles.inputText}
          placeholder="digite sua senha"
          placeholderTextColor={"black"}
          secureTextEntry
        ></TextInput>

        <TouchableOpacity style={styles.buttonEntrar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.textForgot}>
          Esqueceu seu dados de login? Obtenha ajuda para entrar.
        </Text>
        <Text 
        style={{fontSize: 22, color: '#FFF', textDecorationLine: 'line-through'}} 
        >      ou     </Text>

        <TouchableOpacity style={styles.buttonFace}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://assets.stickpng.com/images/60fea6773d624000048712b5.png",
            }}
          />
          <Text style={styles.textFace}>Entrar com Facebook</Text>
        </TouchableOpacity>

        <Text style={styles.textFooter}>
          Não tem uma conta? 
          <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
           Cadastre-se
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#FFF",
  },

  box: {
    width: "100%",
    height: "100%",
  },

  inputText: {
    width: "80%",
    height: 60,
    backgroundColor: "#FFF",
    marginVertical: 10,
    padding: 10,
    opacity: 0.4,
  },

  buttonEntrar: {
    width: "80%",
    height: 60,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.6,
    borderColor: "#FFF",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },

  textForgot: {
    fontSize: 14,
    color: "#FFF",
    marginVertical: 10,
  },

  textFace: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFF",
  },

  buttonFace: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },

  logo: {
    width: 30,
    height: 30,
    marginRight: 15,
  },

  textFooter: {
    fontSize: 18,
    color: "#FFF",
  },
});
