// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component here

import {
    FooterHeadContainer,
    FooterHeadText,
    Header,
    NoteTitle,
    CategoryList,
    Loginbutton,
    Input,
    Bg,
    CategoryListContainer,
    NoteContainer,
    GlobalStyle,
    NoteDescription
} from '../styles';
import backgroundImage from '../bg-image.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., authentication with backend)
  };

  return (    
    <div>
    <GlobalStyle />
    <Bg backgroundImage={backgroundImage}>
    <NoteContainer>
    <CategoryListContainer>
    <Header>Login</Header>

      <form onSubmit={handleLogin}>
        <CategoryList>
        <NoteTitle>Username: </NoteTitle>
        <Input
                name="username"
                type="text"
                label="Username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
        </CategoryList>

        <CategoryList>
        <NoteTitle>Password: </NoteTitle>
        <Input
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
        />
        </CategoryList>

        <CategoryList>
        <Loginbutton type="submit"> 
        Log In 
          {/* funtionality to be added */}
        </Loginbutton>
        </CategoryList>

      </form>
      <NoteDescription>
        Don't have an account? <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up!</Link>
      </NoteDescription>

      </CategoryListContainer>
      
      <FooterHeadContainer>
            <FooterHeadText>
                Note App - Made by Team Coderizz
            </FooterHeadText>
        </FooterHeadContainer>
      </NoteContainer>

      </Bg>
    </div>
  );
};

export default Login;
