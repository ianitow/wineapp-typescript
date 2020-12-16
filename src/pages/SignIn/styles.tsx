import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 30px ${Platform.OS === 'android' ? 260 : 40}px;
`;
export const Title = styled.Text`
  font-size: 18px;
  color: #f4ede8;
  font-family: 'Roboto-Regular';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 14px;
  font-family: 'Roboto-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  padding: 16px 0px ${16 + getBottomSpace()}px;
  border-top-width: 1px;
  background-color: #130c25;
  border-color: #1d1238;
  margin-top: 20px;
`;
export const CreateAccountButtonText = styled.Text`
  color: #f4ede8;
  font-size: 14px;
  font-family: 'Roboto-Regular';
  margin-left: 16px;
`;
