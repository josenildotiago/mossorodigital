import React, {useState, useContext, useEffect, useRef, userDispatch} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, Alert, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';

import {UserContext} from '../../contexts/UserContext';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtomText,
    SignMessageButtonTextBold,
} from './styles';

import Api from '../../Api';
import SignInput from '../../components/InputKm';
import InputAreaT from '../../components/InputArea';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';


export default () => {

    return (
        <Container>
            <Text>Cidadão</Text>
        </Container>
    );
}