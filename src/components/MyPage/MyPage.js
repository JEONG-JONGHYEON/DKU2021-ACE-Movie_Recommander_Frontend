import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
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

    return (
        <div style={{ textAlign: 'center' }}>
            --- 마이페이지 입니당 (디자인 x)---
            
            <br />
            이메일 : {User.email}
            <br />
            닉네임 : {User.nickname}
            <br />
            댓글 정보 : {UserComments.length === 0 ? '아직 평가가 없어요' : UserComments}
        </div>
    )
}

export default MyPage
