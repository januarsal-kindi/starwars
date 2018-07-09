import React from 'react';
import {
    Container,
    Image,
    Menu,
  } from 'semantic-ui-react'    

import Auxa from '../../hoc/Auxa/Auxa'

import {ImageAssets}  from '../../assets/img'

const navigationBar = (props) => {

    return(
    <Auxa>
      <Menu fixed='top' inverted style={{marginBottom : '7em'}}>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src={ImageAssets.logoSmall} style={{    width: '60px', marginRight: '1em' }} />
        </Menu.Item>
        <Menu.Item as='a'>Planets</Menu.Item>
        <Menu.Item as='a'>Spaceships</Menu.Item>
        <Menu.Item as='a'>Vehicles</Menu.Item>
        <Menu.Item as='a'>People</Menu.Item>
        <Menu.Item as='a'>Films </Menu.Item>
        <Menu.Item as='a'>Species </Menu.Item>
      </Container>
    </Menu>
    
  </Auxa>

    );
}

export default navigationBar;
