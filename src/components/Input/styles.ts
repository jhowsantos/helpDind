import { Dimensions } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const Container = styled(RectButton)`
  height: 56px;
  width: 260px;
  margin-top: 5px;
`;

export const Label = styled.Text`
  font-size: 14;
  color: #FFF;
`;

export const TextInput = styled.TextInput`
  height: 42px;
  width: 260px;
  border-radius: 4px;
  background-color: #F2F2F2;
  padding-left: 5px;
`;
