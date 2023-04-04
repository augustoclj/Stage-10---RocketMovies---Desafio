import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 8px 0 15px 0;

  > svg{
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`;