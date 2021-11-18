import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {UserContext} from '../contexts/UserContexts';

export default ({state, navigation}) => {
  const {state: user} = useContext(UserContext);
  console.log(user);
  return <Text source={{uri: user.avatar}}>{user.avatar}</Text>;
};
