import { Component } from "react";
import { Link } from "react-router-dom";
import { afficheAccueil, log } from "../service/serviceUser";
import { withNavigate } from "../tools/navigate";
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        nom: undefined,
        mdp: undefined,
      }
    }
  }
  fieldsOnChange = (e) => {
    const tmpUser = this.state.user
    tmpUser[e.target.getAttribute("name")] = e.target.value
    this.setState({ user: { ...tmpUser } })
  }

  confirm = (e) => {
    e.preventDefault()
    afficheAccueil({ ...this.state.user })
      .then(res => {
        this.props.navigate("/accueil")
      })
  }

  state = {}
  render() {
    return (
      <form onSubmit={this.confirm}>
        <div>
          <label>Name : </label>
          <input type="text" name="nom" onChange={this.fieldsOnChange} placeholder="Name" />
        </div>
        <div>
          <label>Password : </label>
          <input type="text" name="mdp" onChange={this.fieldsOnChange} placeholder="Password" />
        </div>
        <div>
          <button type="submit">
            validation
          </button>
        </div>
        <div>
          si vous ne disposez pas de compte?
        </div>
        <Link to="/inscription">
          <div>inscription</div>
        </Link>
      </form>

      //     <Form
      //   name="basic"
      //   labelCol={{
      //     span: 8,
      //   }}
      //   wrapperCol={{
      //     span: 16,
      //   }}
      //   initialValues={{
      //     remember: true,
      //   }}
      //   onFinish={(e) => this.context(e) } 
      //   onFinishFailed={(e) => this.context(e)}
      //   autoComplete="off"
      // >
      //   <Form.Item
      //     label="Username"
      //     name="username"
      //     rules={[
      //       {
      //         required: true,
      //         message: 'Please input your username!',
      //       },
      //     ]}
      //   >
      //     <Input />
      //   </Form.Item>

      //   <Form.Item
      //     label="Password"
      //     name="password"
      //     rules={[
      //       {
      //         required: true,
      //         message: 'Please input your password!',
      //       },
      //     ]}
      //   >
      //     <Input.Password />
      //   </Form.Item>

      //   <Form.Item
      //     name="remember"
      //     valuePropName="checked"
      //     wrapperCol={{
      //       offset: 8,
      //       span: 16,
      //     }}
      //   >
      //     <Checkbox>Remember me</Checkbox>
      //   </Form.Item>

      //   <Form.Item
      //     wrapperCol={{
      //       offset: 8,
      //       span: 16,
      //     }}
      //   >
      //     <Button type="primary" htmlType="submit">
      //       Submit
      //     </Button>
      //   </Form.Item>
      // </Form>
    );
  }
}

export default withNavigate(Login);