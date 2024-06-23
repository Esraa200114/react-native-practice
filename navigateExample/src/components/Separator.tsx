import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = () => {
    return (
        <View style={styles.separator}>
        </View>
    )
}

export default Separator

const styles = StyleSheet.create({
    separator: {
        height: 0.8,
        color: "#CAD5E2"
    }
})