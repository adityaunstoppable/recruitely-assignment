import React, { useState } from 'react';
import {
  TextInput,
  Button,
  Container,
  Title,
  Text,
  BackgroundImage,
  Center,
} from '@mantine/core';
import { AUTH_PATH_BG, COMPANIES_LIST_PATH } from '../utils/constants';
import { BG_IMAGE_STYLE, BUTTON_STYLE, CENTER_STYLE, CONTAINER_STYLES, ERROR_TEXT_STYLE, TEXT_INPUT_STYLE, TITLE_STYLE, TITLE_STYLE_ALT } from '../utils/style';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => { 
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username === 'admin' && password === 'password123') {
      onLogin();
      setError(null);
    } else {
      setError('Invalid credentials');
    }
  };

  const onLogin = () => {
    dispatch(addUser({username, password}))
    navigate(COMPANIES_LIST_PATH)
  }

  return (
    <BackgroundImage
      src={AUTH_PATH_BG} 
      style={BG_IMAGE_STYLE} 
    >
      <Center style={CENTER_STYLE}>
        <Container
          style={CONTAINER_STYLES}
        >
          <Text align="center" style={TITLE_STYLE_ALT}>Made by Aditya Verma</Text>
          <Text align="center" style={TITLE_STYLE}>Login</Text>
          <TextInput
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            mb="xl"
            styles={TEXT_INPUT_STYLE}
          />

          <TextInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb="lg"
            styles={TEXT_INPUT_STYLE}
          />
          {error && <Text style={ERROR_TEXT_STYLE} align="center" mb="lg">{error}</Text>}
          <Button onClick={handleLogin} style={BUTTON_STYLE}>
            Submit
          </Button>
        </Container>
      </Center>
    </BackgroundImage>
  );
};

export default AuthPage;
