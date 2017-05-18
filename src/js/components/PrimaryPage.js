import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Hero from 'grommet/components/Hero';
import Paragraph from 'grommet/components/Paragraph';
import Header from './Header';
import NewsFeed from './NewsFeed';

export default class PrimaryPage extends Component {
  render() {
    return (
      <Box>
        <Header />
        <Box>
          <Hero size="large" backgroundImage="/img/livraria.jpg" style={{ 'color': '#FFF' }}>
            <Card
              heading={
                <Heading strong={true}>
                  A única livraria em Lagoa da Prata e vem oferecer o que há de mais novo quando o assunto é leitura!
                </Heading>
              }
              style={{ 'color': '#26C4E3' }}
              description="Títulos diversos, que vão do infantil ao adulto, e que agradam aos gostos mais variados, com preços acessíveis e o atendimento de quem realmente entende do assunto."
              label="diferenciada"
              size="large"
              link={<Anchor href="#" primary={true} label="Saiba mais" />} />
          </Hero>
        </Box>

        <Box align="center">
          <Box
            pad="large"
            align="center"
            textAlign="center"
            size={{ "width": { "max": "xxlarge" } }}>
            <Heading tag="h1" strong={true} margin="none">Bem-vindo (a) a nossa casa!</Heading>
            <Paragraph size="xlarge" width="large">
              No mesmo espaço, nossos clientes também contam com o Correspondente Caixa Aqui,
              que oferece diversos serviços junto à Caixa Econômica Federal e que facilitam sua vida,
              como: abertura de conta corrente e poupança para pessoa física acima dos 18 anos, cartão de crédito,
              cheque especial, empréstimos pessoais, empréstimos consignados (contratos novos e renovações),
              consórcio de automóveis e imóveis, além de financiamento habitacional (inclusive o Minha Casa Minha Vida).
            </Paragraph>
          </Box>
        </Box>

        <Box colorIndex="light-2" pad={{ vertical: "large" }} align="center">
          <Box
            align="center"
            size={{ "width": "xxlarge" }}
            pad={{ horizontal: "large" }}>
            <Heading tag="h2" strong={true}>Notícias</Heading>
          </Box>
          <NewsFeed />
        </Box>
        <Footer full="horizontal">
          <Box
            style={{ 'backgroundColor': '#EAD6C3' }}
            pad="large"
            align="center"
            full="horizontal">
            <Box
              className="footer-cards-container"
              pad={{ vertical: "medium" }}
              size={{ width: 'xxlarge' }}
              direction="row"
              flex="grow">
              <Card
                pad={{ horizontal: "large" }}
                contentPad="medium"
                heading="Alguma coisa interessante"
                label="Algum Label"
                basis="1/2"
                separator="right"
                link={<Anchor
                         style={{ 'color': '#766C62' }}
                         href="http://www.grommet.io/docs/"
                         primary={true}>Saiba mais</Anchor>} />
              <Card
                pad={{ horizontal: "large" }}
                contentPad="medium"
                heading="Alguma coisa interessante"
                label="Algum Label"
                basis="1/2"
                link={<Anchor
                         style={{ 'color': '#766C62' }}
                         href="http://www.grommet.io/docs/"
                         primary={true}>Saiba mais</Anchor>} />
            </Box>
          </Box>
        </Footer>
      </Box>
    );
  }
};
