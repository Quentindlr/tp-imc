import { Component } from "react";
import { Link } from "react-router-dom";
import { withNavigate } from "../tools/navigate";
import 'antd/dist/antd.css';
import { login } from "../service/serviceUser";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        Nom: undefined,
        Mdp: undefined,
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
    login({ ...this.state.user })
      .then(res => {
        // console.log({...this.state.user});
        // console.log(res.data.erreur);
        // console.log(res.data.messaage);
        if (res.data.erreur == false) {
          this.props.navigate("/accueil")
        }
        else {
          alert(res.data.message)
        }
      })

    // recupIMC({ ...this.state.user })
  }


  state = {}
  render() {
    return (
      <div>
        <form className="col-md-2 align-right" onSubmit={this.confirm}>
          <div className="mb-3">
            <label className="form-label">Name : </label>
            <input className="form-control" type="text" name="Nom" onChange={this.fieldsOnChange} placeholder="Name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password : </label>
            <input className="form-control" type="password" name="Mdp" onChange={this.fieldsOnChange} placeholder="Password" />
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              validation
            </button>
          </div>
          <div className="form-text">
            si vous ne disposez pas de compte?
          </div>
          <Link to="/inscription">
            <div>inscription</div>
          </Link>
        </form>
      </div>

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