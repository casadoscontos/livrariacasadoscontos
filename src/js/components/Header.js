// Dependencies
import React from 'react';

// Components
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import SearchIcon from 'grommet/components/icons/base/Search';
import Logo from './Logo';

export default function AppHeader (props) {
  return (
    <Header justify="center" fixed={true} style={{ 'backgroundColor': '#EAD6C3' }}>
      <Box
        size={{ width: { max: 'xxlarge' } }}
        direction="row"
        responsive={false}
        justify="start"
        align="center"
        pad={{ horizontal: 'medium' }}
        flex="grow">
        <Logo />
        <Box pad="small" />
        <Menu label="Menu" inline={true} direction="row" flex="grow">
          <Anchor href="#" style={{ 'color': '#766C62' }}>Quem somos</Anchor>
          <Anchor href="#" style={{ 'color': '#766C62' }}>Serviços</Anchor>
          <Anchor href="#" style={{ 'color': '#766C62' }}>Produtos</Anchor>
          <Anchor href="#" style={{ 'color': '#766C62' }}>Contato</Anchor>
        </Menu>
        <Box flex="grow" align="end"><SearchIcon /></Box>
      </Box>
    </Header>
  );
};
