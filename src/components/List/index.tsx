import React, { useState } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  Item,
  BannerItem,
  ContentItem,
  TitleItem,
  TextDate,
  Info,
  Value,
  ContentButton,
} from './styles';

import Button from './Button'

// import xp from ;
// import rico from ;
// import orama from ;

const List: React.FC= () => {

  const products = [
    {
      id: 1,
      image: './banners/xp.png',
    },
    {
      id: 2,
      image: './banners/rico.png',
    },
    {
      id: 3,
      image: './banners/orama.png',
    },
  ]

  return (
    <Container>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={products}
      renderItem={({ item }) => (
        <Item>
          <ContentItem>
            <BannerItem source={require('./banners/xp.png')} />

            <TitleItem>Renda Fixa</TitleItem>
            <TextDate>Data base: 21/07/2020</TextDate>

            <Info>Aplicação Inicial Mínima</Info>
            <Value>R$ 1.000,00</Value>

            <Info>Performance Mês</Info>
            <Value>0,21%</Value>

            <Info>Performance Ano</Info>
            <Value>-1,33%</Value>

            <ContentButton>
              <Button>Saiba mais</Button>
              <Button>Quero esse</Button>
            </ContentButton>
          </ContentItem>
        </Item>
      )}
      />
    </Container>
  );
};

export default List;
