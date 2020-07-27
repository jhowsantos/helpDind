import React, { useState } from 'react';
import ChatBot from 'react-native-chatbot-expo';
import { CheckBox } from 'react-native-elements'

import { Container, Header, Image, InfoText, ContainerCheck } from './styles';
import { Feather as Icon } from '@expo/vector-icons';

import Modal from '../../components/Modal';

import Input from '../../components/Input';
import Button from '../../components/Button';
import List from '../../components/List';
import Result from '../../components/Result';

const Chat: React.FC = (props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const steps = [
    {
      id: '0',
      message: 'Olá, ;) eu sou o Din. Serei seu guia para o mundo dos investimentos.',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Vou te perguntar algumas informações e logo terei opções de investimento que se encaixam no seu perfil. Antes de mais nada, qual o seu nome?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: ({ value, steps }: any) => {
        setName(value);
       return "3"
     }
    },
    {
      id: '3',
      message:
        `Olá {previousValue}. Estou muito feliz em ter você aqui. Qual o seu objetivo com investimento`,
      trigger: '4',
    },
    {
      id: '4',
      options: [
        {
          value: 'Aumento de Patrimônio',
          label: 'Aumento de Patrimônio',
          trigger: '5',
        },
        {
          value: 'Comprar um carro novo',
          label: 'Comprar um carro novo',
          trigger: '5',
        },
        {
          value: 'Comprar uma casa nova',
          label: 'Comprar uma casa nova',
          trigger: '5',
        },
        {
          value: 'Estudos',
          label: 'Estudos',
          trigger: '5',
        },
        {
          value: 'Fazer uma viagem',
          label: 'Fazer uma viagem',
          trigger: '5',
        },
        {
          value: 'Outro',
          label: 'Outro',
          trigger: '5',
        },
      ],
    },
    {
      id: '5',
      message: 'Para identificar melhor o seu perfil, preciso analisar os seus dados bancários.',
      trigger: '6',
    },
    {
      id: '6',
      message: 'Em cumprimento a LGPD (Lei Geral de Proteção de Dados), informamos que todas as informações aqui informadas serão mantidas em sigilo de acordo com sua autorização. Para saber mais leia aqui.',
      trigger: '7',
    },
    {
      id: '7',
      message: 'realizando acesso ...',
      trigger: () => {
          setVisible(true);
         return "8"
       }
    },
    {
      id: '8',
      user: true,
      trigger: '9'
    },
    {
      id: '9',
      message: `Breno, encontrei estes bancos abaixo cadastrado com seus dados. Selecione um ou mais para que eu faça sua análise.`,
      trigger: '10'
    },
    {
      id: '10',
      options: [
        {
          value: 'BANCO 1',
          label: 'BANCO 1',
          trigger: '11',
        },
        {
          value: 'BANCO 2',
          label: 'BANCO 2',
          trigger: '11',
        },
        {
          value: 'BANCO 3',
          label: 'BANCO 3',
          trigger: '11',
        },
      ],
    },
    {
      id: '11',
      message: `Além da Poupança você possui outro tipo de investimento?`,
      trigger: '12'
    },
    {
      id: '12',
      user: true,
      trigger: '13'
    },
    {
      id: '13',
      message: `Qual o prazo estimado para atingir o objetivo do seu investimento`,
      trigger: '14'
    },
    {
      id: '14',
      options: [
        {
          value: '6 meses',
          label: '6 meses',
          trigger: '15',
        },
        {
          value: '1 ano',
          label: '1 ano',
          trigger: '15',
        },
        {
          value: '2 anos',
          label: '2 anos',
          trigger: '15',
        },
        {
          value: '3 anos',
          label: '3 anos',
          trigger: '15',
        },
        {
          value: '4 anos',
          label: '4 anos',
          trigger: '15',
        },
        {
          value: '5 anos',
          label: '5 anos',
          trigger: '15',
        },
        {
          value: 'Outro',
          label: 'Outro',
          trigger: '15',
        },
      ],
    },
    {
      id: '15',
      message: `Quanto você estaria disposto a investir agora?`,
      trigger: '16'
    },
    {
      id: '16',
      user: true,
      trigger: '17'
    },
    {
      id: '17',
      message: `Quanto você pode investir por mês?`,
      trigger: '18'
    },
    {
      id: '18',
      user: true,
      trigger: '19'
    },
    {
      id: '19',
      message: `Com base nos seus dados, identifiquei que você se enquadra no perfil Aprendiz. Você sabe que investir é importante, mas que esse mundo é complexo. Quer começar com a certeza de que está no caminho certo e de que está fazendo o melhor pelo seu dinheiro.`,
      trigger: '20'
    },
    {
      id: '20',
      message: `Veja os tipos de investimento que encontrei para você:`,
      trigger: '21'
    },
    {
      id: '21',
      component: (
        <List />
      ),
      trigger: '22'
    },
    {
      id: '22',
      user: true,
      trigger: '23'
    },
    {
      id: '23',
      message: `Ótima escolha! Espero ter ajudado.`,
      trigger: '24'
    },
    {
      id: '24',
      message: `A partir de agora eu posso te dar dicas de finanças. O que acha?`,
      trigger: '25'
    },
    {
      id: '25',
      user: true,
      trigger: '26'
    },
    {
      id: '26',
      message: `Você tem o costume de fazer uma reserva dentro da propria conta corrente, mas sabia que investindo vc pode realizar seus sonhos mais rapido? #DicaDoDin`,
      trigger: '27'
    },
    {
      id: '27',
      component: (
        <Result />
      ),
      end: true
    },
  ];


  const handleLogin = () => {
    alert('fechar modal')
    setVisible(false);
  }

  return (
    <Container>
      <ChatBot
        steps={steps}
        placeholder='Fale com o Din'
        useNativeDriver={true}
        headerComponent={
          <Header>
            <Image source={require('../../assets/logo.png')} />
          </Header>
        }
        hideBotAvatar
        hideUserAvatar
        bubbleStyle={{
          backgroundColor: '#FF775B',
          marginTop: 10,
          marginLeft: 20,
          borderRadius: 10
        }}
        userBubbleStyle={{
          backgroundColor: '#FF5D3C',
          marginTop: 10,
          marginRight: 20,
          borderRadius: 10
        }}
        userFontColor='#FFF'
        optionStyle={{
          backgroundColor: '#FF775B',
          width: '80%',
          borderRadius: 5
        }}
        optionBubbleColor='#FF775B'
        inputStyle={{
          width: '75%',
          marginBottom: 24,
          backgroundColor: '#FFF',
        }}
        submitButtonStyle={{
          borderWidth: 0,
          backgroundColor: '#FFF',
      }}
        submitButtonContent={<Icon name='send' style={{ color: '#24A19C'}} size={30} />}
      />

      <Modal onBackButtonPress={() => setVisible(false)} visible={visible}>
        <Input
          label='Login'
          autoCorrect={false}
          autoCapitalize='none'
        />
        <Input
          label='Senha'
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={true}
        />

        <ContainerCheck>
          <CheckBox
            containerStyle={{
              borderColor: '#000'
            }}
            checked={checked}
            onPress={() => setChecked(true)}
          />
          <InfoText>Autorizo que HelpDin acesse meus dados bancários</InfoText>
        </ContainerCheck>
        <Button onPress={handleLogin}>Login</Button>
      </Modal>

    </Container>
  );
};

export default Chat;
