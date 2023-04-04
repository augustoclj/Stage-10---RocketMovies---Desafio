import {Container, PageTitle, NewMovie, MyMoviesList } from "./styles.js";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie/";
import { FiPlus } from 'react-icons/fi'

export function Home(){
  return(
    <Container>

      <Header/>

      <PageTitle>
          <h2>Meus Filmes</h2>

          <NewMovie to="/create">
            <Button title="Adicionar Filme" icon={FiPlus}/>
          </NewMovie>

      </PageTitle>

      <MyMoviesList>
      
      <Movie data={{
            title: 'Interestellar',
            description:'Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.',
            tags:[
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Familia'},
            ],
            rating: 5
          }}
          />

<Movie data={{
            title: 'Top Gun: Maverick',
            description: 'Na sequência de Top Gun: Ases Indomáveis, acompanhamos a história de Pete “Maverick” Mitchell (Tom Cruise), um piloto à moda antiga da Marinha que coleciona muitas condecorações, medalhas de combate e grande reconhecimento pela quantidade de aviões inimigos abatidos nos últimos 30 anos. Entretanto, nada disso foi suficiente para sua carreira decolar, visto que ele deixou de ser um capitão e tornou-se um instrutor. A explicação para esse declínio é simples: Ele continua sendo o mesmo piloto rebelde de sempre, que não hesita em romper os limites e desafiar a morte. Nesta nova aventura, Maverick precisa provar que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas. Após 34 anos do clássico, acompanhem o filme do premiado produtor Jerry Bruckheimer e de Joseph Kosinski, mesmo diretor de Tron: O Legado (2010) e Oblivion (2013). ',
            tags:[
              {id: '1', name: 'Ação'},

            ],
            rating: 4
          }}
          />

<Movie data={{
            title: 'O Gato de Botas 2',
            description: 'Em Gato de Botas 2: O Último Pedido, O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: por conta de seu gosto pelo perigo e pelo desrespeito à segurança pessoal, ele queimou oito de suas nove vidas. Com apenas uma vida restante, o Gato precisa pedir ajuda para uma antiga parceira - que atualmente é sua rival e inimiga mortal, Kitty Pata Mansa - para continuar vivo. Então, o destemido bichano parte em uma jornada épica pela Floresta Negra para encontrar a mítica Estrela dos Desejos, capaz de proporcionar o legendário Último Desejo e restaurar suas nove vidas.',
            tags:[
              {id: '1', name: 'Animação'},
              {id: '2', name: 'Aventura'},
              {id: '3', name: 'Família'},
            ],
            rating: 4
          }}
          />

<Movie data={{
            title: 'O Gato de Botas 2',
            description: 'Em Gato de Botas 2: O Último Pedido, O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: por conta de seu gosto pelo perigo e pelo desrespeito à segurança pessoal, ele queimou oito de suas nove vidas. Com apenas uma vida restante, o Gato precisa pedir ajuda para uma antiga parceira - que atualmente é sua rival e inimiga mortal, Kitty Pata Mansa - para continuar vivo. Então, o destemido bichano parte em uma jornada épica pela Floresta Negra para encontrar a mítica Estrela dos Desejos, capaz de proporcionar o legendário Último Desejo e restaurar suas nove vidas.',
            tags:[
              {id: '1', name: 'Animação'},
              {id: '2', name: 'Aventura'},
              {id: '3', name: 'Família'},
            ],
            rating: 4
          }}
          />

      </MyMoviesList>
      

    </Container>
  );
}