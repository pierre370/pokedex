import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList} from 'react-native';


export default function ResultSearch(prop) {
    const {navigation, route, ...restProps} = prop;

    return (
        <View style={styles.container}>
            <View style={styles.div}>
                <Image style={styles.imgPoke} source={{uri:route.params.img_front}}/>
                <Image style={styles.imgPoke} source={{uri:route.params.img_back}}/>
            </View>
            <Text style={styles.title}>{route.params.name} ️</Text>
            <View style={styles.flexDiv}>
                <View>
                    <Text style={styles.title}>Type </Text>
                    <Text>{route.params.type}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#C1D0F2',
        alignItems: 'center',
        height: '100%'
    },
    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 40
    },
    imgPoke: {
        width: 150,
        height: 150
    },
    title: {
        fontWeight:"bold",
        fontSize:25,
        textAlign:"center",
        marginBottom:20
    },
    flexDiv:{
        flex: 1,
        flexDirection: "row",
    },
});