import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > textarea{
    height: 275px;
    width: 100%;
    padding: 20px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    resize: none;

    &:placeholder{
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

  }

  svg{
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;