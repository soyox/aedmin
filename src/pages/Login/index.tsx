import React from 'react';
import styles from './index.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
type Props = {};

export default function Login({}: Props) {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <h1>AEdmin</h1>
          <Form name={'loginForm'}>
            <Form.Item
              name={'username'}
              rules={[{ required: true, message: '' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            {/* <Form.Item> */}
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>保持登陆状态</Checkbox>
              {/* </Form.Item> */}
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginFormButton}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.LoginDisplay}></div>
      </div>
    </div>
  );
}
