import React from 'react';
import styled from 'styled-components/native';

export const CustomButtonText = styled.Text `
    font-size: 18px;
    color: #FFF;
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

export default ({IconSvg}) => {
    return (
        <CitizenButton>
            <IconSvg width="20" height="20" fill="#fff" />
            <CustomButtonText
                style={{}}
            > SERVIDOR</CustomButtonText>
        </CitizenButton>
    );
}
