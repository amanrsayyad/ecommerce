import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../actions/authActions";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(email, password));
    if (isAuthenticated == true) {
      navigate("/");
    }
  };

  const handleRegister = () => {
    dispatch(register(username, email, password));
    if (isAuthenticated == true) {
      navigate("/");
    }
  };

  return (
    <>
      <AuthContainer>
        <Header />
        <AuthMain>
          <AuthCard>
            <h2>{isRegistering ? "Register" : "Login"}</h2>
            <AuthForm>
              {isRegistering ? (
                <>
                  {/* Register  */}
                  <div className="input-container">
                    <label>Username</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="input-container">
                    <label>Email</label>
                    <input
                      type="email"
                      name=""
                      id=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="input-container">
                    <label>Password</label>
                    <input
                      type="password"
                      name=""
                      id=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </div>
                  <button onClick={handleRegister}>
                    {isRegistering ? "Register" : "Login"}
                  </button>
                </>
              ) : (
                <>
                  {/* Login  */}
                  <div className="input-container">
                    <label>Email</label>
                    <input
                      type="email"
                      name=""
                      id=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="input-container">
                    <label>Password</label>
                    <input
                      type="password"
                      name=""
                      id=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </div>
                  <button onClick={handleLogin}>
                    {isRegistering ? "Register" : "Login"}
                  </button>
                </>
              )}
            </AuthForm>
            <AuthLinks className="d-flex f-col">
              <label>--- OR ---</label>
              <div>
                {isRegistering ? (
                  <p>
                    Already Have An Account?{" "}
                    <span onClick={() => setIsRegistering(!isRegistering)}>
                      Sign In
                    </span>
                  </p>
                ) : (
                  <p>
                    Create An Account?{" "}
                    <span onClick={() => setIsRegistering(!isRegistering)}>
                      Sign Up
                    </span>
                  </p>
                )}
              </div>
            </AuthLinks>
          </AuthCard>
        </AuthMain>
      </AuthContainer>
      <Footer />
    </>
  );
};

export default Auth;

const AuthContainer = styled.div`
  position: relative;
  background-color: #f2f0f1;
  width: 100%;
  height: 100vh;
`;

const AuthMain = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AuthCard = styled.div`
  width: 450px;
  height: 100%;
  padding: 20px 30px;
  border: 2px solid var(--main-color);

  h2 {
    color: var(--main-color);
    text-transform: uppercase;
  }
`;

const AuthForm = styled.form`
  padding: 20px 0px;
  .input-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
    label {
      margin-bottom: 5px;
      font-size: 17px;
      letter-spacing: 2px;
      font-weight: 600;
    }
    input {
      width: 100%;
      padding: 15px;
      border: none;
      outline: none;
      border: 1px solid var(--main-color);
      font-size: 18px;
      letter-spacing: 2px;

      &::placeholder {
        font-size: 18px;
        letter-spacing: 2px;
        opacity: 0.3;
      }
    }
  }
  button {
    background-color: var(--main-color);
    color: #fff;
    border: none;
    outline: none;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    font-size: 17px;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const AuthLinks = styled.div`
  label {
    color: var(--main-color);
    margin-bottom: 10px;
    font-size: 17px;
  }
  p {
    letter-spacing: 2px;
    font-size: 17px;
    font-weight: 700;
    span {
      color: var(--main-color);
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
