import React from 'react';
import {
    Card,Image
  } from 'semantic-ui-react'
import {imagesCharacter} from '../../assets/img'

const cardPeople = (props) => {
    let imagerandom = ['bobbafett','darthvader','stromtrooper'];

    let  random = Math.floor(Math.random() * 3) + 0;

    return(
        
        <Card onClick={()=>props.onClickPeople(props.data.url)}>
            <Image src={imagesCharacter[imagerandom[random]]} />
                <Card.Content>
                <Card.Header>{props.data.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.data.birth_year}</span>
                </Card.Meta>
            </Card.Content>
        </Card>
    );
}

export default cardPeople;
