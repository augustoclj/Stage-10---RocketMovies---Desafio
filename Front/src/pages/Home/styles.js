import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 116px 120px auto;
  grid-template-areas:
  "header"
  "title"
  "content"
  ;
`;

export const PageTitle = styled.div`
  width:100%;
  display: grid;
  padding: 0px 90px;
  margin-top:50px 0;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 207px;
  grid-template-areas:
  "title addmovie"

  > h2{
    grid-area: "title";
    font-size: 32px;
    font-weight: 500;

  }
`;

export const NewMovie = styled(Link)`
grid-area: "addmovie";
`;

export const MyMoviesList = styled.div`

  grid-area: "content";
  height: 745px;
  width: 92%;
  margin: 0 auto;
  overflow-y: auto;
  padding: 0px 8px;
`;

