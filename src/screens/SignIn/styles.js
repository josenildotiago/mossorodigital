import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView `
    background-color: #023E84;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const ContainerArea = styled.SafeAreaView `
    background-color: #fff;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 90%;
    position: absolute;
`;
export const ContainerAreaCitizen = styled.SafeAreaView `
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View `
    width: 100%;
    padding: 15px;
`;
export const CustomButton = styled.TouchableOpacity `
    height: 45px;
    marginTop: 5px;
    background-color: #023E84;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonCinza = styled.TouchableOpacity `
    height: 45px;
    marginTop: 5px;
    background-color: #6c757d;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;
export const CitizenButton = styled.TouchableOpacity `
    flex-direction: row;
    flex: 1;
    height: 45px;
    margin: 5px;
    padding: 10px;
    background-color: #023E84;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text `
    font-size: 18px;
    color: #FFF;
`;
export const SignMessageButton = styled.TouchableOpacity `
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const SignMessageButtomText = styled.Text `
    font-size: 16px;
    color: #268596;
`;
export const SignMessageButtonTextBold = styled.Text `
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left: 5px;
`;
export const TextTitle = styled.Text `
    justify-content: center;
    align-items: center;
    color: #212529;
    font-weight: bold;
    margin-left: 5px;
    font-size: 17px;
`;