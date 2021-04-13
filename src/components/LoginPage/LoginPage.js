import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../_actions/user_action'
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

function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onChangeEmail = (e) => {
        setEmail(e.currentTarget.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                console.log(response)
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('에러')
                }
            })
    }

    return (
        <div style={{
            justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
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
                    <Input value={Email} onChange={onChangeEmail} />
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
                    <Input.Password value={Password} onChange={onChangePassword} />
                </Form.Item>

                <Form.Item
                    {...tailLayout}
                >
                    <Button type="primary" htmlType="submit" onClick={onSubmitHandler}>
                        로그인
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default withRouter(LoginPage)