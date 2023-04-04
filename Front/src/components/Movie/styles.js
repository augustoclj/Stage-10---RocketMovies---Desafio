import styled from "styled-components";


export const Container = styled.div`
  min-width:90%;
  padding: 32px;
  background-color: ${({ theme }) => theme.COLORS.PINK_100_005};
  border-radius: 10px;
  //padding: 22px;
  //padding: 24px 120px 24px 120px;
  margin-bottom: 25px;

  > h2{
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    a{
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-decoration: none;
    }
  }

  p{
    /**Configurações para limitação do tamanho da sinopse do filme em 2 linhas */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* numero de linhas a exibir */
    line-clamp: 2;
    -webkit-box-orient: vertical;


    color: ${({ theme }) => theme.COLORS.GRAY_150};
    font-family: 'Roboto', serif;
    font-weight: 400;
  }

  footer {
    display: flex;
    gap: 8px;
    margin-top: 10px;
    
  }
`;
