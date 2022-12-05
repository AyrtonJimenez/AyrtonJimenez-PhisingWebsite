

function Login() {
    return (
    <div className="login">
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input type="text" />
                    <button type="submit" className="login_signInButton" >Continue</button>
                </form>
                <p>By continuing, you agree to Amazon's <a href="#">Conditions of
                    Use</a> and <a href="#">Privacy Notice</a>.
                </p>
                <a class="help" href="#">Need help?</a>
                
            </div>
            <button className="login_registerButton" >Create your Amazon Account</button>
            <p/>
            <hr/>
            <p class="links"><a href="#">Conditions of Use &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="#">Privacy Notice &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> <a href="#">Help &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><p>

            </p>
            <br/>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
    );

}

export default Login;