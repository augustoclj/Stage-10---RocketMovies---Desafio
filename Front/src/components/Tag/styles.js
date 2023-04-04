import styled from "styled-components";

export const Container = styled.span`

  font-size: 12px;
  font-family: 'Roboto', serif;
  font-weight: 400;
  text-align: center;
  padding: 10px;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;