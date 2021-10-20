import {GET_MOVIES, GET_MOVIES_ERROR, SEARCH_MOVIES} from '../types'
import axios from 'axios'
import { MOVIES_DATA_URL } from '../../common/common'

export const getMovies = (pageNumber:number) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    
    try{
        const res:any = await axios.get(MOVIES_DATA_URL(pageNumber))
        dispatch( {
            type: GET_MOVIES,
            payload: res.data.page['content-items'].content
        })
    }
    catch(error){
        dispatch( {
            type: GET_MOVIES_ERROR,
            payload: error,
        })
    }

}

export const searchMovies = (search:string) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch( {
        type: SEARCH_MOVIES,
        payload: search
    })
}