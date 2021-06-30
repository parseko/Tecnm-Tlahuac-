import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { getSubjects } from '../api';
import Flatlist from '../components/Flatlist';

const Materias = () => {
  const [subjects, setSubjects] = useState([]);

  const loadSubject = async () => {
    const data = await getSubjects();
    setSubjects(data);
  };
  useEffect(() => {
    loadSubject();
  }, []);

  return (
    <View>
      <Flatlist group={subjects}/>
    </View>
  );
};


export default Materias;
