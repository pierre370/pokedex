import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Avatar} from "react-native-elements";

export default function Settings() {

    return (
        <SafeAreaView style={styles.container}>
            <Avatar
                rounded
                containerStyle={{height:150, width:150}}
                source={{
                    uri:'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                }}
                />
            <View style={styles.title}>
                <Button title="dresseur n°1" >dresseur n°1</Button>
            </View>
            <View style={styles.button}>
                <Button title="Modifier mon personnage">Modifier mon personnage</Button>
            </View>
            <View style={styles.button}>
                <Button title="Modifier ma photo de profil">Modifier ma photo de profil</Button>
            </View>
            <View style={styles.button}>
                <Button title="informations personnelles">informations personnelles</Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#C1D0F2',
        alignItems: 'center',
        height: '100%'
    },
    pdp: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        padding: 50,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 100,
    },
    title: {
        marginTop: 20,
        marginBottom: 50,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 50,
    }
});