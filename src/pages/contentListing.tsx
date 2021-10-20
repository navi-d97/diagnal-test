import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '../components/list'
import TopBar from '../components/TopBar'
import { getMovies } from '../store/actions/moviesAction'


export default function ContentListing() {

    const dispatch = useDispatch()
    const moviesList = useSelector((state:any) => state.moviesList)
    const { loading, error, movies } = moviesList
    useEffect(() => {
        dispatch(getMovies(1))
    }, [dispatch])

    return (
        <div className="flex-1 h-screen bg-black">
            <TopBar onSearch={(value) => { console.log(value) }} />
            {loading ? 
                "Loading..." 
                // : error ? 
                //     <div className="text-white">{error.message}</div> 
                    : <List
                        data={movies}
                        loadMore={(index:number)=>{dispatch(getMovies(index))}}
                        />
                }
            {/* <TopBar onSearch={(value) => { console.log(value) }} />
            <List /> */}
        </div>
    )
}
