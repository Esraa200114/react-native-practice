import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in JavaScript 21 - ES12
                    </Text>
                </View>
                <Image source={{ uri: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*bthRXJ_FBspSEijOWIRM2A.png" }}
                    style={styles.cardImage}></Image>
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus dolor deleniti sequi earum magni architecto cum aliquid reprehenderit nulla totam quam, expedita veritatis, exercitationem quas minima voluptatem eveniet commodi.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite("https://www.google.com/")}>
                        <Text style={styles.socialLinks}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite("https://www.youtube.com/")}>
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
    },
    card: {
        width: 330,
        height: 340,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: "#ffd32a",
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.5
    },
    headingContainer: {
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "600"
    },
    cardImage: {
        height: 150
    },
    bodyContainer: {
        padding: 10, 

    },
    footerContainer: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    socialLinks: {
        fontSize: 16,
        color: "#000000",
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 6
    }
})