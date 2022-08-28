import { Text, View, StyleSheet, ScrollView } from "react-native";

import { useEffect, useState } from "react";

export default function Animes() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch('https://animechan.vercel.app/api/quotes')
      .then(async (response) => {
        console.log("ok");
        const data = await response.json();
        setAnimes(data);
      })
      .catch(() => {
        alert("erro");
      });
  }, []);

  return (
    <ScrollView>
        {animes.map((anime, index) => (
            <View style={styles.card} key={index}>
            <Text style={styles.information}>{anime.anime}</Text>
            <Text style={styles.information}>{anime.character}</Text>
            <Text style={styles.information}>{anime.quote}</Text>
            </View>
            ))
        }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "black",
    width: "90%",
    minheight: 100,
    margin: 20,
  },

  information: {
    color: "#FFF",
    fontSize: 14,
  },
});
