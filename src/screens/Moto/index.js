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

    const handleSignClick = async () => {
        if (kmsaida != '' && kmentrada != '') {
        //   let json = await Api.signIn(emailField, passwordField);
        const token = await AsyncStorage.getItem('token');
        Alert.alert('Mensagem', 'Salvo com sucesso '+token, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          navigation.reset({
            routes: [{name: 'MainTab'}],
          });
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

    const pickerRef = useRef(null);
    
    const {dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailFild] = useState('');
    const [items, setItems] = useState([]);
    const [buzina, setBuzina] = useState([]);
    
    const [cinto, setCinto] = useState('');
    const [quebrasol, setQuebrasol] = useState('');
    const [portaluvas, setPortaluvas] = useState('');
    const [tocacd, setTocacd] = useState('');
    const [limpador, setLimpador] = useState('');
    const [luzfreio, setLuzfreio] = useState('');
    const [seta, setSeta] = useState('');
    const [piscalerta, setPiscalerta] = useState('');
    const [luzinterna, setLuzinterna] = useState('');
    const [velocimetro, setVelocimetro] = useState('');
    const [macaco, setMacaco] = useState('');
    const [chaveroda, setChaveroda] = useState('');
    const [triangulo, setTriangulo] = useState('');
    const [extintor, setExtintor] = useState('');
    const [parabrisa, setParabrisa] = useState('');
    const [oleomotor, setOleomotor] = useState('');
    const [oleofreio, setOleofreio] = useState('');
    const [nivelagua, setNivelagua] = useState('');
    const [pneu, setPneu] = useState('');
    const [parachoque, setParachoque] = useState('');
    const [lataria, setLataria] = useState('');
    const [tanque, setTanque] = useState('');
    const [cartao, setCartao] = useState('');
    const [parachoqued, setParachoqued] = useState('');
    const [kmsaida, setKmsaida] = useState('');
    const [kmentrada, setKmentrada] = useState('');
    const [outros, setOutros] = useState('');

    const [passwordField, setPasswordField] = useState('');
    const [vtr, setVtr] = useState([]);
    // console.log(setItem);
    const getItemApi = async () => {
        let json = await Api.getItem();
        setItems(json.data);
        const resultado = json.data.map(a => a.name).reduce(function(acumulador, atual){
            // console.log(atual);
            // setItems(acumulador);
            return atual
            
        })
    };
    
    useEffect(() => {
        ref: pickerRef.current;
        getItemApi();
    }, []);
    return (
        <ScrollView>
            <Container>
                <InputArea>
                        {
                        items.map((items, i)=>
                        <View
                        key={i}
                        >
                        <Text
                        key={i}
                        style={{ textTransform: 'uppercase'}}
                        >{items.descricao}</Text>
                        <Picker
                            style={{ 
                                height: 50, 
                                width: '100%', 
                                backgroundColor: '#83D6E3',
                                flexDirection: 'row',
                                borderRadius: 30,
                                paddingLeft: 15,
                                alignItems: 'center',
                                marginBottom: 15,
                                textTransform: 'uppercase'
                            }}
                            mode="dropdown"
                            selectedValue={vtr}
                            key={items.id}
                            onValueChange={(itemValue, itemIndex) => 
                                // this.setState({
                                //     itemValue: items.name
                                // })}
                                
                                // `set`+items.name+`(`+itemValue+`)`
                                // `set${items.name}(${itemValue})`
                                setVtr(itemValue)
                            }>
                            {
                            items.condicoes.split('/')
                            .map((cr, o) =>
                                <Picker.Item key={o} label={cr.charAt(0).toUpperCase() + cr.substring(1)} value={cr} />
                            )
                            }
                        </Picker>
                        </View>
                        )
                    }
                    <Text
                        style={{ textTransform: 'uppercase'}}
                        >KM entrada</Text>
                    <SignInput
                    placeholder="KM da entrada"
                    value={kmentrada}
                    onChangeText={(t) => setKmentrada(t)}
                    />
                    <Text
                        style={{ textTransform: 'uppercase'}}
                        >KM saída</Text>
                    <SignInput
                    placeholder="KM da saída"
                    value={kmsaida}
                    onChangeText={(t) => setKmsaida(t)}
                    />
                    <Text
                        style={{ textTransform: 'uppercase'}}
                        >Outros</Text>
                    <InputAreaT
                    placeholder="Outras informações"
                    value={outros}
                    onChangeText={(t) => setOutros(t)}
                    />
                    <CustomButton onPress={handleSignClick}>
                        <CustomButtonText>CADASTRAR</CustomButtonText>
                    </CustomButton>
                </InputArea>
            </Container>
        </ScrollView>
    );
}