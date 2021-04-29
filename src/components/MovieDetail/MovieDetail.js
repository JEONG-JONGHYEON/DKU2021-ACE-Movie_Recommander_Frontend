import React, { useEffect, useState } from 'react'
import { API_URL } from '../Config';
import MovieInfo from './Sections/MovieInfo';

function MovieDetail(props) {

    let movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([])

    useEffect(() => {

        fetch(`${API_URL}/movies/${movieId}`)
            .then(response => response.json())
            .then(response => {
                setMovie(response)
            })

    }, [])


    return (
        <div>

            {/* Header */}
            <div style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0)
    39%, rgba(0,0,0,0)
    41%, rgba(0,0,0,0.65)
    100%),
    url('${Movie.img_url}'), #1c1c1c`,
                height: '600px',
                backgroundSize: '100%, cover',
                backgroundPosition: 'center, center',
                width: '100%',
                position: 'relative'
            }}>
                <div>
                    <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }}>
                        <h2 style={{ color: 'white' }}> {Movie.name}</h2>
                        <p style={{ color: 'white', fontSize: '1rem' }}>{Movie.description}</p>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto' }}>

                {/* Movie Info */}
                <MovieInfo
                    title={Movie.name}
                    score={Movie.score}
                    genres={Movie.genres}
                />
                <br />

                {/* Actors Grid */}

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <button> Toggle Actor View </button>
                </div>

            </div>
        </div>
    )
}

export default MovieDetail
