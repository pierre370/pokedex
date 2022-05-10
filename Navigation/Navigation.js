import Home from "../Screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RechercheScreen from "../Screens/RechercheScreen";
import PokemonDetail from "../Screens/PokemonDetail";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
        </Stack.Navigator>
    )
}

export default function Navigation(){

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{title: "Pokedex", headerTintColor: "white", headerStyle: {backgroundColor: "red"} }}
                            name="Home"
                            component={PokemonStack}/>
                <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "red"} }} name="Recherche" component={RechercheScreen}
                />
                <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "red"} }} name="Teams" component={Home}/>
                <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "red"} }} name="Profils" component={Home}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}