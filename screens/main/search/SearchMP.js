import { View, Text,StyleSheet, TextInput, Button, } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchResult from './SearchResult';
import Showcase from './Showcase';

const submitHandler = (query) => {
  console.log(query);
}

export default function SearchnResult() {
  const [searchText,setSearchText] = useState("")
  const [isSearched, setIsSearched] = useState(false)
  
  return (
    <View style = {styles.container}>
      <Text style={{...styles.browseLabel,marginTop:"10%"}}> Search  </Text>
      <TextInput
      style={styles.searchBox}
      placeholder={`🔍 What are you going to learn`}
      onChangeText={setSearchText}
      value={searchText}
      returnKeyType="search"
      onSubmitEditing= {()=>submitHandler(searchText)}
      />
      <Text style={styles.browseLabel}> Browse  </Text>
      {isSearched? <SearchResult/> : <Showcase />}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    // justifyContent:"center",
    // alignItems:"center",
    backgroundColor:"#000000"
  },
  searchBox:{
    borderWidth:2,
    width:"95%",
    // marginTop:"20%",
    paddingHorizontal:10,
    borderRadius:6,
    height:55,
    borderColor:"white",
    fontSize:20,
    fontWeight:"bold",
    backgroundColor:"#ffffff",
    marginLeft:"2.5%"
  },
  browseLabel:{
    color:"white",
    marginLeft:"2.5%",
    marginVertical:"4%",
    fontSize:20,
    fontWeight:"bold"


  }
})