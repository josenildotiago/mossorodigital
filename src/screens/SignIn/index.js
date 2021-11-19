
import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, Alert} from 'react-native';

import {UserContext} from '../../contexts/UserContext';

import {
  Container,
  ContainerArea,
  InputArea,
  CustomButton,
  CitizenButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonCinza,
  SignMessageButtomText,
  SignMessageButtonTextBold,
  CustomButtonCinza,
  TextTitle,
  ContainerAreaCitizen,
} from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

import Api from '../../Api';
import SignInput from '../../components/SignInput';
import ButtonIcon from '../../components/ButtonIcon';
import ButtonIconServ from '../../components/ButtonIconServ';

import LogoPrefeitura from '../../assets/logo.svg';
import EmailIcon from '../../assets/email.svg';
import People from '../../assets/person2.svg';
import Server from '../../assets/file-earmark-person.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  const [emailField, setEmailFild] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (emailField != '' && passwordField != '') {
      let json = await Api.signIn(emailField, passwordField);
      if (json.token) {
        await AsyncStorage.setItem('token', json.token);
        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: json.data.avatar,
          },
          type: 'setName',
          payload: {
            name: json.data.name,
          },
        });
        console.log(json.data.permission);
        if (json.data.permission == 1) {
          navigation.reset({
            routes: [{name: 'MotoTab'}],
          });
        }else{
            navigation.reset({
            routes: [{name: 'Escolha'}],
          });
        }
        
      } else {
        Alert.alert('Mensagem', 'E-mail e/ou senha errados', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
    } else {
      Alert.alert('Mensagem', 'Preencha os campos por favor', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      {/* <LogoPrefeitura width="100%" height="160" /> */}
    <ContainerArea>
    <ContainerAreaCitizen>
    <ButtonIcon
      IconSvg={People}
    />
    <ButtonIconServ
      IconSvg={Server}
    />
    </ContainerAreaCitizen>
    <TextTitle>Acesso de Cidadão</TextTitle>
      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailFild(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>ENTRAR</CustomButtonText>
        </CustomButton>
        <CustomButtonCinza>
          <CustomButtonText>REGISTRAR-SE</CustomButtonText>
        </CustomButtonCinza>
        <CustomButtonCinza>
          <CustomButtonText>ENTRAR COMO VISITANTE</CustomButtonText>
        </CustomButtonCinza>
      </InputArea>
    </ContainerArea>
    </Container>
  );
};