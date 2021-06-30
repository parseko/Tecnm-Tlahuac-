import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import Flatlist from '../components/Flatlist';

const SubjectsSpecificacion = ({ navigation, groups, grupoSeleccionado }) => {
  return (
    <View >
      {groups.map((subject) => (
        <ListItem
          key={subject.id}
          bottomDivider
          style={styles.item}
          onPress={() => grupoSeleccionado(subject)}>
          <ListItem.Content style={styles.subject}>
            <ListItem.Title style={styles.title}>
              {subject.roomClass}
            </ListItem.Title>
            <ListItem.Subtitle>{subject.teacher}</ListItem.Subtitle>
            <ListItem.Subtitle style={styles.schedule}>
              {subject.schedule}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
      <Button
        title='seleccionadas'
        onPress={() => {
          navigation.navigate('Materias Seleccionadas');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ced4da',
  },
  item: {
    margin: 10,
    marginBottom: 2,
  },
  subject: {
    height: 150,
    borderRadius: 200,
  },
  title: {
    fontSize: 20,
  },
  schedule: {
    fontSize: 14,
    paddingTop: 30,
    color: '#212529',
  },
});
const mapStateProps = (state) => ({
  groups: state.groups,
});
const dispatchToProps = (dispacth) => ({
  grupoSeleccionado(materias) {
    dispacth({
      type: 'SELECCIONAR_MATERIA',
      materias,
    });
  },
});
export default connect(mapStateProps, dispatchToProps)(SubjectsSpecificacion);
