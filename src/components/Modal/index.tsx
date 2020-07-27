import React from 'react';
import ModalView from 'react-native-modal';

import { Container, Content } from './styles';

interface IModal {
  visible: boolean;
  onBackButtonPress: any;
}

const Modal: React.FC<IModal> = ({ children, visible, onBackButtonPress }) => {

  return (
    <ModalView
      isVisible={visible}
      onBackButtonPress={onBackButtonPress}
    >
      <Container>
        <Content>
          {children}
        </Content>
      </Container>
    </ModalView>
  );
};

export default Modal;
