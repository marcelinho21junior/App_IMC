import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput,TouchableOpacity} from 'react-native'

export default function App(){
  const[peso, setPeso] = useState('');
  const[altura, setAltura] = useState('');

function clicar(){
  const alt = altura / 100;
  const imc = peso / (alt*alt);

  if(imc < 18.6){
    alert('Voce está abaixo do peso!\n'+imc.toFixed(1));
  }else if(imc >= 18.6 && imc <24.9){
    alert('Peso Ideal!\n'+imc.toFixed(1));
  }else if(imc >= 24.9 && imc < 34.9){
    alert('Levemente acima do Peso!\n'+imc.toFixed(1));
  }
}  

  return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Calcule o seu IMC</Text>
        
        <TextInput 
          style={styles.input}
          value={peso}
          onChangeText ={ (peso) => setPeso(peso)}
          placeholder="Peso(Kg)"
          keyboardType="numeric"
        />

        <TextInput 
          style={styles.input}
          value={altura}
          onChangeText ={ (altura) => setAltura(altura)}
          placeholder="Altura(Cm)"
          keyboardType="numeric"
        />

        <TouchableOpacity 
          style = {styles.button}
          onPress={clicar}
          >
          <Text style = {styles.buttonText}>Clique aqui</Text>
        </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo:{
   textAlign:"center",
   marginTop:30,
   fontSize:30,
  },
  input:{
     backgroundColor:'black',
     borderRadius:10,
     margin:15,
     padding:10,
     color:"white",
     fontSize:21,   
  },
  button:{
     justifyContent:"center",
     alignItems:"center",
     margin:15,
     padding:20,
     borderRadius:10,
     backgroundColor:'blue', 
  },
  buttonText:{
      color:'white',
      fontSize:25,
      fontWeight:'700',
  },
}) 
