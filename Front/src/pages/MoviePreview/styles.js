import styled from "styled-components";

export const Container = styled.div`

  
`;

export const GoBack = styled.div`

  padding: 0 90px;
    a{
      width:100%;
      display:flex;
      align-items: center;
      margin: 40px 0 24px 0;
      color: ${({ theme }) => theme.COLORS.PINK_100}
    }
    svg{
      margin-right: 8px;
    }

`;

export const MovieDetails = styled.div`
  overflow-y: auto;
  max-height: 700px;
  width: 95%;
  padding: 0 18px 0 90px;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-template-areas:
  "title rating"
  "info info"
  "tags tags"
  "description description"
  ;


  > h2 {
    grid-area: title;
    width: 100%;
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    margin-right: 20px;
  }

  > div:nth-child(2){
    grid-area: rating;
    padding-top: 8px;
    margin: 0;
    font-size: 22px;
  }

  p{
    grid-area: description;
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
  }

`;

export const PostInformation = styled.div`
  grid-area: info;
  display:flex;
  align-items: center;
  margin-top: 25px;
  > img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.HEADER_BORDER};
  }
  > svg {
    margin: 0 8px;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`;

export const Genres = styled.div`
  width:100%;
  margin: 40px 0;
  display: flex;
  gap: 8px;
`;