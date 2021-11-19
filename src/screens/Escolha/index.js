import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Cardmoto,
  Cardcarro,
  ContainerAreaCitizen,
} from './styles';

import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import LogoPrefeitura from '../../assets/logo.svg';
import Moto from '../../assets/moto.svg';
import Carro from '../../assets/carro.svg';
import People from '../../assets/person2.svg';
import Server from '../../assets/file-earmark-person.svg';
import ButtonIcon from '../../components/ButtonIcon';
import ButtonIconServ from '../../components/ButtonIconServ';

export default () => {
  const navigation = useNavigation();
  return (
<ScrollView>
    <Container>
      <LogoPrefeitura
        style={{zIndex: -1, position: 'absolute', opacity: 0.3}}
      />
      <ContainerAreaCitizen>
        <ButtonIcon
        IconSvg={People}
        />
        <ButtonIconServ
        IconSvg={Server}
        />
      </ContainerAreaCitizen>
    </Container>
    </ScrollView>
  );
};