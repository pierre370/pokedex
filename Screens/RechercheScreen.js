import { Text, TextInput, Button, StyleSheet } from "react-native"
import { useState, useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context"
import {getPokemons} from "../API/pokemonAPI";
import SearchBar from "../components/SearchBar";

export default  function  RechercheScreen(props) {
    const [search, setSearch] = useState("")
    const [isPokemonFound, setIsPokemonFound] = useState(false)
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        if (isPokemonFound) {
            props.navigation.navigate('ResultSearch',{
                itemId: pokemon.id,
                name: pokemon.name,
                img_front: pokemon.sprites.front_default,
                img_back: pokemon.sprites.front_shiny,
                type: pokemon.types[0].type.name,
            })
            setIsPokemonFound(false)
        }
    }, [isPokemonFound])

    return(
        <SafeAreaView style={styles.container}>
            <SearchBar
                searchPhrase={search}
                setSearchPhrase={setSearch}
                clicked={isPokemonFound}
                setClicked={setIsPokemonFound}
                onPress={() => {searchPokemon(search, setPokemon, setIsPokemonFound)}}
            />
            <Button style={styles.button}
                onPress={() => {searchPokemon(search, setPokemon, setIsPokemonFound)}}
                title="Rechercher"
                    color="red"
            />
        </SafeAreaView>
    )
}

const searchPokemon = (pokemonName,setPokemon, isPokemonFound) => {
    getPokemons("https://pokeapi.co/api/v2/pokemon/"+pokemonName.toLowerCase()).then(res => {
        if (res) {
            setPokemon(res)
            isPokemonFound(true)
        }
    })
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#C1D0F2',
        alignItems: 'center',
        height: '100%'
    },
    textInput: {
        width:  '80%',
        backgroundColor: 'lightgrey',
        marginBottom: '5%',
        padding: 15,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
    },
});