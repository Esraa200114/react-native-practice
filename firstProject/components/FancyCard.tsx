import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{ uri: "https://as1.ftcdn.net/v2/jpg/01/64/71/28/1000_F_164712882_lIboENyPyVoc1Fk0SIlNMLKHbWPqGVKr.jpg" }} style={styles.cardImage} height={180} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Friendly Cat</Text>
                    <Text style={styles.cardLabel}>Are you a cat person?</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, expedita itaque fugiat maxime facilis quibusdam! Nemo maxime incidunt quod eveniet atque hic, consequuntur odio magni minus sapiente, fugiat cum similique?</Text>
                    <Text style={styles.cardFooter}>Read More</Text>
                </View>
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
    card: {
        width: 330,
        height: 470,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: "#1e272e",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4
    },
    cardLabel: {
        color: "#FFFFFF",
        fontSize: 18,
        marginBottom: 6
    },
    cardDescription: {
        color: "#FFFFFF",
        fontSize: 16,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: "#FFFFFF", 
        fontSize: 12
    },
})