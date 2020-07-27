import { Dimensions } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const Container = styled(RectButton)`
  height: 126px;
  width: 320px;
  flex-direction: row;
  background-color: #6EBFB5;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 200px;
  padding-left: 10px;
  background-color: #6EBFB5;
`;

export const Title = styled.Text`
  font-size: 22;
  font-weight: bold;
  color: #FFF;
`;

export const SubTitle = styled.Text`
  font-size: 14;
  color: #FFF;
`;
