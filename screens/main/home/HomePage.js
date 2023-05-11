import React from 'react'
import {View , Text , StyleSheet , ImageBackground ,Pressable } from 'react-native'
import rpeg from "../../../assets/home/Rohan.jpeg"
import infoObj , {connectfunc , rejectfunc} from "./infoObj"
export default function HomePage(){
    return(
        <View style={styles.homeContainer}>
            <Text style={styles.title}> SKILLMATE </Text>
            <ImageBackground source={rpeg}  style={styles.img}>
                <View styles={styles.info} > 
                    <Text style={styles.name}>{infoObj.name}</Text>
                    <Text style={styles.otherinfo} > {infoObj.age} </Text>
                    <Text style={styles.otherinfo}> Lives {infoObj.distance} away</Text>
                    <Text style={styles.otherinfo}> Can teach you {infoObj.skills}</Text>
                    <Text style={styles.otherinfo}> Proficiency : {infoObj.proficiency}</Text>
                    <Pressable onPress={connectfunc}>
                        <View style={styles.butv}>
                            <Text style={styles.butt} > Connect </Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={connectfunc}>
                        <View style={{...styles.butv , backgroundColor:"red"}}>
                            <Text style={styles.butt} > Reject </Text>
                        </View>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        backgroundColor:"black",
        alignItems:"center",
        // justifyContent:"flex-end"
    },
    img:{
        height:"100%",
        width:"100%",
    },
    name:{
        color:"white",
        fontSize:45,
        fontWeight:"bold",
        paddingTop:"115%"
    },
    title:{
        color:"#30ffc8",
        fontSize:30,
        paddingTop:"10%",
        paddingBottom:"1%",
        fontWeight:"bold",
        backgroundColor:"#646566",
        width:"100%",
        textAlign:"center"
    },
    otherinfo:{
        color:"white",
        paddingLeft:"3%",
        fontSize:15
    },
    butt:{
        color:"white",
        fontSize:18,
        fontWeight:"bold"
    },
    butv:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#30ffc8",
        padding:"3%",
        margin:"1%",
        borderRadius:3
    }
})
