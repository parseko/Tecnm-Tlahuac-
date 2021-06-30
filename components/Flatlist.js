import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SubjectContainer from './SubjectContainer'
const Flatlist = ({ group }) => {
  
    const renderItem = ({item}) => {
        return <SubjectContainer group={item}/>
    }

    return (
      <FlatList
      data={group}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.id + ''}
      renderItem={renderItem}
      />
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
      width: '100%',

    },
    list:{
      margin: 5,
    }
  });
export default Flatlist;
