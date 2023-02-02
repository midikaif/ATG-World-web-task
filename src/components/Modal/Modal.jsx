import React, { useState } from "react";
import image from '../../images/atg_illustration.png'
import "./Modal.css";

function Modal({ setModal }) {

    const [customer, setCustomer] = useState({});
    const [registered, setRegistration] = useState(false);

    function handleFormSubmit() {
        // console.log(customer)
        console.log(localStorage.getItem('user'));
        localStorage.setItem('user', JSON.stringify(customer));
        // window.location.href = '/'
        if (localStorage.getItem('user')) {
            // localStorage.setItem('user', JSON.stringify(customer));
            setRegistration(true);
        }
    }

    function handleLogin() {
        if (localStorage.getItem('user') && registered) {
            window.location.href = 'https://midikaif.github.io/ATG-World-web-task/'   
        }
    }

    return (
        <div className="modalBackground">
            <div className="outerContainer">
                <button className="titleCloseBtn float-end"
                    onClick={() => {
                        setModal(false);
                    }}
                >
                    X
                </button>
                <div className="modalContainer">
                    <div className="modal-header">
                        <span>
                            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                        </span>
                    </div>
                    <div className="modal-body">
                        <div className="container formBody">
                            <div className="title mb-2">
                                <h1>
                                    {registered === false ? 'Create Account' : 'Log In'}
                                </h1>
                            </div>
                            <div className="container">
                                <div>
                                    {
                                        !registered &&
                                        <div class="row pb-1">
                                            <div class="col">
                                                <input
                                                    onInput={
                                                        (e) => {
                                                            setCustomer({ ...customer, firstName: e.target.value });
                                                        }}

                                                    type="text" class="form-control" placeholder="First name" />
                                            </div>
                                            <div class="col">
                                                <input
                                                    onInput={
                                                        (e) => {
                                                            setCustomer({ ...customer, lastName: e.target.value });
                                                        }}

                                                    type="text" class="form-control" placeholder="Last name" />
                                            </div>
                                        </div>
                                    }
                                    <div class="row pb-1">
                                        <div class="col">
                                            <input

                                                onInput={
                                                    (e) => {
                                                        setCustomer({ ...customer, mail: e.target.value });
                                                    }}

                                                type="text" class="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="row pb-1">
                                        <div class="col">
                                            <input
                                                onInput={
                                                    (e) => {
                                                        setCustomer({ ...customer, password: e.target.value });
                                                    }}

                                                type="text" class="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    {!registered && <div class="row pb-1">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Confirm Password" />
                                        </div>
                                    </div>}
                                    
                                    <button
                                        onClick={() => {
                                           registered === false ? handleFormSubmit() : handleLogin()
                                        }}
                                        type='submit'
                                        className="btn btn-primary w-100 mt-2 border-circle">
                                        {registered === false ? 'Create Account' : 'Log In'}
                                    </button>

                                </div>
                                <div className="social-medias mt-3">
                                    <div className="social-media w-100 m-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>

                                        Sign                                 {registered === false ? 'up ' : 'in '}
                                        with Facebook
                                    </div>
                                    <div className="social-media w-100 m-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                        </svg>

                                        Sign                                 {registered === false ? 'up ' : 'in '}
 with Google
                                    </div>
                                </div>
                            </div>
{                            registered && <div id="pass" >
                                Forgot Password?
                            </div>}
                        </div>

                        <div className="description">
                            {!registered &&
                                <div className="signin-text">
                                
                                Already have an account?<span> Sign In</span>
                            
                            </div>}
                            
                            {registered &&
                                <div className="signin-text">
                                Don’t have an account yet?<span> Create new for free!</span>
                            </div>}
                            <div className="modal-image">
                                <img src={image} alt="" />
                            </div>
                            {!registered && <div className="modal-footer">
                                By signing up, you agree to our Terms & conditions, Privacy policy
                            </div>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Modal;
