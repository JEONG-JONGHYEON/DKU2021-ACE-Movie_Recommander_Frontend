import React from 'react'
import { Descriptions } from 'antd'

function MovieInfo(props) {
    let { title, score, genres, actors } = props;

    return (
        <Descriptions title="영화 정보" bordered>
            <Descriptions.Item label="제목">{title}</Descriptions.Item>
            <Descriptions.Item label="평점">{score === null ? 0 : score}</Descriptions.Item>
            {/* <Descriptions.Item label="장르">{genres.map(genre => genre.name).join(", ")}</Descriptions.Item> */}
            {/* <Descriptions.Item label="출연">{movie.actors}</Descriptions.Item>
            <Descriptions.Item label="개봉일">{movie.opened_at}</Descriptions.Item> */}
        </Descriptions>
    )
}

export default MovieInfo
