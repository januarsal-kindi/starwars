import React, { Component } from 'react';
import HeaderFilm from '../../Components//Header/HeaderFilm'
import {
    Container,
    Header,
    Grid,
    Card,
    Menu
  } from 'semantic-ui-react'
  import { connect } from 'react-redux';
  import './style.css'
  import {fetcingDataMovie} from '../../store/actions/movie'

  import CardPeople from '../../Components/CardPeople/CardPeople'

class FilmContainer extends Component {

    componentWillMount() {

        let param = this.props.match.params.id;

        console.log(param)
        this.props.fetcingDataMovie(param,false,(data)=>{
            console.log(data)
        })

    }

    onClickHandlerPeople =  (id)=>{

     
        console.log(id);
        let param_id =  id.replace( /^\D+/g, '')          
        this.props.history.push( '/people/' + param_id );
          
        

    }

   
    render () {
        const {items} = this.props.movie
        console.log(items);
        let items_people;


        if(items.length > 0){
            let items_detail = items[0];
            if (items_detail.detail_people.length > 0){
                items_people = items_detail.detail_people.map((post,index)=>{
                    return(
                    <CardPeople onClickPeople = {this.onClickHandlerPeople} data={post} key={index} />
                )
                });
            }
        }
        
        
        return (
            <div style={{marginTop:'5em'}}>
                <HeaderFilm data = {items} ></HeaderFilm>  
                    <Container style={{marginTop:'2em' }}>
                        <Grid  container>
                             <Grid.Row  className="header-container">
                               <Grid.Column width={5}>
                                </Grid.Column>
                                <Grid.Column width={12}>
                                  
                                </Grid.Column>

                            </Grid.Row>
                            <Grid.Row  className="header-container">
                                  <Grid.Column style={{paddingLeft: 0}} width={4}> 
                                       <Menu vertical>
                                        <Menu.Item
                                            name='promotions'
                                             onClick={this.handleItemClick}
                                            >
                                            <Header as='h4'>Director</Header>
                                                <p>{items.length > 0 ? items[0].director: '' }</p>
                                            </Menu.Item>

                                            <Menu.Item name='coupons'  onClick={this.handleItemClick}>
                                              <Header as='h4'>producer</Header>
                                              <p>{items.length > 0 ? items[0].producer: '' }</p>
                                            </Menu.Item>

                                            <Menu.Item name='rebates'  onClick={this.handleItemClick}>
                                              <Header as='h4'>release date</Header>
                                              <p>{items.length > 0 ? items[0].release_date: '' }</p>
                                            </Menu.Item>
                                            <Menu.Item name='rebates'  onClick={this.handleItemClick}>
                                              <Header as='h4'>opening crawl</Header>
                                              <p>{items.length > 0 ? items[0].opening_crawl: '' }</p>
                                            </Menu.Item>
                                        </Menu>
                                </Grid.Column>
                                <Grid.Column width={12}>
                                <Card.Group itemsPerRow={4}>
                                    {items_people}
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
     movie: state.movie,

    }
  };
  
  const mapDispatchToProps = dispatch => ({
    fetcingDataMovie: (id,isDetail,callback) => dispatch(fetcingDataMovie(id,isDetail,callback)),
  });
  


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilmContainer);
  ;
  