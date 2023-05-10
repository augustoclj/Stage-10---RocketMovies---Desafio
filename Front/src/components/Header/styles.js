import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;
  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.HEADER_BORDER};

  display: flex;
  gap: 64px;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;

  > h1{
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  >div{
    display: flex;
    flex-direction: column;
    align-items: flex-end
  }

  button{
      position: relative;
      margin-top: -20px;
      margin-right: 65px;
      height: auto;
      width: 30px;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      background-color: transparent;
    }

`;

export const Profile = styled(Link)`

  display: flex;
  align-items: center;
  gap: 8px;

  > img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.HEADER_BORDER};
  }

    span{

      //limite caracteres nome
      max-width: 30ch;
      overflow: hidden;
      text-overflow: none;
      white-space: nowrap;

      min-width: 130px;
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: right;
    }

`;