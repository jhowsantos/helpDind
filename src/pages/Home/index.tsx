import React, { useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title} from './styles';

const Home: React.FC = () => {

  const navigation = useNavigation();

  return(
    <Container>
      <Title> Start App </Title>
    </Container>
  );
}

export default Home;