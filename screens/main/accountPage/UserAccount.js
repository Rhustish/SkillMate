import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'
import userpng from "../../../assets/user.png"
import React from 'react'

const logfnc = () => {

}
const MenuItem = (props) => {
  return (
    <TouchableNativeFeedback
      onPress={props.itemfunc}
    >
      <View style={styles.menuobj}>

        <Text style={styles.menuText}> {props.text} </Text>

      </View>
    </TouchableNativeFeedback>
  )
}

export default function UserAccount(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView} >
        <Image source={userpng} style={styles.image} />
        <Text style={styles.greet}> Hello Bhavy {props.userName} </Text>
        <Text style={styles.greet}> Have a great Day </Text>
      </View>
      <View style={styles.menuList}>
        <MenuItem itemfunc={logfnc} text="Edit Profile" />
        <MenuItem itemfunc={logfnc} text="Account Settings" />
        <MenuItem itemfunc={logfnc} text="Application Settings" />
        <MenuItem itemfunc={logfnc} text="Help & Support" />
        <MenuItem itemfunc={logfnc} text="Log Out" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  imageView: {
    backgroundColor: "#2b2b2b",
    height: "40%",
    width: "100%",
    justifyContent: "space-evenly"
  },
  greet: {
    color: "white",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  image: {
    alignSelf: "center",
    aspectRatio: 1,
    height: 200,
    marginTop: 50
  },
  menuText: {
    color: "white",
    paddingVertical: "7.5%",
    paddingLeft: "5%",
    fontSize: 19
  },
  menuList: {
    width: "95%",
    alignSelf: "center",
    // backgroundColor:"red"
  },
  menuobj: {
    borderBottomColor: "white",
    borderBottomWidth: 1,


  }

})