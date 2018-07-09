import axios from 'axios';
import { 
	FETCHING_DATA_MOVIES,
	FETCHING_DATA_MOVIES_FAILURE,
  FETCHING_DATA_MOVIES_SUCCESS,
  FETCHING_DATA_FILM_PEOPLE
} from '../const/actionsType';
import { BASE_API } from '../const/config';
import {fetchingdataFilmPeople} from './people'


export const fetchingData = () => {
  return {
    type: FETCHING_DATA_MOVIES
  }
}

export const fetchingDataSuccess = (data) => {
  return {
    type: FETCHING_DATA_MOVIES_SUCCESS,
    data,
  }
}

export const fetchingDataFailure = (data) => {
  return {
    type: FETCHING_DATA_MOVIES_FAILURE,
    data
  }
}


export const fetcingDataMovie = (id,isDetail,callback) => {
  return (dispatch, getState) => {
    dispatch(fetchingData());
 
    axios.get(`${BASE_API}films/${id}`)
    .then((result) => {

      if(result.status === 200){
        if(isDetail){
          if (callback) { callback(result); }
        }else if (id !== undefined) {
            //insert detail film
            let {data} = result; 
            dispatch(fetchingDataSuccess({
              items: [{...data,detail_people:[]}],
            }));

            data.characters.forEach(element => {

              //get detail film 
              let id_people = element.replace( /^\D+/g, '')
              dispatch(fetchingdataFilmPeople(id_people,(data)=>{
                if(data){
               setTimeout(()=>{
                  dispatch(fetchingDataFilmPeople(data))
                },2000);
                }
              }))

              
            });
            if (callback) { callback(result); }


          
      
        }else{

          dispatch(fetchingDataSuccess({
            item : [...result.results],
          }))

        }
      }else{
        dispatch (fetchingDataFailure(result.message))
      }

    
      if (callback) { callback(); }
    })
    .catch((error) => {
      dispatch(fetchingDataFailure(error))
      console.log(error);
      if (callback) { callback(); }
    });
  }
}


export const fetchingDataFilmPeople = (data) => {
  return {
    type: FETCHING_DATA_FILM_PEOPLE,
    data,
  }
}