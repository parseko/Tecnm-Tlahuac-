import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './screens/LoginForm';
import firebase from './databases/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Materias from './screens/Materias'
import SubjectsSpecificacion from './screens/SubjectsSpecificacion';

const Stack = createStackNavigator();

class App extends React.Component {
  state = {
    loggedin: null
  }

  componentDidMount() {

    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedin: true
        })
      } else {
        this.setState({
          loggedin: false
        })
      }
    })
  }

  // renderContent = () => {
  //   switch (this.state.loggedin) {
  //     case "SIGN_IN":
  //       return true
  //     case "SIGN_UP":
  //       return false
  //   }
  // }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions ={{headerStyle:{ backgroundColor:"#00b268"}}}>
          {this.state.loggedin == false ? (
            <Stack.Screen name="login" component={LoginForm} options={{headerShown: false}}/>
          ) : (
            <>
              <Stack.Screen name="materias" component={Materias} />
              <Stack.Screen name="especificaciones" component={SubjectsSpecificacion} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;