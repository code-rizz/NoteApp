import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';

export const colors = {
    primary: "#000000",
    light: "#4BD5E7",
    dark: "#1ECBE1",
    grey: "#D3D3D3",
    white: "#fff"
}


export const GlobalStyle = createGlobalStyle`
  body, html, div {
    margin: 0;
    padding: 0;
    height: 100%;
  }

`;
export const Bg = styled.div`
align-items: center;
justify-content: center;
background-image: url(${props => props.backgroundImage});
background-size: cover;
background-position: center;
`;

export const ScrollBox = styled(Scrollbars)`
  background: ${colors.white};
  max-height: 300px;
`;

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const Header = styled.h1`
  color: ${colors.primary};
  text-align: center;
  text-transform: capitalize;
  margin-top: 5%;

`;

export const NoteTitle = styled.h2`
font-size: 18px;
color: ${colors.primary} ;
padding: 10px 20px;
`;

export const CategoryList = styled.li`
  display: flex;
  list-style: none;
  padding: auto;
  justify-content:center;
  text-align: center;
`;

export const CategoryListContainer = styled.div`
  box-shadow: 10px 10px ${colors.light};
  opacity: 90%;
  border: 1px solid ${colors.light};
  border-radius: 4px; 
  margin-top:5%;
  margin-bottom:5%;
  background:${colors.white};
  width: 50%;
`;


export const NoteDescription = styled.p`
  font-size: 16px;
  margin: auto;
  color: ${colors.primary} ;
  text-align: center;
`;

export const Input = styled.input`
  font-size: 16px;
  border: none;
  border-radius: 4px;
  border-bottom: 1px solid ${colors.dark};
  background: transparent;
  outline: none;
  height: 30px;
  color: ${colors.primary};
  width: 70%;
  margin-top: auto;
  margin-bottom: auto;
  padding: 10px 20px;
  &::placeholder {
    color: ${colors.grey};
  }
`;

export const Button = styled.button`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  text-align: center;
  border-radius: 50%;
  font-size: 30px;
  cursor: pointer;
  padding: 5px 15px;
  font-weight: 500;
  background:${colors.light};
  color: ${colors.primary};
  margin-top: 5px;
  margin-bottom: 5px;

  &:hover {
    color: ${colors.primary};
    background: ${colors.dark};
  }

`;

export const Loginbutton = styled.button`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  text-align: center;
  border-radius: 4%;
  font-size: 18px;
  cursor: pointer;
  padding: 5px 15px;
  font-weight: 500;
  background:${colors.light};
  color: ${colors.primary};
  margin: auto;
  margin-bottom: 5%;
  margin-top: 5%;

  &:hover {
    color: ${colors.primary};
    background: ${colors.dark};
  }

`;