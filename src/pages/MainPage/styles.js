import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 110px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Form = styled.div`
  width: 100%;
  max-width: 583px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 54px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.white};


  &::placeholder {
    color: ${(props) => props.theme.colors.metalDark};
    font-style: italic;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  height: 54px;
  border: 3px solid ${(props) => props.theme.colors.white};
  transition: background 0.3s;
  color: ${(props) => props.theme.colors.white};


  &:hover {
    background: ${(props) => props.theme.colors.container};
  }
`;
