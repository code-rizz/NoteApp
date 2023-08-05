// SignUpPage.js
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

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add sign-up logic here (e.g., register user with backend)
  };

  return (
    <div>
    <GlobalStyle />
    <Bg backgroundImage={backgroundImage}>
    <NoteContainer>
    <CategoryListContainer>
    <Header>Sign Up</Header>

      <form onSubmit={handleSignUp}>

      <CategoryList>
        <NoteTitle>Email: </NoteTitle>
        <Input
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
        />
        </CategoryList>

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
        Sign Up 
          {/* funtionality to be added */}
        </Loginbutton>
        </CategoryList>

      </form>
      <NoteDescription>
      Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link>
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

export default Signup;
