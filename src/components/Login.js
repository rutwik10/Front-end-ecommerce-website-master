import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  }

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setIsLoading(true);


    if (isLogin) {

      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6eg-uGaZTElwEqJpxAUgK_aFOJTeDHZc', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-type': 'application/json'
        }
      }).then((res) => {
        setIsLoading(false);
  
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed';
            alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      }).then((data) => {

        navigate('/store');
        alert('Login successfully')
        const randomString = Math.random().toString(36).substring(2, 7);
        localStorage.setItem('myKey', randomString);


      }).catch((err) => {
        alert(err.message);
      });

    } else {


      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6eg-uGaZTElwEqJpxAUgK_aFOJTeDHZc', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-type': 'application/json'
        }
      }).then((res) => {
        setIsLoading(false);
  
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed';
            alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      }).then((data) => {
        alert('Account created successfully')
      }).catch((err) => {
        alert(err.message);
      });


    }

    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <div className="login">
      <form onSubmit={submitHandler} className='loginform'>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <div>
          <label htmlFor="email">Your Email :</label>
          <input type="text" ref={emailRef} />
        </div>

        <div>
          <label htmlFor="password">Your Password :</label>
          <input type="password" ref={passwordRef} />
        </div>

        <button>{isLogin ? 'Login' : 'Sign Up'}</button>

        <div>
          <button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
