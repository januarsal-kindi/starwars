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
            <Container  >
                <Header as='h2'> 
                    <Header.Content>
                        <div className="vertical-line">
                            {props.data.name}
                        </div>
                    </Header.Content>
                </Header>
            </Container>
            <Container style={{marginTop:'2em' }}>
               
                <Grid  container  inverted >
                    <Grid.Row>
                        <Grid.Column width= {3}>
                            <Image src={imagesCharacter.stromtrooper} size='medium' rounded />
                        </Grid.Column>
                        <Grid.Column width= {13}>
                            <div className="ui four column grid container-profile">
                                <div className="row profile">
                                    <div className="column">Height:</div>
                                    <div className="column"> {props.data.height}</div>
                                </div>
                                <div className="row profile">
                                    <div className="column">Mass:</div>
                                    <div className="column"> {props.data.mass}</div>
                                </div>
                                <div className="row profile">
                                    <div className="column">Hair Color:</div>
                                    <div className="column">{props.data.hair_color}</div>
                                </div>
                                <div className="row profile">
                                    <div className="column">Skin Color:</div>
                                    <div className="column">{props.data.skin_color}</div>
                                </div>
                                <div className="row profile">
                                    <div className="column">Birth Year:</div>
                                    <div className="column">{props.data.birth_year}</div>
                                </div>
                                <div className="row profile">
                                    <div className="column">Gender</div>
                                    <div className="column">{props.data.gender}</div>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Auxa>
    );
}

export default header;
