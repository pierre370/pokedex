import {FlatList, Text, View,Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {getPokemons} from "../API/pokemonAPI";
import React, {useState, useEffect, memo} from "react";
import {StatusBar} from "expo-status-bar";
import PokemonDetail from "../Screens/PokemonDetail";
import RechercheScreen from "../Screens/RechercheScreen";
import {TouchableHighlight} from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';

function TilePokemon(props) {
    const  {name, url, navigation } = props;
    const [pokemonDatas, setPokemonDatas] = useState([])
    const [pokemonImg, setPokemonImg] = useState(null)

    useEffect(() => {
        if (pokemonDatas.length === 0){
            getPokemons(url).then(data => {
                setPokemonDatas(data)
                setPokemonImg(data.sprites.front_default);
            })
        }
    }, [])


    //const navigation = useNavigation();
    const onTouch = () => {
        navigation.navigate('PokemonDetail', {pokemonDatas: pokemonDatas});
    }

    return (
       <View style={styles.block}>
           <StatusBar style="auto" />
           <TouchableOpacity onPress={() => onTouch()}>
           { pokemonImg ? (
               <Image
                   style={styles.Logo}
                   source={{uri: pokemonDatas.sprites.front_default}}
               />) : null
           }
           </TouchableOpacity>
           <Text >{name}</Text>
       </View>
    );
}

export default memo(TilePokemon)


const styles = StyleSheet.create({
    block: {
        position: "relative",
        width: "30%",
        marginLeft:  4,
        marginBottom:  5, backgroundColor:  '#FAE5D3', borderWidth:  2, justifyContent:  'center',alignItems:  'center',margin: 10,borderRadius: 40,
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
        flex: 0.01,
        marginTop: 2,
        marginBottom:  5,
        padding: 50,
        width: "20%",
        height: "20%",
    },
});