import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  height: ${height};
  width: ${width};
  margin: 0px;
  padding: 0px;
  position: absolute;
  background-color: #FFF;
`;

export const Header = styled.View`
  background-color: #2B2B2B;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 160px;
  height: 52;
`;

