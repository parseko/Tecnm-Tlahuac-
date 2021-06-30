import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const SubjectContainer = ({ group }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{group.subjects}</Text>
      <Icon
        name='angle-right'
        onPress={() => navigation.navigate('Grupos')}
        size={30}
        style={styles.next}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#e5e5e5',
    padding: 20,
    marginVertical: 8,
    borderRadius: 16,
    width: 370,
    height: 150,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: '400',
  },
  next: {
    position: 'absolute',
    paddingLeft: 20,
    top: '55%',
    left: '90%',
  },
});

export default SubjectContainer;
