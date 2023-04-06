import { View, Text, StyleSheet, ImageBackground, Image, Pressable, } from 'react-native'
import authBG from "../../assets/authBG.jpg"
import icon from "../../assets/icon.png"
import googleIco from "../../assets/googleIco.png"
import phoneIco from "../../assets/phoneIco.png"
import React from 'react';

const login = ()=>{
  console.log("login");
}

export default function AuthInit() {

  return (
    <View style={styles.container}>
      <ImageBackground source={authBG} resizeMode="cover" style={styles.bg}>
        <Image source={icon} style={styles.topIcon} />
        <Text style={styles.tnc}>By clicking “Sign in” , you agree with our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy .</Text>
        <View style={styles.buttonList}>
          <Pressable onPressOut={login}>
            <View style={styles.button}>
              <Image source={googleIco} style={styles.inButtonIcon} />
              <Text style={styles.buttonText}>Sign In With Google</Text>
            </View>
          </Pressable>
          <Pressable onPressOut={login}>
            <View style={styles.button} >
              <Image source={phoneIco} style={styles.inButtonIcon} />
              <Text style={styles.buttonText}>Sign In With Phone</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headtext: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  topIcon: {
    height: "40.67%",
    width: "50.04%",
  },
  tnc: {
    color: "white",
    paddingHorizontal: "5%",
    textAlign: "center",
    fontSize: 16
  },
  button: {
    backgroundColor: "white",
    marginTop: 3,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"

  },
  buttonText: {
    width: "70%",
    paddingLeft: "10%",

  },
  buttonList: {
    paddingTop: "10%"
  },
  inButtonIcon: {
    width: 30,
    height: 30,
  }
});