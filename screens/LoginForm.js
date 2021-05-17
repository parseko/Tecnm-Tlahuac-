import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import Logo from '../components/Logo';
import EmailandPassword from '../components/EmailandPassword';
import Link from '../components/Link';

const LoginForm = () => {
    return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                <View style={styles.emailAndPassword}>
                    <EmailandPassword />
                </View>
                <View style={styles.link}>
                    <Link/>
                </View>
            </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emailAndPassword: {
        flex: 2,

    },
    link: {
        alignItems:'center',
        marginBottom: 15
    }
})
export default LoginForm;