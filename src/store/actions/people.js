import axios from 'axios';
import qs from 'qs';
import { 
	FETCHING_DATA_PEOPLE,
	FETCHING_DATA_PEOPLE_SUCCESS,
  FETCHING_DATA_PEOPLE_FAILURE,
  FETCHING_DATA_PEOPLE_FILM
} from '../const/actionsType';
import {fetcingDataMovie} from './movie'
import { BASE_API } from '../const/config';

export const fetchingData = () => {
  return {
    type: FETCHING_DATA_PEOPLE
  }
}

export const fetchingDataSuccess = (data) => {
  return {
    type: FETCHING_DATA_PEOPLE_SUCCESS,
    data,
  }
}

export const fetchingDataFailure = (data) => {
  return {
    type: FETCHING_DATA_PEOPLE_FAILURE,
    data
  }
}

export const fetchingDataPeople = (id,callback) => {
  return (dispatch, getState) => {
    const { items } = getState().people;
    dispatch(fetchingData());
 
    axios.get(`${BASE_API}people/${id}`)
    .then((result) => {

        if (result.status == 200){
            if(result.data.count){
              
              dispatch(fetchingDataSuccess({
                  items: result.results,
                }));

            }else {

              //insert detail film
              let {data} = result; 
              dispatch(fetchingDataSuccess({
                items: [{...data,detail_film:[]}],
              }));

              data.films.forEach(element => {

                //get detail film 
                let id_film = element.replace( /^\D+/g, '')
                dispatch(fetcingDataMovie(id_film,true,(data)=>{
                  if(data){
                 setTimeout(()=>{
                    dispatch(fetchingDataPeopleFilm(data))
                  },2000);
                  }
                }))

                
              });

            }
        
        }
      if (callback) { callback(result); }
    })
    .catch((error) => {
      dispatch(fetchingDataFailure(error))
      if (callback) { callback(); }
    });
  }
}


export const fetchingDataPeopleFilm = (data) => {
  return {
    type: FETCHING_DATA_PEOPLE_FILM,
    data,
  }
}
export const fetchingdataFilmPeople = (id,callback) => {
  return (dispatch, getState) => {
 
    axios.get(`${BASE_API}people/${id}`)
    .then((result) => {
        if (result.status == 200){
          if (callback) { callback(result); }
        }
    })
    .catch((error) => {
      dispatch(fetchingDataFailure(error))
      if (callback) { callback(error); }
    });
  }
}
