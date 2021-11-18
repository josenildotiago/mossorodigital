import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container
} from './styles';

import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

import LogoPrefeitura from '../../assets/logo.svg';

export default () => {
  return (
    <Container>
      <LogoPrefeitura
        style={{zIndex: -1, position: 'absolute', opacity: 0.3}}
      />
    </Container>
  );
};