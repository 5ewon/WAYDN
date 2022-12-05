import React from 'react';
import '../styles/Login.scss';

const Login = () => {
    return (
        <div className="login-wrap">
            <div className="login-box">
                <div className="login-message">
                    <div>Login Please</div>
                </div>
                <div className="login-input">
                    <form>
                        <div className="id">
                            <div>아이디</div>
                            <input></input>
                        </div>
                        <div className="pw">
                            <div>비밀번호</div>
                            <input></input>
                        </div>
                    </form>
                </div>
            </div>
            <div className="login-logo">
                <div>WAYDN</div>
            </div>
        </div>
    );
}

export default Login;