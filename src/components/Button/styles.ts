import { Dimensions } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const Container = styled(RectButton)`
  height: 42;
  width: 160px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #FF775B;
`;

export const Text = styled.Text`
  font-size: 14;
  color: #FFF;
`;
