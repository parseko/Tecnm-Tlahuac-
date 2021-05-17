import React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'

const Link = () => {
    return (
        <View style={styles.containerProblem}>
            <Text style={styles.textProblem}>¿Tienes problemas para ingresar?</Text>
            <Text style={styles.textLink} onPress={() => Linking.openURL("https://www.facebook.com/TECNMcampusTlahuac")}>Haz click aqui</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerProblem: {
        marginTop: 'auto',
        marginBottom: 35,
      },
      textProblem: {
        fontSize: 16,
      },
      textLink:{
        fontSize: 14,
        color: '#00b268',
        textAlign: 'center',
        textDecorationLine: 'underline',
      }
})

export default Link