import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteComment } from '../../_actions/comment_action'
import { fetchUserInfo } from '../../_actions/user_action'

// 5월 5일 수요일 구현, 디자인 x, 기능만 구현
function MyPage() {

    const dispatch = useDispatch()

    const [User, setUser] = useState([])

    // 코멘트 부분을 왜ㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐ state로 다시 정의해야하는거야 length 메소드 오류남;
    const [UserComments, setUserComments] = useState([])
    
    useEffect(() => {
        dispatch(fetchUserInfo())
            .then(response => {
                console.log(response)
                setUser(response.payload)
                setUserComments(response.payload.comments)
            })
    }, [])

    const DeleteComment = (movie_id) => {
        let dataToSubmit = {
            movie_id : movie_id
        }
        dispatch(deleteComment(dataToSubmit))
        .then(response => {
            console.log(response)
            window.location.reload()
        })
    }
    return (
        <div style={{ textAlign: 'center' }}>
            --- 마이페이지 입니당 (디자인 x)---
            
            <br />
            이메일 : {User.email}
            <br />
            닉네임 : {User.nickname}
            <br />
            평가 정보 : {UserComments.length === 0 ? '아직 평가가 없어요' : UserComments && UserComments.map(UserComment =>
            <span>
                <p>
                    영화id : {UserComment.movie_id},
                    평점 : {UserComment.score},
                    내용 : {UserComment.body},
                    <a href={'/movie/'+ UserComment.movie_id}>수정</a>,
                    <button onClick={() => DeleteComment(UserComment.movie_id)}>삭제</button>
                </p>
            </span>
            )}
        </div>
    )
}

export default MyPage
