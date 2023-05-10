import { View,StyleSheet } from 'react-native'
import React from 'react'
import ShowcaseComponent from './ShowcaseComponent'
import guitarjpg from "../../../assets/SearchShowcase/guitar.jpg"
import keyboardjpg from "../../../assets/SearchShowcase/keyboard.jpg"
import violinjpg from "../../../assets/SearchShowcase/violin.jpg"
import cookingjpg from "../../../assets/SearchShowcase/cooking.jpg"
import dmjpg from "../../../assets/SearchShowcase/digital.jpg"
import frenchjpg from "../../../assets/SearchShowcase/french.jpg"
import gdjpg from "../../../assets/SearchShowcase/gd.jpg"
import germanjpg from "../../../assets/SearchShowcase/german.jpg"
import photographyjpg from "../../../assets/SearchShowcase/photography.jpg"
import yogajpg from "../../../assets/SearchShowcase/yoga.jpg"
import pythonjpg from "../../../assets/SearchShowcase/python.jpg"
import webdevjpg from "../../../assets/SearchShowcase/webdev.jpg"
export default function Showcase() {
  return (
    <View style={styles.container}>
      <ShowcaseComponent title="Guitar" image={guitarjpg} />
      <ShowcaseComponent title="KeyBoard" image={keyboardjpg}/>
      <ShowcaseComponent title="Violin" image={violinjpg} />
      <ShowcaseComponent title="Cooking" image={cookingjpg} />
      <ShowcaseComponent title="Digital Marketing" image={dmjpg} />
      <ShowcaseComponent title="French" image={frenchjpg} />
      <ShowcaseComponent title="Graphic Design" image={gdjpg} />
      <ShowcaseComponent title="German" image={germanjpg} />
      <ShowcaseComponent title="Photography" image={photographyjpg} />
      <ShowcaseComponent title="Yoga" image={yogajpg} />
      <ShowcaseComponent title="Python" image={pythonjpg} />
      <ShowcaseComponent title="Web Development" image={webdevjpg} />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    // justifyContent:"space-between",
    color:"white",
    marginHorizontal:"5%",
    width:"90%",
    flexWrap:"wrap",
    flex:1,
    height:"100%",

    

  }
})