import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  height: 270px;
  width: 320px;
  align-items: center;
  justify-content: space-around;
  position: relative;
  border-radius: 5px;
  background-color: #6EBFB5;
`;
