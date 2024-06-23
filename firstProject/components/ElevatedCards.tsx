import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView style={styles.container} horizontal={true}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardElevatedText}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardElevatedText}>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardElevatedText}>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardElevatedText}>scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardElevatedText}>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardElevatedText}>😄</Text>
                </View>
            </ScrollView>
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
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 4, 
        margin: 8,
    },
    cardElevatedText: {
        color: "#FFFFFF"
    },
    cardElevated: {
        backgroundColor: "#CAD5E2",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "#333333",
        shadowOpacity: 0.5,
        shadowRadius: 2
    },
})