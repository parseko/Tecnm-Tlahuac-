const API = 'http://192.168.0.7:3000/subject';

export const getSubjects = async () => {
  const res = await fetch(API);
  return await res.json();
};
