import React, { useState,useEffect } from 'react'
import { Form, Input, message } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Layouts/Spinner';
import axios from 'axios';
import Layout from "../components/Layouts/Layout";
const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const submitHandler = async (values) => {
        try {
            setLoading(true)
            await axios.post('/users/register', values)
            message.success('Registration Successfull')
            setLoading(false)
            navigate('/login')

        } catch (error) {
            setLoading(false)
            // message.error("something went wrong");
            console.error('Error during registration:', error.response?.data || error.message);
            message.error(error.response?.data?.message || "Something went wrong");

        }
    };
    //prevent for login user
    useEffect(()=>{
        if(localStorage.getItem("user")){
            navigate("/");
        }
    },[navigate]);
    return (
        <>
        <Layout>
            <div className='register-page'>
                {loading && <Spinner />}
                <Form layout='vertical' onFinish={submitHandler}>
                    <h1>Register Form</h1>
                    <Form.Item label="Name" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" />
                    </Form.Item>
                    <div className="d-flex justify-content-between">
                        <Link to="/login">Already Registered ? Click here to login</Link>
                        <button className='btn btn-primary'>Register</button>
                    </div>

                </Form>

            </div>
        </Layout>
        </>
    );
}
export default Register;