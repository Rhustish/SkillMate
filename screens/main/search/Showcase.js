import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ShowcaseComponent from './ShowcaseComponent'
import guitarjpg from "../../../assets/SearchShowcase/guitar.jpg"
import keyboardjpg from "../../../assets/SearchShowcase/keyboard.jpg"
import violinjpg from "../../../assets/SearchShowcase/violin.jpg"
export default function Showcase() {
  return (
    <View style={styles.container}>
      <ShowcaseComponent title="Guitar" image={guitarjpg} />
      <ShowcaseComponent title="KeyBoard" image={keyboardjpg}/>
      <ShowcaseComponent title="Violin" image={violinjpg} />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    color:"white",
    marginHorizontal:"5%",
    width:"90%",
    flexWrap:"nowrap",
    flexGrow: 0

  }
})