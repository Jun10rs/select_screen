import {Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';


export default function Calculator() {
    return (
      <View style={styles.container}>

        <TextInput
          style={StyleSheet.input}
        />
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
  
      
      
    
    );
  }

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },

  input: {
    fontSize: 50,
  
  },

  button: {
    height: 50,
    width: 50,
    borderRadius: 15,
    backgroundColor: '#0D4DA3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFF'
  },
})