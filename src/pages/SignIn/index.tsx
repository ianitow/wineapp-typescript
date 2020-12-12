import React from 'react';
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import logoIMG from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoIMG} />
        <Title>Faça seu login</Title>
        <Input name="email" icon="mail" placeholder="Email" />
        <Input name="password" icon="lock" placeholder="Password" />
        <Button>Entrar</Button>
        <ForgotPassword>
          <ForgotPasswordText
            onPress={() => {
              console.log('Clicado');
            }}
          >
            Esqueci minha senha
          </ForgotPasswordText>
        </ForgotPassword>
      </Container>
      <CreateAccountButton>
        <Icon name="log-in" size={20} color="#280886" />
        <CreateAccountButtonText>Criar uma nova conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
