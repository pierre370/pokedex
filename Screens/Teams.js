import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import {eraseData, retrieveData} from '../API/Storage';
import {getPokemons} from "../API/pokemonAPI";


export default function MyTeam(props){

    const { navigation,  ...restProps } = props
    const [listPokemon, setListPokemon] = useState([])

    useEffect(()=>{
        props.navigation.addListener('focus', () => {
            retrieveData('myTeam').then(data => {
                if(data){
                    setListPokemon(JSON.parse(data))
                }
            })
        })
    },[])

    const releasePokemon = ()=>{
        setListPokemon([])
        eraseData('myTeam')
    }

    // erase one pokemon from the list
    const removePokemon = (pokemon)=>{
        let newList = listPokemon.filter(p => p.id !== pokemon.id)
        setListPokemon(newList)
        eraseData('myTeam').then(()=>{
            retrieveData('myTeam').then(data => {
                if(data){
                    setListPokemon(JSON.parse(data))
                }
            })
        })
    }


    const renderItem = ({ item}) => {
        return (
            <View style={styles.block}>
                <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', {
                    pokemonDatas: item,
                })}>
                    <Image style={styles.imgCard} source={{uri:item.sprites.front_default}} />
                    <Text>{item.name}</Text>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={()=>removePokemon(item)}>
                        <Image
                            source={require('../assets/open-pokeball.png')}
                            style={{width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                listPokemon.length > 0 ?
                    <View >

                        <FlatList
                            horizontal={false}
                            numColumns={2}
                            data={listPokemon}
                            key={(item,index)=>index.toString()}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.name}
                        />
                    </View>
                    :
                    <View style={styles.nope}>
                        <Text>Aucun Pokemon capturer</Text>
                        <Image
                            source={require('../assets/pikachu-pokemon.gif')}
                            style={{width: 140, height: 120 }}
                        />

                    </View>
            }
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C1D0F2',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    imgCard: {
        width: 100,
        height: 100,
    },
    block: {
        margin: 10,
        width: 'auto',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:  '#FAE5D3',
        borderRadius: 40,
        marginTop: 15,
        borderWidth:  2,
    },

    touchable: {
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderRadius: 5
    },
    relacher: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f00',
        borderRadius: 5,
        padding: 5
    },
    nope: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

});