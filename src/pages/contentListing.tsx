import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '../components/list'
import TopBar from '../components/TopBar'
import { getMovies, searchMovies } from '../store/actions/moviesAction'


export default function ContentListing() {

    const dispatch = useDispatch()
    const moviesList = useSelector((state: any) => state.moviesList)
    const { loading, error, movies } = moviesList
    useEffect(() => {
        dispatch(getMovies(1))
    }, [dispatch])


    const loadMore = useCallback((pgNumber) => {
        if (pgNumber <= 3) {
            dispatch(getMovies(pgNumber))
        }
    }, [dispatch])

    const onSearchMovie = useCallback((value) => {
        dispatch(searchMovies(value))
    }, [dispatch])

    return (
        <div className="flex-1 h-screen bg-black overflow-hidden">
            <TopBar onSearch={onSearchMovie} />
            {loading ?
                "Loading..."
                : error ?
                    <div className="text-white">{error.message}</div>
                    :
                    <List
                        data={movies}
                        loadMore={loadMore}
                        rowCount={Math.min(movies.length / 2, 28)}
                        itemCount={54}
                    />
            }
        </div>
    )
}
