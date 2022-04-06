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
        width: "30%",
        height: "70%",
        marginLeft:  15,
        marginBottom:  10, backgroundColor:  '#FAE5D3', borderWidth:  2, justifyContent:  'center',alignItems:  'center'
    },
    Logo: {
        width: "140%",
        height: "80%",
    },
});