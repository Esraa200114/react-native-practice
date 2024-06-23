import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: "Sarah Jones",
            status: "Learning react native !",
            imageURL: "https://delaine.tech/wp-content/uploads/2023/02/Mobile-app-1.jpg"
        },
        {
            uid: 2,
            name: "Sam Jones",
            status: "Learning react native !",
            imageURL: "https://delaine.tech/wp-content/uploads/2023/02/Mobile-app-1.jpg"
        },
        {
            uid: 3,
            name: "Noha Jones",
            status: "Learning react native !",
            imageURL: "https://delaine.tech/wp-content/uploads/2023/02/Mobile-app-1.jpg"
        },
        {
            uid: 4,
            name: "Tia Jones",
            status: "Learning react native !",
            imageURL: "https://delaine.tech/wp-content/uploads/2023/02/Mobile-app-1.jpg"
        }
    ]

    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map(({ uid, name, status, imageURL }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image source={{ uri: imageURL }} style={styles.userImage} />
                        <View>
                            <Text style={styles.userName} >{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
        marginBottom: 8
    },
    container: {
        paddingHorizontal: 16,
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        backgroundColor: "#f1f2f6",
        padding: 8,
        borderRadius: 6
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000000"
    },
    userStatus: {
        fontSize: 12,

    }
})