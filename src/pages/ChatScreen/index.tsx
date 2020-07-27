import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.disableYellowBox = true;


import { Container } from './styles';

import Chat from '../../components/Chat';

const ChatScreen: React.FC = () => {

  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor='#2B2B2B' />
      <Chat />
    </Container>
  );
};

export default ChatScreen;
