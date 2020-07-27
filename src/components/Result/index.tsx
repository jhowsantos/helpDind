import React, { useState } from 'react';
import { Image } from 'react-native';

import { Container, Content, Title, SubTitle } from './styles';

import Button from './Button'

const Result: React.FC = () => {

  return (
    <Container>
      <Image source={require('../../assets/kindle.png')} style={{ width: 90, height: 90 }} />
      <Content>
        <Title>eBook do Din</Title>
        <SubTitle>Aprenda a controlar seus gastos e finanças</SubTitle>

        <Button>Baixe agora</Button>
      </Content>
    </Container>
  );
};

export default Result;
