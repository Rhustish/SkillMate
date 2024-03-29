import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./home/HomePage"
import SearchMP from "./search/SearchMP";
import UserAccount from "./accountPage/UserAccount";
import Ionicons from 'react-native-vector-icons/Ionicons';


const BottomTabNav = createBottomTabNavigator();

export default function HomeTabNav(){
    return(
        <BottomTabNav.Navigator
            screenOptions={({route})=>({
                headerShown:false,
                tabBarLabel: ()=>{null},
                tabBarStyle:{
                    backgroundColor: 'rgba(100,101,102,1)',
                    borderTopLeftRadius: 6,
                    borderTopRightRadius:6,
                    overflow:"hidden",
                    position:"absolute"
                },
                tabBarActiveTintColor:"#30ffc8",
                tabBarInactiveTintColor:"#ffffff",
                tabBarIcon: (({focused,color,size})=>{
                    let iconName;
                    if(route.name === "Home"){
                        iconName = focused ? "home" : "home-outline"
                    }
                    if(route.name === "Search"){
                        iconName = focused ? "search" : "search-outline"
                    }
                    if(route.name === "You"){
                        iconName = focused ? "person" : "person-outline"
                    }
                    return <Ionicons name = {iconName} size={size} color={color} />
                })
            })}
            >
            <BottomTabNav.Screen name="Home" component={HomePage} />
            <BottomTabNav.Screen name="Search" component={SearchMP}/>
            <BottomTabNav.Screen name="You" component={UserAccount} />
        </BottomTabNav.Navigator>
    )
}