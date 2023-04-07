import { View, Text,ImageBackground,StyleSheet,Pressable, Image } from 'react-native'
import React from 'react'

const pressHandler = ()=>{
  console.log("ye press hua");
}

export default function ShowcaseComponent(props) {
  return (
    <Pressable
      onPressOut = {pressHandler}
      android_ripple={{color:"red"}}
    >
      <ImageBackground source= {props.image} style={styles.image} imageStyle={{borderRadius:20}} >
        <Text style={styles.text}> {props.title} </Text>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image:{
    height:150,
    width:100,
    alignItems:"center",
    justifyContent:"center",
    borderWidth:0.1,
    borderRadius:20
  },
  text:{
    fontSize:15,
    fontWeight:"bold",
    color:"white"
  }
})

