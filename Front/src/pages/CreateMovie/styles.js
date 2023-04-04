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
  overflow-x: hidden;
  max-height: 700px;
  width: 95%;
  padding: 0 18px 0 90px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  grid-template-areas:
  "title title"
  "movie rating"
  "obs obs"
  "titlemarks titlemarks"
  "marks marks"
  "btndelete btnsave"
  ;

  input {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > h2 {
    grid-area: title;
    width: 100%;
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    margin-right: 20px;
  }

  > div:nth-child(2){
    grid-area: movie;
  }

  > div:nth-child(3){
    grid-area: rating;
  }

  > div:nth-child(4){
    grid-area: obs;
  }

  > h3 {
    grid-area: titlemarks;
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_150};
  }

`;

export const Marks = styled.div`
  grid-area: marks;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  min-height: 90px;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  border-radius: 8px;
`;