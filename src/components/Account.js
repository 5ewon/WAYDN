import React, { useState } from 'react';
import '../styles/Account.scss';

const Account = () => {
    const [signUp, setSignUp] = useState(true);
    const handleSubmit = (event) => {
        event.preventDefault(); 
    }
    return (
        <div className="login-wrap">
            {signUp ? 
                <>
                    <div className="login-box">
                        <div className="login-message">
                            <div>USER LOGIN</div>
                        </div>
                        <div className="login-input">
                            <form onSubmit={handleSubmit}>
                                <div className="id">
                                    <div>아이디</div>
                                    <input></input>
                                </div>
                                <div className="pw">
                                    <div>비밀번호</div>
                                    <input></input>
                                </div>
                                <div className="account-button">
                                    <button onClick={console.log('gay')}>Sign In</button>
                                </div>
                            </form>
                            <div className="change-form">
                                <div onClick={() => setSignUp(false)}>Create New Account</div>
                            </div>
                        </div>
                    </div>
                    <div className="login-logo">
                        <div className="login-logo-text">WAYDN</div>
                    </div> 
                </> : <>
                    <div className="login-box">
                        <div className="login-message">
                            <div>로그인</div>
                        </div>
                        <div className="login-input">
                            <form onSubmit={handleSubmit}>
                                <div className="id">
                                    <div>아이디</div>
                                    <input></input>
                                </div>
                                <div className="pw">
                                    <div>비밀번호</div>
                                    <input></input>
                                </div>
                                <div className="account-button">
                                    <button>Create New Account</button>
                                </div>
                            </form>
                            <div className="change-form">
                                <div onClick={() => setSignUp(true)}>Sign In</div>
                            </div>
                        </div>
                    </div>
                    <div className="login-logo">
                        <div className="login-logo-text">WAYDN</div>
                    </div>
                </>
            }
        </div>
    );
}

export default Account;