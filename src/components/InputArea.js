import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 100px;
    background-color: #83D6E3;
    flex-direction: row;
    padding: 5px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 18px;
    color: #096375;
    margin-left: 10px;
`;

export default ({placeholder, value, onChangeText}) => {
    return (
        <InputArea>
            <Input
            
                multiline={true}
                numberOfLines={4}
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangeText}
            />
        </InputArea>
    );
}