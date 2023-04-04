import styled from "styled-components";
import backgroundImg from '../../assets/cinema.jpg'

export const Container = styled.div`
  height: 100vh;
  display:flex;
  align-items: stretch;
`;

export const Form = styled.form`
  width: 630px;
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1{
    width: 100%;
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK_100}
  }

  > p{
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    
  }

  > h2{
    text-align: left;
    width: 100%;
    margin: 48px 0;
  }

  > button {
    margin-top: 24px;
  }

  > a{
    color: ${({ theme }) => theme.COLORS.PINK_100};
    margin-top: 42px;
    text-decoration: none;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;