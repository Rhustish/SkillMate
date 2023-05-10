import { View, StyleSheet, ImageBackground, Image, TextInput, Text, Pressable } from 'react-native'
import authBG from "../../assets/authBG.jpg"
import icon from "../../assets/icon.png"
import React, { useContext, useState , useRef } from 'react'
import UserContext from '../../context/userContext'
import auth from "../../firebaseconfig"
import {  signInWithPhoneNumber , RecaptchaVerifier } from 'firebase/auth'

export default function PhoneAuth() {
  const { updateuid, updateAuthStatus } = useContext(UserContext);
  const [phone, setPhone] = useState(null)
  const [otp, setOTP] = useState(null)
  const [otpsent, setOtpsent] = useState(false)
  const reffer= useRef(null)

  const recaptchaVerifier = new RecaptchaVerifier('reffer', {
    'size': 'invisible',
    'callback': (response) => {
      setOtpsent(true)
      onSignInSubmit();
    }
  }, auth);


  const onSignInSubmit = () => {
    signInWithPhoneNumber(auth, "+91" + phone, recaptchaVerifier)
      .then((result) => {
        updateAuthStatus(true);
        updateuid()
      })
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={authBG} resizeMode="cover" style={styles.bg}>
        <Image source={icon} style={styles.topIcon} />
        <TextInput style={styles.textin} placeholder='Enter Phone Number' onChangeText={setPhone} keyboardType='numeric'
          maxLength={10} />
          <View id='hen' ref={reffer}> </View>
        {otpsent ?
          <View>
            <TextInput style={styles.textin} placeholder='Enter OTP' onChangeText={setOTP} maxLength={10} />
            <Pressable id='sign-in-button' style={styles.button} onPressOut={() => navigation.navigate("Login")}>
              <Text style={styles.buttonText}>{"Verify OTP"}</Text>
            </Pressable>
          </View>
          :
            <Pressable style={styles.button} onPressOut={() => { }}>
              <Text style={styles.buttonText}>{"Send OTP"}</Text>
            </Pressable>
        }
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
  textin: {
    backgroundColor: "white",
    width: "70%",
    height: "6%",
    paddingHorizontal: "5%",
    textAlign: "center",
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,

  },
  button: {
    backgroundColor: "pink",
    marginTop: 3,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: "row",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
  }
});