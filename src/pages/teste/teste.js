import {Text, View, StyleSheet, ScrollView} from 'react-native';

import { useEffect, useState } from 'react';



export default function Teste() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/douglas-cavalcante/repos')
        .then ( async (response)=>{ 
            console.log('Deu certo')
            const data = await response.json ()
            setRepositories(data)
        })
        .catch ((error)=> {
            alert ("tente novamente")
            console.log ('Deu ruim')
            console.log(error)
        })
    },[])


    return (
      <ScrollView>
        {repositories.map((repository) => (
            <View style={styles.card}>
                <Text style={styles.information}>{repository.name}</Text>
                <Text style={styles.information}>{repository.descripition}</Text>
            </View>
        ))}
      </ScrollView>
    );
  }

  const styles = StyleSheet.create ({
    card: {
        backgroundColor: 'black',
        width:'90%',
        height: 50,
        margin: 20
    },

    information: {
        color: "#FFF",
        fontSize: 14
,    }
  })

  /*<View style={styles.container}>

      <View style={styles.flexContainer}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.flexContainer}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.flexContainer}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.flexContainer}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.flexContainer}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.button, width:'45%'}}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

      </View>
    </View>*/