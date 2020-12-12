import React from 'react';
import {
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import logoIMG from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToLogin, BackToLoginButtonText } from './styles';

const SignUp: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoIMG} />
            <View>
              <Title>Faça seu login</Title>
            </View>
            <Input name="name" icon="user" placeholder="Nome" />

            <Input name="email" icon="mail" placeholder="Email" />
            <Input name="password" icon="lock" placeholder="Password" />
            <Button>Entrar</Button>
          </Container>
        </ScrollView>
        <BackToLogin>
          <Icon name="arrow-left" size={20} color="#f4ede8" />
          <BackToLoginButtonText>Voltar para login</BackToLoginButtonText>
        </BackToLogin>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
