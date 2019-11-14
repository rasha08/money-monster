import React, {useEffect, useLayoutEffect, useState} from 'react';
import { View, Title, TextInput, Text, Button } from '@shoutem/ui';

import { useUserContext } from '../../context/user';
import { useEmailValidator, useStringValidator } from '../../shared/validators';
import { combineStyles } from '../../shared/utils';

import { style } from './styled';
import {borderStyle, textColorStyle, backgroundColorStyle} from "../../shared/styles";
import {usePopupContext} from "../../context/popup";

export const Auth = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFieldError, setEmailValidity] = useState<string | null>(null);
  const [passwordFieldError, setPasswordValidity] = useState<string | null>(
    null
  );
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);

  const validateEmail = useEmailValidator({ label: 'Email', required: true });
  const validatePassword = useStringValidator({
    label: 'Password',
    min: 6,
    required: true
  });

  const { login, register, state: user } = useUserContext();
  const { clearPopup } = usePopupContext()

  const onEmailChange = (value: string): void => {
    setEmail(value ? value.trim() : '');
  };

  const onPasswordChange = (value: string): void => {
    setPassword(value ? value.trim() : '');
  };

  const loginUser = (): void => {
    login(email, password);
  };

  const registerUser = (): void => {
    register(email, password);
  };

  const checkEmailValidity = (): void => {
    setEmailValidity(validateEmail(email));
  };

  const checkPasswordValidity = (): void => {
    setPasswordValidity(validatePassword(password));
  };

  /* eslint-disable */
  useEffect(() => clearPopup, []);

  useLayoutEffect(() => {
    if (user.id) {
      props.navigation.navigate('Dashboard')
    }
  })

  useEffect(() => {
    if (emailFieldError || isLoginEnabled) {
      checkEmailValidity();
    }
  }, [email]);

  useEffect(() => {
    if (passwordFieldError || isLoginEnabled) {
      checkPasswordValidity();
    }
  }, [password]);

  useEffect(() => {
    setIsLoginEnabled(!validatePassword(password) && !validateEmail(email));
  }, [email, password]);
  /* eslint-enable */

  return (
    <View>
      <Title style={style.title}>Login Or Register</Title>
      <TextInput
        placeholder={'Email'}
        onChangeText={onEmailChange}
        onBlur={checkEmailValidity}
        style={combineStyles(
          [style.field],
          [{ [!!emailFieldError]: borderStyle.danger }]
        )}
      />
      <Text style={style.errorText}>{emailFieldError}</Text>
      <TextInput
        placeholder={'Password'}
        secureTextEntry
        onChangeText={onPasswordChange}
        onBlur={checkPasswordValidity}
        style={combineStyles(
          [style.field],
          [{ [!!passwordFieldError]: borderStyle.danger }]
        )}
      />
      <Text style={style.errorText}>{passwordFieldError}</Text>

      <Button
        onPress={loginUser}
        style={combineStyles(
          [style.button],
          [{ [!isLoginEnabled]: backgroundColorStyle.disabled}]
        )}
        disabled={!isLoginEnabled}
      >
        <Text
          style={combineStyles(
            [style.buttonText],
            [{ [!isLoginEnabled]: textColorStyle.muted }]
          )}
        >
          Login
        </Text>
      </Button>

      <Button
        onPress={registerUser}
        disabled={!isLoginEnabled}
        style={combineStyles(
          [style.button, style.registerButton],
          [{ [!isLoginEnabled]: backgroundColorStyle.disabled }]
        )}
      >
        <Text
          style={combineStyles(
            [style.buttonText],
            [{ [!isLoginEnabled]: textColorStyle.muted }]
          )}
        >
          Register
        </Text>
      </Button>
    </View>
  );
};
