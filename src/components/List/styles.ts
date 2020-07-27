import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  height: 400px;
  width: ${width};
  padding-right: 20px;
`;

export const Item = styled.View`
  height: 400px;
  width: 210px;
  margin-right: 22px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #F2F2F2;
`;

export const BannerItem = styled.Image`
  height: 100px;
  width: 210px;
`;

export const ContentItem = styled.View`
  height: 400px;
  width: 210px;

  align-items: center;
`;

export const TitleItem = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #FF5F40;
  padding-top: 16px;
`;

export const TextDate = styled.Text`
  font-size: 14;
  color: #2B2B2B;
`;

export const Info = styled.Text`
  font-size: 14;
  color: #2B2B2B;
  margin-top: 18px;
`;

export const Value = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: #2B2B2B;
`;

export const ContentButton = styled.View`
  height: 80px;
  width: 210px;
  align-items: center;
  justify-content: center;
`;
