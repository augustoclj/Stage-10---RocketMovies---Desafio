import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-height: 56px;
  align-items: center;
  padding: 12px;
  background-color: ${({ theme, isNew}) => isNew ? `transparent` : theme.COLORS.GRAY_300};
  color: ${({ theme, isNew}) => isNew ? theme.COLORS.PINK_100 : theme.COLORS.PINK_100};
  border: ${({isNew}) => isNew ? '2px dashed gray' : 'none'};


  border-radius: 10px;

  > button {
    border: none;
    background: none;
    color: ${({ theme, isNew}) => isNew ? theme.COLORS.PINK_100 : theme.COLORS.PINK_100};
  }

  > input {
    border: none;
    background: transparent;
    color: ${({ theme, isNew}) => isNew ? theme.COLORS.GRAY_100 : theme.WHITE};
    &::placeholder {

    }
  }
`;