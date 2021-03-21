import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.css"

const LoginForm = () => {
  const onFinish = () => {
    console.log('Received values of form: ');
  };

  return (
    <div>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{
        paddingTop : "100px",
        width: "40%",
        margin: "0 auto",
        display: "block",
        border: "1 solid",
        padding: "20px",
        background:"white",
        borderRadius: "10px"
      }}
      
    >
      <div style={{marginTop:"100px"}}>
        <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/Registrasi">register now!</a>
        </Form.Item>
        </div>
        
      </Form>
    </div>
  )
}

export default LoginForm