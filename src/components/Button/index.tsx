import React, { useState } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Text } from './styles';

interface IButton extends RectButtonProperties{
  children: string;
}

const Button: React.FC<IButton> = ({ children, ...rest }) => {

  return (
    <Container {...rest}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
