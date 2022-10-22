import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/apiRequest';
import { Button,FormGroup, Label,Input,Form} from 'reactstrap';
import "./Register.css";

const Register = () => {
    const [email,setEmail] =useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

const handleRegister = (e)=>{
    e.preventDefault();//to not loading page again
//the name have to same title in req.body in postman
const newUser ={
    email: email,
    password: password,
    username: username,
};
registerUser(newUser,dispatch,navigate);
}

    return ( 
    <section className="register-container">
 
        <div className="register-title"> Sign up </div>   
        <form onSubmit={handleRegister}>
            <FormGroup>
                <Label for="exampleEmail"> Email </Label>
                <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label for="exampleEmail"> Username </Label>
                <Input
                id="exampleUsername"
                name="username"
                placeholder="Username"
                type="text"
                onChange={(e)=>setUsername(e.target.value)}
                />
            </FormGroup>
        
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                />
            </FormGroup>
            <Button className='btn_submit'>
                Submit
            </Button>
        </form>
    </section>
        
    );
}
 
export default Register;