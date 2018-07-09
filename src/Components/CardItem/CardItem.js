import React from 'react';
import {
    Card
  } from 'semantic-ui-react'
import './style.css';
import {ImageAssets} from '../../assets/img'


const cardItem = (props) => {

    return(
        <Card onClick={()=>props.onClickMovie(props.data.url)}>
            <div className='cardimage'>
                <img className="play" src={ImageAssets.play}/>
            </div>
            <Card.Content>
                <div className="header-card">{props.data.title}</div>
                <div className="description-card">Dirctor: <br/> {props.data.director}</div>
                <div className="description-card">Release: <br/> {props.data.release_date}</div>
            </Card.Content>    
        </Card>
    );
}

export default cardItem;
