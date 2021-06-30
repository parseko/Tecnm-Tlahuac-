import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './screens/LoginForm';
import firebase from './databases/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Materias from './screens/Materias';
import SubjectsSpecificacion from './screens/SubjectsSpecificacion';
import { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './Initial/store';
import Schedule from './screens/Schedule';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const App = () => {
  const [loggedin, setLoggedin] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedin(true);
      } else {
        setLoggedin(false);
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerStyle: { backgroundColor: '#00b268' } }}>
          {loggedin == false ? (
            <Stack.Screen
              header
              name='login'
              component={LoginForm}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name='materias'
                component={Materias}
                options={{
                  headerRight: () => (
                    <Button
                      color='#000'
                      onPress={() => firebase.auth.signOut()}
                      title='Logout'
                    />
                  ),
                }}
              />
              <Stack.Screen
                name='Grupos'
                component={SubjectsSpecificacion}
                // options={{
                //   headerRight: () => (

                //   ),
                // }}
              />
              <Stack.Screen
                name='Materias Seleccionadas'
                component={Schedule}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
// const styles = StyleSheet.create({
//   buttonLogout: {},
// });

export default App;
