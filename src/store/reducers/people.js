import * as actionTypes from '../const/actionsType';
import { updateObject } from '../../Helper/utitility';

const initialState = {
    items: [],
    isLoading: true,
    page: 0,
  }


const fetchingdataPeople = ( state, action ) => {
  
    const updatedState = {
        isLoading: true
    }
    return updateObject( state, updatedState );
};

const fetchingdataPeopleSuccess = (state, action) => {

    const { items = [] } = action.data;
    let list = [];
    list = [...items];

    const updatedSt = {
        isLoading: false,
        items: list,
    }
    return updateObject( state, updatedSt );
};

const fetchingdataPeopleFailure = (state, action) => {
    return updateObject( state, {
        isLoading: false,
        error: action.data.error
        });
};


const fetchingdataPeopleFilm = (state, action) => {

    let detailPeople= state.items[0];
   
    if(Array.isArray(detailPeople.films)){
        detailPeople.detail_film.push(action.data.data);
    }


    return updateObject( state, {
            items: [detailPeople]
        });
};




const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCHING_DATA_PEOPLE: return fetchingdataPeople( state, action );
        case actionTypes.FETCHING_DATA_PEOPLE_SUCCESS: return fetchingdataPeopleSuccess(state, action);
        case actionTypes.FETCHING_DATA_PEOPLE_FAILURE: return fetchingdataPeopleFailure(state, action);
        case actionTypes.FETCHING_DATA_PEOPLE_FILM: return fetchingdataPeopleFilm(state, action);

        default: return state;
    }
};

export default reducer;