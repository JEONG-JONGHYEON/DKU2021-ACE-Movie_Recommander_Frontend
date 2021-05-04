import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../_actions/user_action'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button } from 'antd'

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 8,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 8,
    },
};

function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Nickname, setNickname] = useState("")
    const [Password, setPassword] = useState("")
    const [Password_Confirm, setPassword_Confirm] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNicknameHandler = (e) => {
        setNickname(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onPassword_ConfirmHandler = (e) => {
        setPassword_Confirm(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (Password != Password_Confirm) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            nickname: Nickname,
            password: Password,
            password_confirm: Password_Confirm
        }

        dispatch(registerUser(body))
            .then(response => {
                console.log(response)
                if (response.payload.result) {
                    alert('회원가입 되었습니다 !')
                    props.history.push('/login')
                } else {
                    alert(response.payload.error_message)
                }
            })
    }

    return (
        <Form
            {...layout}
            name="basic"
            style={{ paddingTop: "50px" }}
        >
            <Form.Item
                label="이메일"
                name="email"
                rules={[
                    {
                        required: true,
                        message: '이메일은 입력하셔야죠..',
                    },
                ]}
            >
                <Input value={Email} onChange={onEmailHandler} />
            </Form.Item>

            <Form.Item
                label="닉네임"
                name="nickname"
                rules={[
                    {
                        required: true,
                        message: '닉네임은 입력하셔야죠..',
                    },
                ]}
            >
                <Input value={Nickname} onChange={onNicknameHandler} />
            </Form.Item>

            <Form.Item
                label="비밀번호"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '비밀번호는 입력하셔야죠..',
                    },
                ]}
            >
                <Input.Password value={Password} onChange={onPasswordHandler} />
            </Form.Item>

            <Form.Item
                label="비밀번호확인"
                name="passwordConfirm"
                rules={[
                    {
                        required: true,
                        message: '비밀번호확인은 입력하셔야죠..',
                    },
                ]}
            >
                <Input.Password value={Password_Confirm} onChange={onPassword_ConfirmHandler} />
            </Form.Item>

            <Form.Item
                {...tailLayout}
            >
                <Button type="primary" htmlType="submit" onClick={onSubmitHandler}>
                    회원가입
                </Button>
            </Form.Item>
        </Form>
    )
}

export default withRouter(RegisterPage)
