import { Dimensions } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const Container = styled(RectButton)`
  height: 28px;
  width: 120px;
  border-radius: 52px;
  margin-top: 6px;
  align-items: center;
  justify-content: center;
  background-color: #FF775B;
`;

export const Text = styled.Text`
  font-size: 14;
  color: #FFF;
`;
