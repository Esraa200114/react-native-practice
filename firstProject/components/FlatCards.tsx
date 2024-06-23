import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}><Text style={styles.cardText}>🥳</Text></View>
                <View style={[styles.card, styles.cardTwo]}><Text style={styles.cardText}>😇</Text></View>
                <View style={[styles.card, styles.cardThree]}><Text style={styles.cardText}>😀</Text></View>
                <View style={[styles.card, styles.cardOne]}><Text style={styles.cardText}>👩🏻‍💻</Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardText: {
        color: "white",
        fontSize: 24,
    },
    cardOne: {
        backgroundColor: "#EF5354",
    },
    cardTwo: {
        backgroundColor: "#50DBB4",
    },
    cardThree: {
        backgroundColor: "#5DA3FA",
    },
})