import React, {useContext} from 'react';
import styled from 'styled-components/native';

import {UserContext} from '../contexts/UserContext';

import HomeIcon from '../assets/home.svg';
import BackIcon from '../assets/left.svg';
import HouseIcon from '../assets/house.svg';
import PersonIcon from '../assets/person.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import WorkSpace from '../assets/person-workspace.svg';
import MegaPhone from '../assets/megaphone.svg';
import Question from '../assets/question-circle.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
  height: 55px;
  background-color: #023E84;
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
        <HouseIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItem>
        <WorkSpace
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItem>
        <MegaPhone
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItem>
        <Question
          style={{opacity: state.index === 0 ? 1 : 0.1}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
    </TabArea>
  );
};