import React, { useState } from 'react';

function Login(props) {

    const [infoLogin, setInfoLogin] = useState({
        email: "",
        password: ""
    });

    function changeInputValue(e) {
        setInfoLogin({
            ...infoLogin,
            [e.target.name]: e.target.value,
        });
        // console.log("status", infoLogin)
    }

    function validationForm() {
        let returnData = {
            error: false,
            msg: ''
        };
        const { email, password } = infoLogin;
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            returnData = {
                error: true,
                msg: 'email is invalid'
            }
        }
        if (password.length < 8) {
            returnData = {
                error: true,
                msg: 'length pass > 8 character'
            }
        }
        return returnData;
    }

    function submitForm(e) {
        e.preventDefault();
        // console.log(infoLogin)
        const validation = validationForm();
        if (validation.error) {
            alert(validation.msg)
        } else {
            alert('Submit form success')
        }
    }

    return (
        <div className="container" style={{ paddingTop: "5%" }}>
            <form onSubmit={e => {
                submitForm(e);
            }}>
                <div className="form-group">
                    <label htmlFor="text">Email:</label>
                    <input type="text" className="form-control" name="email" placeholder="Enter email" onChange={e => changeInputValue(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={e => changeInputValue(e)} />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;