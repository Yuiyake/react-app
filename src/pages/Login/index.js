import React from 'react';
import logo from '@/assets/logo.png'
import './index.scss'
import {Button, Card, Checkbox, Form, Input} from "antd";

const Login = () => {
    function onFinish(val) {
        console.log(val)
    }
    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt=""/>
            {/*  表单  */}
                <Form
                    validateTrigger={['onBlur', 'onChange']}
                    initialValues={{
                        remember: true,
                        password: '123456'
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="mobile"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '请输入正确的手机号格式',
                                validateTrigger: 'onBlur'
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                len: 6,
                                message: '密码长度至少不小于6位',
                                validateTrigger: "onBlur"
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox className="login-checkbox-label">
                            我已阅读并同意「用户协议」和「隐私条款」
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
