import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Cardmoto,
  Cardcarro
} from './styles';

import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import LogoPrefeitura from '../../assets/logo.svg';
import Moto from '../../assets/moto.svg';
import Carro from '../../assets/carro.svg';

export default () => {
  const navigation = useNavigation();
  return (
<ScrollView>
    <Container>
      <LogoPrefeitura
        style={{zIndex: -1, position: 'absolute', opacity: 0.3}}
      />

      <Cardcarro
      onPress={()=>{
        navigation.push('MotoTab');
      }}
      >
        <Carro
          style={{ width: '100%', height: 150}}
        />
      </Cardcarro>
      
      <Cardmoto>
      <Moto
        style={{ width: '100%', height: 150}}
      />
      </Cardmoto>
      
      <Cardcarro>
      <Carro
        style={{ width: '100%', height: 150}}
      />
      </Cardcarro>
    </Container>
    </ScrollView>
  );
};