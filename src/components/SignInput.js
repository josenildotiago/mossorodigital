import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 55px;
    background-color: #fff;
    flex-direction: row;
    borderColor: #ced4da;
    borderWidth: 1px;
    border-radius: 6px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #212529;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#212529" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#ced4da"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}
