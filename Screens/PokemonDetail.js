import {View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import React, {useEffect} from "react";
import {getPokemons} from "../API/pokemonAPI";
import {storeData, retrieveData, eraseData} from '../API/Storage';
import Ionicons from '@expo/vector-icons/Ionicons';


export  default function PokemonDetail(props) {

    const {route, ...restProps} = props;
    const datas = route.params.pokemonDatas
    const spriteFront = datas.sprites.front_default;
    const shinyFront = datas.sprites.front_shiny;
    const namePokemon = datas.name;
    const typesPokemon = datas.types;
    const skillsPokemon = datas.abilities;
    const types = [];
    const skills = [];

    const addPokemon = () => {
        retrieveData('myTeam').then((data) => {
            data = data ? JSON.parse(data) : []
            const newTeam = data.concat([route.params.pokemonDatas])
            storeData('myTeam', JSON.stringify(newTeam))
        })
    }

    typesPokemon.forEach((data) => {
        types.push(<Text style={{textAlign:"center"}} key={data.type.name}>{data.type.name}</Text>)
    })

    skillsPokemon.forEach((data) => {
        skills.push(<Text style={{textAlign:"center"}} key={data.ability.name}>{data.ability.name}</Text>)
    })
    return(
        <View style={styles.container}>
            <Text style={styles.namePokemon}>{namePokemon}</Text>
            <View style={styles.flexDiv}>
                <Image style={styles.image} source={{uri : spriteFront}}/>
                <Image style={styles.image} source={{uri : shinyFront}}/>
            </View>
            <TouchableOpacity onPress={()=>{addPokemon()}}>
                <Ionicons name="add-circle" size={32} color="red" />
            </TouchableOpacity>
            <View style={styles.flexDiv}>
                <View>
                    <Text style={styles.titre}>Types </Text>
                    {types}
                </View>
                <View style={{marginLeft: 50}}>
                    <Text style={styles.titre}>Abilities</Text>
                    {skills}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        position: "relative",
        width: "40%",
        height: "70%",
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
    flexDiv:{
        flex: 1,
        flexDirection: "row",
    },
    type:{
        textAlign:"center"
    },
    titre:{
        fontWeight:"bold",
        fontSize:25,
        textAlign:"center",
        marginBottom:20
    },
    namePokemon:{
        textAlign:"center",
        marginTop:20,
        textTransform:"uppercase",
        fontWeight:"bold",
        fontSize:25
    },
    container: {
        flex: 1,
        backgroundColor: '#C1D0F2',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
