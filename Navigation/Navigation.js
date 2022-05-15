import Home from "../Screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RechercheScreen from "../Screens/RechercheScreen";
import PokemonDetail from "../Screens/PokemonDetail";
import ResultSearch from '../Screens/ResultSearch';
import Settings from '../Screens/Setting';
import Teams from '../Screens/Teams';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home} options={{ title: 'Accueil' }}/>
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} options={{ title: 'Détails du pokemon' }} />
            <Stack.Screen name="ResultSearch" component={ResultSearch} options={{ title: 'Résultat de la recherche' }} />
        </Stack.Navigator>
    )
}

export default function Navigation(){

    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home-outline'
                                : 'home-outline';
                        } else if (route.name === 'Recherche') {
                            iconName = focused ? 'search' : 'search';
                        } else if (route.name === 'Équipes') {
                            iconName = focused ? 'ios-add' : 'ios-add';
                        } else if (route.name === 'Paramètres') {
                            iconName = focused ? 'settings-outline' : 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'white',
                    tabBarInactiveBackgroundColor: '#EA3D3D',
                })}
            >
                <Tab.Screen options={{title: "Pokedex", headerTintColor: "white", headerStyle: {backgroundColor: "red"} }}
                            name="Home"
                            component={PokemonStack}/>
                <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "red"} }} name="Recherche" component={RechercheScreen}
                />
                <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "red"} }} name="Équipes" component={Teams}/>
                <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "red"} }} name="Paramètres" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}