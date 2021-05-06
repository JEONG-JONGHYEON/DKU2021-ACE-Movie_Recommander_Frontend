import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Layout, Row } from 'antd'
import { fetchMovies } from '../../_actions/movie_action'
import GridCards from '../commons/GridCards'

const { Content } = Layout;

function MovieListPage() {
    const dispatch = useDispatch()

    const [Movies, setMovies] = useState([])
    const [CurrentPage, setCurrentPage] = useState(2)
    const [Title, setTitle] = useState("")
    const [Genre, setGenre] = useState("")
    const [Score, setScore] = useState(0)

    // 페이지 렌더링되고 나서 바로 실행
    useEffect(() => {
        dispatch(fetchMovies(1, Title, Genre, Score))
            .then(response => {
                setMovies(response.payload.results)
            })
    }, [])

    // 더 불러오기 버튼 누를 시
    const loadMoreMovies = () => {
        setCurrentPage(CurrentPage + 1);
        dispatch(fetchMovies(CurrentPage, Title, Genre, Score))
            .then(response => {
                setMovies([...Movies, ...response.payload.results])
            })
    }

    // 영화 필터링 시
    const filterMovies = () => {
        setCurrentPage(1);
        setMovies([]);
        dispatch(fetchMovies(CurrentPage, Title, Genre, Score))
            .then(response => {
                setMovies([...Movies, ...response.payload.results])
            })
    }

    return (
        <Content style={{ padding: '50px' }}>
            <div style={{ width: '100%', margin: '0' }}>
                {/* main page */}

                <div style={{ width: '85%', margin: '1rem auto' }}>
                    <h2> 영화 목록 </h2>
                    <hr />
                    <Row gutter={[16, 16]}>
                        {Movies && Movies.map((movie, index) => (
                            <React.Fragment key={index}>
                                <GridCards
                                    image={movie.img_url} /* img_url 뒤에 삼항 연산자로 기본 이미지 설정도 가능 (url 로) */
                                    movieId={movie.id}
                                    movieTitle={movie.name}
                                />
                            </React.Fragment>
                        ))}


                    </Row>
                </div>

                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={loadMoreMovies}> 더 불러오기 </button>
                </div>

            </div>
        </Content>
    )
}

export default MovieListPage
