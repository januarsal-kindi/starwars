import React from 'react';
import {
    Container,
    Header,
    Grid,
    Image
  } from 'semantic-ui-react'
import Auxa from '../../hoc/Auxa/Auxa'

import './style..css';
import {imagesCharacter} from '../../assets/img'




const header = (props) => {   

    return(
        <Auxa>
            <Container className="header-film" >
               <div className="row row-title">
                    <Header  className="header-title" as="h1">{props.data.length > 0 ? props.data[0].title: '' }</Header>
               </div>
            </Container>
        </Auxa>
    );
}

export default header;
