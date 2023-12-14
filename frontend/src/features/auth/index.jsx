import { useState } from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import InputField from "../common/InputField";
import { AuthHeader } from "./AuthHeader";
import { AuthNavigator } from "./AuthNavigator";
import "./Authpage.css";
import { login, register } from "../../api/auth.api";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const getLoginDetails = (user) => {
  const { email, password } = user;
  return { email, password };
};
const getRegisterDetails = (user) => {
  const { email, password, name } = user;
  return { email, password, name };
};
const comparePassword = (password, confirmPassword) =>
  password === confirmPassword;
export default function AuthPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const getAuthPromise = () => {
    return () => {
      if (isLogin) {
        const loginUser = getLoginDetails(user);
        return login(loginUser);
      } else if (isRegister) {
        if (!comparePassword(user.password, user.confirmPassword)) {
          toast.error("Confirm password and password does not match");
          return null;
        }
        const registerUser = getRegisterDetails(user);
        return register(registerUser);
      } else {
        return null;
      }
    }
  };
  const [authType, setAuthType] = useState("login");
  const isLogin = authType === "login";
  const isRegister = authType === "register";
  const onChangeUser = (e) => {
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };
  const onChangeAuthToRegister = () => setAuthType("register");
  const onChangeAuthToLogin = () => setAuthType("login");
  const authContext = useAuth();
  const navigate = useNavigate();
  const onAuthSubmit = async (e) => {
    e.preventDefault();
    const authPromise = getAuthPromise();
    if (authPromise) {
      try {
        const { data } = await authPromise();
        if (isLogin) {
          const {token, ...user} = data.data;
          localStorage.setItem("token", token);
          if (authContext) {
            authContext.onSetCurrentUser(user);
            console.log(data.data);
            navigate("/dashboard", { replace: true });
          }
        } else if (isRegister) {

        }
      } catch (error) {
        console.log(error);
        toast.error(isAxiosError(error) ? error.response.data.message : "Error occured")
      }
    }
  };

  return (
    <Container>
      <div className="auth__wrapper">
        {isLogin ? <AuthHeader text="Login" /> : null}
        {isRegister ? <AuthHeader text="Register" /> : null}
        <form
          onSubmit={onAuthSubmit}
          className="auth__form"
        >
          {authType === "register" ? (
            <InputField
              label="Name"
              placeholder="Name"
              value={user.name}
              onChange={onChangeUser}
              type="text"
              name="name"
              minLength={3}
              maxLength={50}
              id="name"
            />
          ) : null}
          <InputField
            label="Email"
            placeholder="Email"
            value={user.email}
            onChange={onChangeUser}
            type="email"
            name="email"
            minLength={3}
            maxLength={50}
            id="email"
          />
          <InputField
            label="Password"
            placeholder="Password"
            value={user.password}
            onChange={onChangeUser}
            type="password"
            name="password"
            minLength={8}
            maxLength={20}
            id="password"
          />
          {isRegister ? (
            <InputField
              label="Confirm Password"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={onChangeUser}
              type="passsword"
              name="confirmPassword"
              minLength={8}
              maxLength={20}
              id="confirmPassword"
            />
          ) : null}
          <AuthNavigator
            onClick={onChangeAuthToRegister}
            visible={isLogin}
            text={" Do you want to register ?"}
          />
          <AuthNavigator
            onClick={onChangeAuthToLogin}
            visible={isRegister}
            text={"Already registered ? Login !"}
          />
          {isLogin ? (
            <Button
              className="btn__secondary"
              btnLabel="Login"
              type="submit"
            />
          ) : null}
          {isRegister ? (
            <Button
              className="btn__secondary"
              btnLabel="Register"
              type="submit"
            />
          ) : null}
        </form>
      </div>
    </Container>
  );
}
