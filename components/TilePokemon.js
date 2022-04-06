import {FlatList, Text, View,Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {getPokemons} from "../API/pokemonAPI";
import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";

export default function TilePokemon(props) {
    const  {name, url,  ...restprops} = props;

    const [pokemonDatas, setPokemonDatas] = useState([])
    const [pokemonImg, setPokemonImg] = useState(null)

    if(pokemonDatas.length === 0) {
        getPokemons(url).then(data => {
            setPokemonDatas(data)
            setPokemonImg(data.sprites)
        })
    }

    return (
       <View style={styles.block}>
           <StatusBar style="auto" />
           { pokemonImg ? (
               <Image
                   style={styles.Logo}
                   source={{
                       uri: pokemonImg.front_default,
                   }}
               />) : null
           }
           <Text >{name}</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    block: {
        position: "relative",
        width: "30%",
        marginLeft:  4,
        marginBottom:  5, backgroundColor:  '#FAE5D3', borderWidth:  2, justifyContent:  'center',alignItems:  'center',margin: 10,borderRadius: 45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    Logo: {
        flex: 1,
        marginTop: 2,
        marginBottom:  5,
        padding: 50,
        width: "20%",
        height: "20%",


    },
});