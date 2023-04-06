import React from 'react'
import {View , Text , StyleSheet } from 'react-native'

export default function HomePage(){
    return(
        <View style={styles.homeContainer}>
            <Text> home </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer:{
        flex:1
    }
})
