import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, TextInput } from './styles';

interface ILabel extends TextInputProps {
  label: string;
}

const Input: React.FC<ILabel> = ({ label, ...rest }) => {

  return (
    <Container>
      <Label>{label}</Label>
      <TextInput {...rest} />
    </Container>
  );
};

export default Input;
