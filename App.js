import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet,Pressable, Text, TextInput, View } from 'react-native';
import currencyData from './data.js'
import cards from './components/Cards'
import { useState } from 'react';
// import Cards from './components/Cards';

export default function App() {
  const [amount, setAmount] = useState('')
  const [currentCurrency,setCurrentCurency]=useState({})
  const [result,setResult]=useState()

  const getAmount = (text) => {
    
    // generateValue(currentCurrency)
    setAmount(parseFloat(text))
    
  }
  const generateValue=(targetCurrency)=>{
    if(!amount){
      setResult()
      alert("Enter an amount")
    }else{
      setCurrentCurency(targetCurrency)
      let value=amount* targetCurrency.value
     setResult(value.toFixed(2))
    }
   

   
  
 
  }
  // const Cards = () => {
  //   return (
  //     <View>
  //       <Text>Hi i am rahul</Text>
  //     </View>
  //   )
  // }
  return (

    <View style={styles.container}>
      <SafeAreaView>
        {/* <StatusBar/> */}
        <View>
          <Text style={styles.heading}>Convert currency</Text>
          <TextInput
            style={styles.inputField}
            placeholder='Enter Amount'
            maxLength={12}
            keyboardType='numeric'
            onChangeText={getAmount}

          />

          {result && <Text style={styles.amount}>Amount is {result} {currentCurrency.name}</Text>}
        </View>
        <View style={styles.cardContainer}>
          {
            currencyData.map((item, index) => {
              return (
                <Pressable 
                key={index} style={[styles.card,currentCurrency.name==item.name && styles.selected]}
                onPress={()=>generateValue(item)}
                >
                  <Text style={styles.cardFlag}>{item.flag}</Text>
                  <Text style={styles.cardText}>{item.name}</Text>
                </Pressable>
              )
            })
          }
        </View>
      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {

  },
  heading: {
    fontSize: 20,
    fontFamily: 'serif',
    margin: 5,
    textAlign: 'center'
  },
  inputField: {
    backgroundColor: 'gray',
    margin: 30,
    padding: 5,
    borderRadius: 4

  },
  cardContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
   
  },
  cardText:{
    // textAlign:"center",
    fontSize:10,
  },
  cardFlag:{
    // textAlign:"center",
    fontSize:20,
  },
  card:{
    backgroundColor:'gray',
    margin:2,
    padding:10,
    width:'31%',
    borderRadius:2,
    backgroundColor:"violet",
    alignItems: 'center',
    justifyContent: 'center',

  },
  amount:{
    textAlign:'center',
    margin:10,
    fontSize:15,
    fontStyle:"italic",
    fontWeight:"bold"

  },
  selected:{
    backgroundColor:"green"
  }
});
