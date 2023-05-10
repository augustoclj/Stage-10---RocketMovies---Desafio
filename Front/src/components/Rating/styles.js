import styled from "styled-components";

export const Container = styled.div`
  width: 120px;
  margin: 8px 0 15px 12px;
  display: inline-block;

  > svg{
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`;