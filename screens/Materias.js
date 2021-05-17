import React, { useState, useEffect } from 'react'
import { ListItem } from "react-native-elements";
import { TouchableOpacity } from 'react-native'
import { ScrollView, Text } from 'react-native'
import firebase from '../databases/firebase'
import SubjectsSpecificacion from './SubjectsSpecificacion';
import { StyleSheet } from 'react-native';


const Materias = (props) => {
    // const [loading, setLoading] = useState(true);
    const [subjects, setSubjects] = useState([]);


    useEffect(() => {
        firebase.db.collection("materias").onSnapshot((querySnapshot) => {
            const subjects = [];
            querySnapshot.docs.forEach((doc) => {
                const { subject, grade } = doc.data();
                subjects.push({
                    id: doc.id,
                    subject,
                    grade
                });
            });
            setSubjects(subjects);
        });
    }, [])

    return (
        <ScrollView>
            {subjects.map((schedule) => {
                return (
                    <ListItem
                        key={schedule.id}
                        bottomDivider
                        onPress={()=>{
                            props.navigation.navigate("especificaciones")
                        }}
                        style={styles.item}
                    >
                        <ListItem.Content style={styles.subject}>
                            <ListItem.Title style={styles.title}>{schedule.subject}</ListItem.Title>
                            <ListItem.Subtitle>{schedule.grade}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                )
            })}

            <TouchableOpacity onPress={() => firebase.auth.signOut()}><Text>Logout</Text></TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    // list:{
    //     width: 200,
    //     height: 200,

    // },
    item: {
        margin: 10,
        marginBottom: 2,
        
    },
    subject: {
        height:150,
        borderRadius: 200,
        
    },
    title:{
        fontSize:20,
    }
})

export default Materias
