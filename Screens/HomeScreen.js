import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image,FlatList, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import {getPokemons} from "../API/pokemonAPI";
import TilePokemon from "../components/TilePokemon";

function HomeScreen({navigation}) {

    const [listPokemon, setListPokemon] = useState([]);
    const [nextPage,setNextPage] = useState("https://pokeapi.co/api/v2/pokemon")

    useEffect(() => {
        loadPokemon(nextPage)
    },[])

    const loadPokemon = (url) => {
        getPokemons(url).then(datas => {
            setListPokemon([...listPokemon, ...datas.results])
            setNextPage(datas.next)
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <FlatList
                numColumns={3}
                data={listPokemon}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => <TilePokemon navigation={navigation}  name={item.name} url={item.url} /> }
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    loadPokemon(nextPage)
                }} />
        </View>
    );
}
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C1D0F2',
        alignItems: 'center',
    },
});
