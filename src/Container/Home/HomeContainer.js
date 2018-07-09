import React, { Component } from 'react';
import HeaderNav from '../../Components//Header/Header'
import {
    Container,
    Header,
    Grid,
    Card,
    
  } from 'semantic-ui-react'
  import { connect } from 'react-redux';
  import './style.css'
  import {fetchingDataPeople} from '../../store/actions/people'
  import CardItem from '../../Components/CardItem/CardItem'

class HomeContainer extends Component {

    componentWillMount() {


        let param = this.props.match.params.id;
        let id ;

        console.log(param)
        if (param){
            id = param;
        }else{
            id = 1;
        }

        this.props.fetchingDataPeople(id,(data)=>{
            console.log(data)
        })

    }

    onHandlerclickMovie = (id)=> {
        console.log(id);
        let param_id =  id.replace( /^\D+/g, '')
        this.props.history.push( '/film/' + param_id );
          

    }

   
    render () {
        const {items} = this.props.people
        console.log(items);
        let items_movies;


        if(items.length > 0){
            let items_detail = items[0];
            if (items_detail.detail_film.length > 0){
                items_movies = items_detail.detail_film.map((post,index)=>{
                    return(
                    <CardItem key={index} onClickMovie={this.onHandlerclickMovie} data={post} key={index} />
                )
                });
            }
        }
        
        
        return (
            <div style={{marginTop:'5em'}}>
                {items.length > 0 ? (
                    <HeaderNav data = {items[0]}></HeaderNav> 
                ): ''}
                <Container style={{marginTop:'2em' }}>
              
                <Grid  container>
                    <Grid.Row  className="header-container">
                        <Grid.Column width={12}>
                          <Header style={{color:'blue'}} as='h4' floated='right'>
                           more...
                        </Header>
                        <Header  style={{color:'red'}} as='h4' floated='left'>
                        {items.length > 0 ? (
                             items[0].name+' Movies'
                           ): ''}
                        </Header>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header style={{color:'red'}}  as='h4' floated='left'>
                            Related Movie
                            </Header>
                        </Grid.Column>

                    </Grid.Row>
                   
                    <Grid.Row>
                        <Grid.Column width= {12}>
                             <Card.Group itemsPerRow={4}>
                                {items_movies}
                            </Card.Group>
                        </Grid.Column>
                        <Grid.Column width= {4}>  
                        <Card.Group itemsPerRow={1}>
                                <Card>
                                    <div className='relatedCard'>
                                        <h4> The Force Awakens</h4>
                                        <div className="ui four column grid ">
                                            <div className="row realted-detail">
                                            <div className="five wide column">Director:</div>
                                            <div className="ten wide column">172 cm</div>
                                        </div>
                                        <div className="row realted-detail">
                                            <div className="five wide column">Producer:</div>
                                            <div className=" ten wide column">Blond</div>
                                        </div>
                                        <div className="row realted-detail">
                                            <div className=" five wide column">Release Date:</div>
                                            <div className=" ten wide column">Black</div>
                                        </div>
                                        </div>
                                    </div>
                                    <Card.Content>
                                      <p>
                                      consectetur adipisicing elit, sed do eiusmod tempor.....
                                      </p>

                                    </Card.Content>
                                    <Card.Content extra>
                                         more..
                                    </Card.Content>    
                                </Card>
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
     people: state.people,
    }
  };
  
  const mapDispatchToProps = dispatch => ({
    fetchingDataPeople: (id,callback) => dispatch(fetchingDataPeople(id,callback)),
  });
  


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeContainer);
  ;
  