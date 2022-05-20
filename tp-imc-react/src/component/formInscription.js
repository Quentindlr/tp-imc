import { Form } from "antd";
import { Component } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../service/serviceUser";
import { withNavigate } from "../tools/navigate";
import { Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

class FormInsc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                nom: undefined,
                mdp: undefined,
                age: undefined,
                taille: undefined,
                poids: undefined
            },
        }
    }

    fieldsOnChange = (e) => {
        const tmpUser = this.state.user
        tmpUser[e.target.getAttribute("name")] = e.target.value
        this.setState({ user: { ...tmpUser } })
    }

    confirm = (e) => {
        e.preventDefault()
        addUser({ ...this.state.user })
            .then(res => {
                
                    this.props.navigate("/connexion")
                
            })
    }

    state = {}
    render() {
        return (
            <form onSubmit={this.confirm}>
                <div>
                    <label>Name : </label>
                    <input type="text" name="nom" onChange={this.fieldsOnChange} placeholder="Name"/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" name="mdp" onChange={this.fieldsOnChange} placeholder="Password"/>
                </div>
                <div>
                    <label>Age : </label>
                    <input type="text" name="age" onChange={this.fieldsOnChange} placeholder="Age"/>
                </div>
                <div>
                    <label>Taille : </label>
                    <input type="text" name="taille" onChange={this.fieldsOnChange} placeholder="Taille"/>
                </div>
                <div>
                    <label>Poids : </label>
                    <input type="text" name="poids" onChange={this.fieldsOnChange} placeholder="Poids"/>
                </div>
                <div>
                    <button type="submit">
                        validation
                    </button>
                </div>
                <div>
                si vous disposez d'un compte?
            </div>
            <Link to="/connexion">
                <div>connexion</div>
            </Link>
            </form>

            // <Form
            //     onSubmit={this.confirm}
            //     name="basic"
            //     labelCol={{
            //         span: 8,
            //     }}
            //     wrapperCol={{
            //         span: 16,
            //     }}
            //     initialValues={{
            //         remember: true,
            //     }}
            //     autoComplete="off"
            // >
            //     <Form.Item
            //         onChange={this.fieldsOnChange}
            //         label="Username"
            //         name="username"
            //         rules={[
            //             {
            //                 required: true,
            //                 message: 'Please input your username!',
            //             },
            //         ]}
            //     >
            //         <Input />
            //     </Form.Item>

            //     <Form.Item
            //         onChange={this.fieldsOnChange}
            //         label="Password"
            //         name="password"
            //         rules={[
            //             {
            //                 required: true,
            //                 message: 'Please input your password!',
            //             },
            //         ]}
            //     >
            //         <Input.Password />
            //     </Form.Item>

            //     <Form.Item
            //         onChange={this.fieldsOnChange}
            //         label="age"
            //         name="age"
            //         rules={[
            //             {
            //                 required: true,
            //                 message: 'Please input your age!',
            //             },
            //         ]}
            //     >
            //         <Input />
            //     </Form.Item>

            //     <Form.Item
            //         onChange={this.fieldsOnChange}
            //         label="taille"
            //         name="taille"
            //         rules={[
            //             {
            //                 required: true,
            //                 message: 'Please input your taille!',
            //             },
            //         ]}
            //     >
            //         <Input />
            //     </Form.Item>

            //     <Form.Item
            //         onChange={this.fieldsOnChange}
            //         label="poids"
            //         name="poids"
            //         rules={[
            //             {
            //                 required: true,
            //                 message: 'Please input your poids!',
            //             },
            //         ]}
            //     >
            //         <Input />
            //     </Form.Item>

            //     <Form.Item
            //         wrapperCol={{
            //             offset: 8,
            //             span: 16,
            //         }}
            //     >
            //         <Button type="submit" htmlType="submit">
            //             Validation
            //         </Button>
            //     </Form.Item>
            // </Form>


        );
    }
}

export default withNavigate(FormInsc);