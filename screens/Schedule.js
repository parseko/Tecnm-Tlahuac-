
import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { connect } from 'react-redux';
import FlatlistSubject from '../components/FlatlistSubject'
const Schedule = ({ groupsSelected }) => {
  return (
    <ScrollView>
      {groupsSelected.map((s) => (
        <ListItem key={s.id} bottomDivider >
          <ListItem.Content >
            <ListItem.Title>{s.mater}</ListItem.Title>
            <ListItem.Title >{s.roomClass}</ListItem.Title>
            <ListItem.Subtitle>{s.teacher}</ListItem.Subtitle>
            <ListItem.Subtitle>
              {s.schedule}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );
};
const mapStateProps = (state) => ({
  groupsSelected: state.groupsSelected,
});
const mapDispachtProps = (state) => ({});
export default connect(mapStateProps, mapDispachtProps)(Schedule);
