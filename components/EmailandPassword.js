import React, { Component } from 'react'
import { StyleSheet, Alert, Text, View, TextInput, TouchableOpacity } from 'react-native'
import firebase from '../databases/firebase';

class EmailandPassword extends Component {
    state = {
        email: '',
        password: '',
        error: 'EL correo o la contraseña son incorrectos'
    }
    onBottomPress = () => {

        firebase.auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSuccess)
            .catch(() => {
                this.setState(Alert.alert(this.state.error))
            })
    }
    onLoginSuccess = () => {
        this.setState({
            error: '',
            loading: false
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input1}
                    placeholder="Email Institucional"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput style={styles.input2}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={this.onBottomPress} style={styles.button}><Text style={styles.buttonText}>Iniciar Sesión</Text></TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input1: {
        borderColor: '#00b268',
        height: 40,
        width: 320,
        textAlign: 'center',
        marginBottom: 15,
        borderRadius: 50,
        borderWidth: 1,
    },
    input2: {
        borderColor: '#00b268',
        height: 40,
        width: 320,
        textAlign: 'center',
        marginBottom: 15,
        borderRadius: 50,
        borderWidth: 1,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00b268',
        padding: 10,
        marginTop: 10,
        width: 250,
        borderRadius: 50,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },

})

export default EmailandPassword