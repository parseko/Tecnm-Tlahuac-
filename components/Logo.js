import React from 'react'
import { StyleSheet,  View, Image } from 'react-native'

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.image}/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    image:{
        height: 100,
        width: 160,
        marginTop: 150,
    },
})
export default Logo