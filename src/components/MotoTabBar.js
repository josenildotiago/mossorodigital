import React, {useContext} from 'react';
import styled from 'styled-components/native';

import {UserContext} from '../contexts/UserContext';

import HomeIcon from '../assets/home.svg';
import BackIcon from '../assets/left.svg';
import PersonIcon from '../assets/person.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
  height: 60px;
  background-color: #4eadbe;
  flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #4eadbe;
  margin-top: -20px;
`;
const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export default ({state, navigation}) => {
  const {state: user} = useContext(UserContext);
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  console.log(user);
  return (
    <TabArea>
      <TabItem onPress={() => navigation.push('Escolha')}>
        <BackIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItem onPress={() => navigation.push('MainTab')}>
        <PersonIcon
          style={{opacity: state.index === 0 ? 1 : 0.1}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
    </TabArea>
  );
};