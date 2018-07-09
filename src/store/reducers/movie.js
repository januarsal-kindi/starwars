import * as actionTypes from '../const/actionsType';
import { updateObject } from '../../Helper/utitility';

const initialState = {
    items: [],
    isLoading: true,
    page: 0,
  }


const fetchingdataMovies = ( state, action ) => {
  
    const updatedState = {
        isLoading: true
    }
    return updateObject( state, updatedState );
};

const fetchingdatamoviessuccess = (state, action) => {

    const { items = [] } = action.data;
    let list = [];
    list = [...items];

    const updatedSt = {
        isLoading: false,
        items: list,
    }
    return updateObject( state, updatedSt );
};

const fetchingdatafailure = (state, action) => {
    return updateObject( state, {
        isLoading: false,
        error: action.data.error
        });
};


const fetchingdataFilmPeople = (state, action) => {

    let detailFilm= state.items[0];
    console.log(detailFilm)
   
    if(Array.isArray(detailFilm.characters)){
        detailFilm.detail_people.push(action.data.data);
    }


    return updateObject( state, {
            items: [detailFilm]
        });
};




const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCHING_DATA_MOVIES: return fetchingdataMovies( state, action );
        case actionTypes.FETCHING_DATA_MOVIES_SUCCESS: return fetchingdatamoviessuccess(state, action);
        case actionTypes.FETCHING_DATA_MOVIES_FAILURE: return fetchingdatafailure(state, action);
        case actionTypes.FETCHING_DATA_FILM_PEOPLE: return fetchingdataFilmPeople(state,action)
        default: return state;
    }
};

export default reducer;