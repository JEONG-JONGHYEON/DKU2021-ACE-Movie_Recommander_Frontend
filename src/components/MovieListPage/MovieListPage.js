import React, { useEffect, useState } from 'react'
import { Layout, Row } from 'antd';
import { API_URL } from '../Config';
import GridCards from '../commons/GridCards';

const { Content, Footer } = Layout;

function MoviePage() {
    const [Movies, setMovies] = useState([])
    const [CurrentPage, setCurrentPage] = useState(2)

    useEffect(() => {
        const endpoint = `${API_URL}/movies/?page=1`;

        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setMovies([...Movies, ...response.results])
            })
    }


    const loadMoreItems = () => {
        const endpoint = `${API_URL}/movies/?page=${CurrentPage}`;
        setCurrentPage(CurrentPage + 1);
        fetchMovies(endpoint)
    }

    return (
        <div>
            <Layout className="layout">
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

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button onClick={loadMoreItems}> 더 불러오기 </button>
                        </div>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>2021-1학기 실무중심산학협력프로젝트 커피한잔</Footer>
            </Layout>


        </div>
    )
}

export default MoviePage
