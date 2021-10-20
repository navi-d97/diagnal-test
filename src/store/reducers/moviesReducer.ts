import {GET_MOVIES, GET_MOVIES_ERROR} from '../types'

const initialState = {
    movies:[],
    loading:true
}

export default function moviesReducer(state = initialState, action: { type: string; payload: any }){

    switch(action.type){

        case GET_MOVIES:
        return {
            ...state,
            movies:[...state.movies,...action.payload],
            loading:false

        }
        case GET_MOVIES_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}