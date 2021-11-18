import React, { useEffect, useContext } from 'react';
import {Text} from 'react-native';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../contexts/UserContext';
import Api from '../../Api';

import PrefLogo from '../../assets/brasao_pmm.svg';

export default () => {
    const {dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token !== null) {
            let res = await Api.checkToken(token);
    
            if (res.token) {
                await AsyncStorage.setItem('token', res.token);
                userDispatch({
                type: 'setAvatar',
                payload: {
                    avatar: res.data.avatar,
                },
                });
                // console.log(res);
                navigation.reset({
                routes: [{name: 'Escolha'}],
                });
            } else {
                navigation.navigate('SignIn');
            }
            } else {
            navigation.navigate('SignIn');
            }
        };
    checkToken();
    }, []);
    return (
        <Container>
            <PrefLogo width="100%" height="200" />
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}